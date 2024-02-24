import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user} = useAuth0();

  return (
      <div className="mr-8 flex">
        <img className="rounded-full w-[50px] mt-2 cursor-pointer" src={user.picture} alt={user.name} />
      </div>
  );
};

export default Profile;