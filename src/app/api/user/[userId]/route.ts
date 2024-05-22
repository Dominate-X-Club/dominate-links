import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



// Getting User Info
export async function GET(req: Request,{ params }: { params: { userId: string } } ) {
    try {
      if (!params.userId) { return new NextResponse("userId id is required", { status: 401 }) };
  
      const user = await prisma.user.findUnique({
        where: {
          id: params.userId,
        }
      });
  
      return NextResponse.json(user);
  
    } catch (error) {
      console.log('[userId_GET]', error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
  
// Updating User info
export async function PUT(
    req: Request,
    { params }: { params: { userId: string } }
  ) {
    try {

        // Check if all the feilds are available 
        // Check if username is already present 
        // Store all the fields in the databse
        // return a sucess message

      const { userId } = auth();
      const body:{
        name: string;
        username: string;
        bio: string;
      } = await req.json();
  
      const { name,username,bio } = body;
  
      if (!userId&&userId!=params.userId) { return new NextResponse("Unauthenticateed", { status: 401 }) };
  
      if (!name) { return new NextResponse("Name is Required", { status: 400 }) };
  
      if (!username) { return new NextResponse("Username  is Required", { status: 400 }) };
      
      if (!bio) { return new NextResponse("Bio is Required", { status: 400 }) };
  
      if (!params.userId) { return new NextResponse("userId id is required", { status: 401 }) };
  

    //   Check for username  
      const userWithUsername = await prisma.user.findFirst({
        where: {
          username:username,
        }
      })
  
      if (userWithUsername) {
        return new NextResponse("Username already taken", { status: 409 });
      }
      
    //   Store Data in database
    const updatedUser = await prisma.user.update({
        where: { id: params.userId },
        data: { name, username, bio },
      });

      return NextResponse.json(updatedUser, { status: 200 });
      
  
    } catch (error) {
      console.log('[user_put]', error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }