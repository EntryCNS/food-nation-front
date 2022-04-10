import React from "react";
import ProfileBarContainer from "components/profileBar/profileBarStyle";
import Custom1 from "assets/image/profileCustom1.png";
import Custom3 from "assets/image/profileCustom3.png";
import Custom4 from "assets/image/profileCustom4.png";
import Custom2 from "assets/image/profileImage.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
const ProfileBar = () => {
  const { data: session } = useSession();
  return (
    <ProfileBarContainer>
      <div className="custom1">
        <Image src={Custom1} />
      </div>
      <div className="custom2">
        <div className="drop">
          <Image src={Custom2} width={130} height={130} />
        </div>
        <h2>{session?.user?.name}</h2>
        <p>학생</p>
      </div>
      <div className="custom3">
        <Image src={Custom3} />
      </div>
      <div className="custom4">
        <Image src={Custom4} />
      </div>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
