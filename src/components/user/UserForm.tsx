'use client'
import React from 'react'
import { z } from 'zod';
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
  email: z.string().email("Please enter a hhhh email"),
  password: z
    .string()
    .min(3)
    .max(20)
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;


const UserForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  console.log("errors", errors);


  function submitHandler(data: FieldValues) {
    console.log("data inside submit", data);

  }

  return (
    <form className="form" onSubmit={handleSubmit(submitHandler)}>
      <input className="input" placeholder="email" {...register("email")} />
      <input
        className="input"
        placeholder="password"
        {...register("password")}
      />
      <button type="submit">submit!</button>
    </form>
  )

}

export default UserForm