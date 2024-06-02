import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form'
import { LinkFormInputs } from '@/lib/types';
import { FC } from 'react'

interface LinkFormProps {
    handleSubmit: UseFormHandleSubmit<LinkFormInputs>;
    onSubmit: SubmitHandler<LinkFormInputs>;
    register: UseFormRegister<LinkFormInputs>;
    errors: FieldErrors<LinkFormInputs>;
}

const LinkForm: FC<LinkFormProps> = ({handleSubmit,onSubmit,register,errors}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="name" className="text-left text-gray-900">
              Name
            </Label>
            <Input
              id="name"
              placeholder='Enter Your Link Name'
              {...register('name')}
              className="col-span-3"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="url" className="text-left text-gray-900">
              URL
            </Label>
            <Input
              id="url"
              placeholder='Enter Your URL'
              {...register('url')}
              className="col-span-3"
            />
            {errors.url && (
              <div className="text-red-500">{errors.url.message}</div>
            )}
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="description" className="text-left text-gray-900">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder='Enter Your Link Description'
              {...register('description')}
              className="col-span-3"
            />
            {errors.description && (
              <div className="text-red-500">{errors.description.message}</div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
  )
}

export default LinkForm