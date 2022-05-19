import React from "react";

import Image from "next/image";
import profileImage from "assets/image/profile.png";
import * as MR from "./MyRank.style";
import MyRankImage1 from "assets/image/MyRank1.png";
import MyRankImage2 from "assets/image/MyRank2.png";

const data = [
  {
    name: "정우재",
    rank: 99,
    contribute: 1,
  },
];

const MyRank = () => {
  return (
    <MR.Container>
      <MR.MyProfileContainer>
        <div className="profileImg">
          <Image src={profileImage} />
        </div>
        <p className="name whiteFont">{data[0].name}</p>
        <hr />
        <div className="mini">
          <label>
            <p className="whiteFont">기여도</p>
            <p className="whiteFont">{data[0].contribute}</p>
          </label>
          <label>
            <p className="whiteFont">내 랭킹</p>
            <p className="rank">{data[0].rank}</p>
          </label>
        </div>
        <div className="img">
          <div className="img1">
            <Image src={MyRankImage1} />
          </div>
          <div className="img2">
            <Image src={MyRankImage2} />
          </div>
        </div>
      </MR.MyProfileContainer>
    </MR.Container>
  );
};

export default MyRank;
