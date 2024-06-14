"use client";
import { FC } from 'react'
import { buttonVariants } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { Instagram, Linkedin, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import { User, Link as LinkType } from "@prisma/client";


interface PublicPageProps {
  user: (User & { links: LinkType[] }) | null;
}

const PublicPage: FC<PublicPageProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center p-4 pt-14 min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src={user.profilePic}
          height={96}
          width={96}
          className="rounded-full h-24"
          alt="Lakshya Runwal"
        ></Image>
        <h1 className="mt-4 font-bold text-4xl text-center">{user.name}</h1>
        <p className="bg-gray-200 mt-2 px-3 py-1 rounded-lg text-sm">
          @{user.username}
        </p>
        <p className="mt-2 text-center">{user.bio}</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 mt-8 w-full max-w-xs">
        {user.links.map(({ name, url, image, description, id }) => {
          return (
            <TooltipProvider key={id}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex justify-between items-center space-x-4 bg-gray-100 hover:bg-gray-200 shadow-md my-2 p-4 rounded-lg min-w-[20rem]">
                    <Image src={image} alt={name} height={32} width={32} />
                    <h2 className="font-bold">{name}</h2>
                    <Link
                      href={url}
                      target="__blank"
                      className={buttonVariants()}
                    >
                      Visit
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{description}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default PublicPage