import React from "react";
import { Wrapper, Container, ItemBox } from "./todayList.style";
import Heart from "../../../assets/image/heart.svg";

const todayList = () => {
  const data = [
    { title: "딸기", vote: 10 },
    { title: "딸기", vote: 10 },
    { title: "딸기", vote: 10 },
    { title: "딸기", vote: 10 },
  ];
  return (
    <Wrapper>
      <h1>오늘 반영된 메뉴</h1>
      <Container>
        {data.map((item, idx) => (
          <ItemBox key={idx}>
            <h2>{item.title}</h2>
            <div>
              <p>{item.vote}</p>
              <Heart />
            </div>
          </ItemBox>
        ))}
      </Container>
    </Wrapper>
  );
};

export default todayList;
