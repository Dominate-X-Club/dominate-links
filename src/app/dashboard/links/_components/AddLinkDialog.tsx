import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { LinkFormInputs } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LinkForm from './LinkForm';

interface AddLinkDialogProps {
  addLink(url: string, name: string, description: string): void;
}



export const zodLinkSchema = z.object({
  name: z.string().min(1,'Name is required'),
  url: z.string().url('Invalid URL'),
  description: z.string(),
});



const AddLinkDialog: FC<AddLinkDialogProps> = ({ addLink }) => {
  const { register, handleSubmit, formState: { errors },setValue } = useForm<LinkFormInputs>({
    resolver: zodResolver(zodLinkSchema),
  });


  const onSubmit = async (data) => {
    addLink(data.name, data.url, data.description);
    setValue("name","");
    setValue("url","");
    setValue("description","");
    document.getElementById('dialoge-close').click();
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Your Link</DialogTitle>
      </DialogHeader>
      <DialogClose id='dialoge-close'></DialogClose>
        <LinkForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        />
    </DialogContent>
  );
};

export default AddLinkDialog;