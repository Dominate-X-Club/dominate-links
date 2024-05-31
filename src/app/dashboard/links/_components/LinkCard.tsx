import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDaysIcon, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import EditLinkDialog from "./EditLinkDialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import DeleteLinkDialog from "./DeleteLinkDialog";
import { Link as LinkType } from "@prisma/client";
import Image from "next/image";

interface LinkCardProps {
  link:LinkType;
  deleteLink(id:number):void;
  updateLink(id:number,name:string,url:string,description:string):void;
}

const LinkCard: FC<LinkCardProps> = ({link,deleteLink,updateLink}) => {
  return (
    <div className="w-full max-w-md shadow-md rounded-md transition-shadow">
      <div className="grid grid-cols-[64px_1fr] gap-4 items-center p-2">
        <Image
          alt="Link Image"
          className="aspect-square object-cover rounded-md mx-2"
          height={64}
          src={link.image}
          width={64}
        />
        <div className="space-y-2 p-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  {link.name}
                </Link>
              </h3>
              <div className="flex items-center space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                  </DialogTrigger>
                    <EditLinkDialog updateLink={updateLink} link={link}/>
                </Dialog>
                <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button size="icon" variant="ghost">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
                </AlertDialogTrigger>
                <DeleteLinkDialog deleteLink={deleteLink} id={link.id}/>
                </AlertDialog>
              </div>
            </div>
            <p className="text-gray-500 underline text-sm">
              {link.url}
            </p>
          </div>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <CalendarDaysIcon className="mr-1 h-4 w-4" />
            <span>Created on {link.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default LinkCard;
