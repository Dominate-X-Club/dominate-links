import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import { FC } from "react";
import LinkCard from "./LinkCard";
import AddLinkDialog from "./AddLinkDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "@prisma/client";

interface AddLinksProps {
  setIsMobilePreview: React.Dispatch<React.SetStateAction<boolean>>;  
  links:Link[],
  addLink(url:string,name:string,description:string):void,
  deleteLink(id:number):void,
  updateLink(id:number,name:string,url:string,description:string):void
}

const AddLinks: FC<AddLinksProps> = ({ setIsMobilePreview,links,addLink,deleteLink,updateLink }) => {
  return (
    <div className="relative flex flex-col w-full md:w-1/2 p-4">
      <div className="flex w-full justify-between">
      <h3 className="text-2xl font-bold">Links</h3>
      <Button
        onClick={() => {
          setIsMobilePreview(true);
        }}
        variant="outline"
        className="flex items-center gap-2 sm:hidden rounded-full px-2 mb-4"
      >
        <Eye/>
        Preview
      </Button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="max-w-36 my-4">
            <Plus /> Add link
          </Button>
        </DialogTrigger>
        <AddLinkDialog addLink={addLink}/>
      </Dialog>
      {links.length>0?links.map((link)=>{
        return <LinkCard link={link} key={link.id} deleteLink={deleteLink} updateLink={updateLink}/>
      }):<h2>Add Some Links</h2>}
    </div>
  );
};

export default AddLinks;
