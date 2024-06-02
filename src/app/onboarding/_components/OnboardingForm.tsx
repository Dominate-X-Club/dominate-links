"use client";

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSession } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/Spinner';
import { SignupFormInputs } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';
import { onboarding } from '../actions';

interface PageProps {
  data: {
    name: string;
    username: string;
    bio: string;
  }
}
const ProfileSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(40, 'Name must have less than 40 characters'),
  username: z.string()
    .min(1, 'Username is required')
    .max(40, 'Username must have less than 40 characters'),
  bio: z.string()
    .min(1, 'Bio is required')
    .max(150, 'Bio must have less than 150 characters'),
});

const OnboardingForm: FC<PageProps> = ({ data }) => {
  console.log("data", data);

  const router = useRouter();
  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors }, setError } = useForm<SignupFormInputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: data
  });

  const { session } = useSession();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormInputs) => {
    setLoading(true);
    const response = await onboarding(data);
    setLoading(false);
    if (response.success) {
      toast({
        title: "User Successfully onboarded",
        variant: 'default',
      })
      router.push(`/dashboard/links`);
    } else {
      setError('username', { type: 'custom', message: response.errors.message })
    }

  };



  return (
    <div className="flex justify-center items-center px-6 min-h-screen">
      <div className="space-y-6 mx-auto max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-3xl">Complete Your Profile</h1>
          <p className="text-gray-500">Enter your information to update your profile</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input {...register('name')} id="name" placeholder="Enter your first name" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
          </div>
          <div className="my-8">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input {...register('username')} id="username" placeholder="Enter your username" />
              {errors.username && <span className="text-red-500">{errors.username.message}</span>}
            </div>
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea {...register('bio')} id="bio" placeholder="Enter your bio" />
            {errors.bio && <span className="text-red-500">{errors.bio.message}</span>}
          </div>
          <Button type="submit" className="my-4">
            Save {loading && <Spinner />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
