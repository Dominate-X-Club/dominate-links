import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs/server';

export default async function Page({ params }: { params: { username: string } }) {

  console.log("username inside dashboard", params.username);

  const user = await currentUser();



  // check if user is present or not
  // if user not present then create new user
  // if user present then show edit functionality



  if (!user) return <div>Not signed in</div>;

  return <div>
    Hello {user?.firstName}
    <Button>Hello World</Button>
  </div>;
}