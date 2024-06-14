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

const page = ({ params }: { params: { username: string } }) => {
  const User = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Lakshya Runwal",
    username: "lakshyarunwal",
    email: "lakshyarunwal@gmail.com",
    bio: "Full-stack developer with a passion for open-source projects and clean code.",
    profilePic: "https://avatars.githubusercontent.com/u/76898541?v=4",
    createdAt: "2023-11-01T10:00:00Z",
    updatedAt: "2023-11-01T10:00:00Z",
    links: [
      {
        id: 1,
        name: "GitHub",
        url: "https://github.com/janedoe123",
        image: <Github />,
        description: "My GitHub profile",
        createdAt: "2023-11-01T10:00:00Z",
        updatedAt: "2023-11-01T10:00:00Z",
        userId: "123e4567-e89b-12d3-a456-426614174000",
      },
      {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/janedoe123/",
        image: <Linkedin />,
        description: "My LinkedIn profile",
        createdAt: "2023-11-01T10:00:00Z",
        updatedAt: "2023-11-01T10:00:00Z",
        userId: "123e4567-e89b-12d3-a456-426614174000",
      },
      {
        id: 3,
        name: "Twitter",
        url: "https://twitter.com/janedoe123",
        image: <Twitter />,
        description: "My Twitter profile",
        createdAt: "2023-11-01T10:00:00Z",
        updatedAt: "2023-11-01T10:00:00Z",
        userId: "123e4567-e89b-12d3-a456-426614174000",
      },
    ],
  };

  console.log("username inside profile", params.username);

  return (
    <div className="min-h-screen flex flex-col items-center  p-4 pt-14">
      <div className="flex flex-col items-center">
        <Image
          width={96}
          height={96}
          src={User.profilePic}
          className="h-24 rounded-full"
          alt="Lakshya Runwal"
        />
        <h1 className="text-4xl font-bold mt-4 text-center">{User.name}</h1>
        <p className="rounded-lg mt-2 bg-gray-200 px-3 py-1 text-sm">
          @{User.username}
        </p>
        <p className="text-center mt-2">{User.bio}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4 items-center justify-between w-full max-w-xs">
        {User.links.map(({ name, url, image, description,id }) => {
          return (
            <TooltipProvider key={id}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="min-w-[20rem] bg-gray-100 hover:bg-gray-200 my-2 p-4  rounded-lg shadow-md flex items-center justify-between space-x-4">
                    {image}
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
export default page;
