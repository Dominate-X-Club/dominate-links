"use server"

import prisma from "@/utils/db"
import { auth } from "@clerk/nextjs/server";

const { userId } = auth();

export const addLinkToServer = async (name:string,url:string,description:string) => {
const parsedUrl =new URL(url)
const imageURL=`https://images.weserv.nl/?url=${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`
const res = await prisma.link.create({
    data: {
      name: name,
      url: url,
      image:imageURL,
      description: description,
      User: {
        connect: { id: userId },
      },
    },
  });

  return res ?? null;
}

export const deleteLinkToServer=async(id:number)=>{
  const res = await prisma.link.delete({
    where:{
      id:id
    }
  });

  return res ?? null;
}

export const updateLinkToServer=async(id:number,name:string,url:string,description:string)=>{
  const parsedUrl =new URL(url)
  const imageURL=`https://images.weserv.nl/?url=${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`
  const res = await prisma.link.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      url: url,
      description: description,
    },
  });

  return res ?? null;
}