import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link as LinkType, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PhoneBodyProps {
  links:LinkType[];
  user:User;
}

const PhoneBody: FC<PhoneBodyProps> = ({links,user}) => {

  
  return (
    <div className="flex items-start justify-center pt-4  bg-white">
      <div className="relative w-[380px] h-[90vh] sm:h-[600px] bg-red rounded-3xl shadow-lg border-8 border-black overflow-hidden">
        {/* Speaker */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 rounded-full"></div>

        {/* Front Camera */}
        <div className="absolute flex items-center justify-center top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>

        {/* Screen */}
        <div className="mt-10 px-4 py-2 space-y-4 overflow-y-auto h-full">
          <div className="flex flex-col items-center p-4 pt-8">
            <div className="flex flex-col items-center">
              <Image
                src={user.profilePic}
                width={96}
                height={96}
                className="h-24 rounded-full"
                alt={user.username}
              />
              <h1 className="text-xl font-bold mt-4 text-center">
                {user.name}
              </h1>
              <p className="rounded-lg mt-2 bg-gray-200 px-3 py-1 text-sm">
                @{user.username}
              </p>
              <p className="text-center text-sm mt-2">{user.bio}</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 items-center justify-between w-full max-w-xs">
              {links.map(({ name, url, image, description, id }) => (
                <TooltipProvider key={id}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="min-w-[15rem] bg-gray-100 hover:bg-gray-200 p-2 rounded-lg shadow-md flex items-center justify-between space-x-4">
                        <Image width={32} height={32} src={image} alt={name} className="w-8 h-8"/>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneBody;
