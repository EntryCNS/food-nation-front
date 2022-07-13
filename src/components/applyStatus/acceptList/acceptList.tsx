import React from "react";
import { Wrapper, ItemBox, Container } from "./acceptList.style";
import Image from "next/image";
import acceptBack from "assets/image/acceptBack.png";
import Accept from "../../../assets/image/common/accept.svg";
import Heart from "../../../assets/image/heart.svg";

const data = [
  {
    date: "2022.03.09",
    title: "치즈 떡볶이",
    status: true,
    tag: "한식",
    des: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요",
    vote: 124,
  },
  {
    date: "2022.03.09",
    title: "치즈 떡볶이",
    status: true,
    tag: "한식",
    des: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요",
    vote: 124,
  },
  {
    date: "2022.03.09",
    title: "치즈 떡볶이",
    status: true,
    tag: "한식",
    des: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요",
    vote: 123,
  },
  {
    date: "2022.03.09",
    title: "치즈 떡볶이",
    status: true,
    tag: "한식",
    desc: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요",
    vote: 124,
  },
  {
    date: "2022.03.09",
    title: "치즈 떡볶이",
    status: true,
    tag: "한식",
    desc: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요",
    vote: 124,
  },
];

const AcceptList = () => {
  return (
    <Wrapper>
      <h1>수락 목록</h1>
      <Container>
        {data.map((item, idx) => (
          <>
            <ItemBox key={idx}>
              <div className="head">
                <Accept />
                <p id="date">{item.date}</p>
              </div>
              <h1>{item.title}</h1>
              <p id="desc">{item.des}</p>
              <div className="foot">
                <p id="tag">#{item.tag}</p>
                <div>
                  <p id="vote">{item.vote}</p>
                  <Heart />
                </div>
              </div>
            </ItemBox>
          </>
        ))}
      </Container>
      <div className="imgContainer">
        <Image src={acceptBack} id="backImg" />
      </div>
    </Wrapper>
  );
};

export default AcceptList;
