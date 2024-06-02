import { FC } from 'react'
import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogDescription } from '@radix-ui/react-dialog'
import LinkForm from './LinkForm'
import { useForm } from 'react-hook-form';
import { zodLinkSchema } from './AddLinkDialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@prisma/client'
import { LinkFormInputs } from '@/lib/types'

interface EditLinkDialogProps {
  link:Link;
  updateLink(id:number,name:string,url:string,description:string):void;
}

const EditLinkDialog: FC<EditLinkDialogProps> = ({updateLink,link}) => {
    const { register, handleSubmit, formState: { errors },setValue } = useForm<LinkFormInputs>({
      resolver: zodResolver(zodLinkSchema),
      defaultValues: {
        name:link.name,
        url:link.url,
        description:link.description
      }
    });
  
  
    const onSubmit = async (data) => {
      updateLink(link.id,data.name, data.url, data.description);
      setValue("name","");
      setValue("url","");
      setValue("description","");
      document.getElementById('dialoge-close').click();
    };

  return (
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Link</DialogTitle>
          <DialogDescription>
            Make changes to your Link here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <DialogClose id='dialoge-close'></DialogClose>
        <LinkForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        />
      </DialogContent>
  )
}

export default EditLinkDialog