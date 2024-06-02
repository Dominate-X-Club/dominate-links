import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { FC } from 'react'
interface DeleteLinkDialogProps {
  id:number;
  deleteLink(id:number):void;
}

const DeleteLinkDialog: FC<DeleteLinkDialogProps> = ({deleteLink,id}) => {
  return (
    <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your link
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{deleteLink(id)}}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
  )
}

export default DeleteLinkDialog