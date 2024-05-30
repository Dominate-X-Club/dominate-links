import prisma from "@/utils/db";
import { FC } from "react";
import PublicPage from "./_components/PublicPage";

export interface pageProps {
  params: {
    username: string
  }
}

const page: FC<pageProps> = async({ params }) => {

  
  const userData=await prisma.user.findUnique({
    where:{
      username:params.username
    },
    include:{
      links:true
    }
  });
  if(!userData){
    return (<h1>Wrong Username</h1>)
  }


  return (
    <div>
      <PublicPage user={userData}/>
    </div>
  );
};
export default page 