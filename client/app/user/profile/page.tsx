import Image from "next/image";
import imageMe from "@/public/images/me.png";

const ProfilePage = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Profile</h2>
      <div className="flex justify-center p-3">
        <Image src={imageMe} alt="" className="h-36 w-36 rounded-full" />
      </div>
        <span className="flex justify-center p-3">Hleelo</span>
    </div>
  );
};

export default ProfilePage;
