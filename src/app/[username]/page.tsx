import { FC } from "react";

export interface pageProps {
  params: {
    username: string
  }
}

const page: FC<pageProps> = ({ params }) => {
  console.log("username inside public page", params.username);
  return (
    <div>
      Public page for showing links {params.username}
    </div>
  );
};
export default page 