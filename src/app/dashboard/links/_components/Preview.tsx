import { Button, buttonVariants } from "@/components/ui/button";
import { X } from "lucide-react";

import React, { FC } from "react";
import PhoneBody from "./PhoneBody";
import { Link, User } from "@prisma/client";

interface PreviewProps {
  isMobilePreview: boolean;
  setIsMobilePreview: React.Dispatch<React.SetStateAction<boolean>>;
  links:Link[];
  user:User;
}

const Preview: FC<PreviewProps> = ({ isMobilePreview, setIsMobilePreview,links,user }) => {

  return (
    <div
      className={`${
        isMobilePreview ? "fixed" : "hidden sm:block"
      } w-full h-screen md:h-auto md:w-1/2 z-20 transition-all top-0 left-0 md:relative md:flex md:flex-col`}
    >
      
      <PhoneBody links={links} user={user}/>

      <Button
        onClick={() => {
          setIsMobilePreview(false);
        }}
        variant="outline"
        className="sm:hidden z-20 rounded-full px-2 fixed bottom-0 left-[50%] transform -translate-x-1/2 mb-4"
      >
        <X />
      </Button>
      
    </div>
  );
};

export default Preview;
