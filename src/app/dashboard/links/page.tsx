
import Links from './_components/Links'
import prisma from '@/utils/db'
import { auth } from "@clerk/nextjs/server";
import { Link, User } from '@prisma/client';


const LinksPage = async () => {
  const { userId } = auth();
  // Fetching Links
  let links: Link[] = null;
  if (userId) {
    links = await prisma.link.findMany({
      where: { userId: userId },
    });
  }

  // Fetching User
  let user: User = null;
  if (userId) {
    user = await prisma.user.findUnique({ where: { id: userId } });
  }

  return <div>
    <Links fetchedLinks={links} user={user} />
  </div>
}

export default LinksPage