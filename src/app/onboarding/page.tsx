"use client"

import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { useSession } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/Spinner';

interface pageProps {
  
}

export interface SignupFormInputs {
  name: string;
  username:string;
  bio: string;
}

// Zod validation 
export const ProfileSchema = z.object({
  name: z.string()
    .min(1,'Name is required')
    .min(2, 'Name must have at least 2 characters')
    .max(40,"Name must have less than 40 characters"),
    username: z.string()
    .min(1,'username is required')
    .min(2, 'username must have at least 2 characters')
    .max(40,"userame must have less than 40 characters"),
  bio: z.string()
    .min(1,'Bio is required')
    .min(10, 'Bio must have at least 10 characters')
    .max(150,"Bio must have less than 150 characters"),
});


const page: FC<pageProps> = ({}) => {

  const router = useRouter()


  // React Hook Form Validation
  const { register, handleSubmit, formState: { errors },setError,setValue } = useForm<SignupFormInputs>({
    resolver: zodResolver(ProfileSchema),
  });

  

  // Fetching relavent user data
  const { session } = useSession();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchUserData() {
      if (session) {
        const userId = session.user.id;
        const response = await fetch(`/api/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setValue("name",data.name)
          setValue("username",data.username)
          setValue("bio",data.bio)
          setUser(data);
        } else {
          console.error('Failed to fetch user data');
        }
      }
    }

    fetchUserData();
  }, [session]);
  console.log(user);


  const onSubmit = async(data: SignupFormInputs) => {
    console.log("Form Data:", data);
    const {username,name,bio}=data;

    setLoading(true)
    const response = await fetch(`/api/user/${session?.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, bio }),
    });

    setLoading(false)

    if (response.status === 401) {
      throw new Error('Unauthenticated. Please log in.');
    } else if (response.status === 400) {
      throw new Error('Bad Request. Please fill all required fields.');
    } else if (response.status === 409) {
        setError("username", { 
        type: "manual",
        message: "This username is not allowed. Please choose another one."
      });
    } else if (response.status === 500) {
      throw new Error('Internal Server Error. Please try again later.');
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    // If everything goes well
    router.push('/dashboard')

  };


  return (
    <div className="min-h-screen flex items-center justify-center px-6">
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Complete Your Profile</h1>
        <p className="text-gray-500">Enter your information to update your profile</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-8">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} id="name" placeholder="Enter your first name" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
        </div>
        <div className="my-8">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input {...register("username")} id="username" placeholder="Enter your username" />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
          </div>
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea {...register("bio")} id="bio" placeholder="Enter your bio" />
          {errors.bio && <span className="text-red-500">{errors.bio.message}</span>}
        </div>
        <Button type="submit" className="my-4">Save{loading?<Spinner/>:""}</Button>
      </form>
    </div>
  </div>
)
}

export default page