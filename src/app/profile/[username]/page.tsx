import UserForm from "@/components/user/UserForm";




const page = ({ params }: { params: { username: string } }) => {
  console.log("username inside profile", params.username);

  return (
    <div>
      Hello profile olf {params.username}
      <UserForm />
    </div>
  );
};
export default page 