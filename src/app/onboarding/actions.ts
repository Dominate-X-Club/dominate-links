"use server"

import prisma from "@/utils/db"
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


export const getUsername = async (username: string) => {
  const userWithUsername = await prisma.user.findFirst({
    where: {
      username: username,
    }
  })

  return userWithUsername ?? null;
}


export const onboarding = async (data: { name: string, username: string, bio: string }) => {
  const { userId } = auth();

  const userWithUsername = await getUsername(data.username)
  if (userWithUsername) {
    return {
      success: false,
      errors: {
        message: 'An error occurred while processing the request.',
        // You can include more detailed error information here
      }
    }
  } else {
    await prisma.user.update({
      where: { id: userId },
      data: { name: data.name, username: data.username, bio: data.bio },
    });

    revalidatePath('/', 'page')

    return {
      success: true,
      message: "Profile created successfully"
    }
  }
}
