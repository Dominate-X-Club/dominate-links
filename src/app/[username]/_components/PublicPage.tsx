import { FC } from 'react'
"use client";
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
import { User,Link as LinkType } from "@prisma/client";


interface PublicPageProps {
    user: (User & { links: LinkType[] }) | null;
}

const PublicPage: FC<PublicPageProps> = ({user}) => {
      return (
        <div className="min-h-screen flex flex-col items-center  p-4 pt-14">
          <div className="flex flex-col items-center">
            <img
              src={user.profilePic}
              className="h-24 rounded-full"
              alt="Lakshya Runwal"
            ></img>
            <h1 className="text-4xl font-bold mt-4 text-center">{user.name}</h1>
            <p className="rounded-lg mt-2 bg-gray-200 px-3 py-1 text-sm">
              @{user.username}
            </p>
            <p className="text-center mt-2">{user.bio}</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 items-center justify-between w-full max-w-xs">
            {user.links.map(({ name, url, image, description,id }) => {
              return (
                <TooltipProvider key={id}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="min-w-[20rem] bg-gray-100 hover:bg-gray-200 my-2 p-4  rounded-lg shadow-md flex items-center justify-between space-x-4">
                      <img src={image} alt={name} className="w-8 h-8"/>
                        <h2 className="font-bold ">{name}</h2>
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