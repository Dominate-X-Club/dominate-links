import React from "react";
import OnboardingForm from "./_components/OnboardingForm";
import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from 'next/navigation';

const OnboardingPage = async () => {
  const { userId } = auth();


  let user: User = null;
  if (userId) {
    user = await prisma.user.findUnique({ where: { id: userId } });
  }

  if (user.username) {
    redirect('/dashboard/' + user.username)
  }

  const defaultValues = {
    name: user?.name,
    username: user?.username,
    bio: user?.bio,
  };

  return <OnboardingForm data={defaultValues} />;
};

export default OnboardingPage;
