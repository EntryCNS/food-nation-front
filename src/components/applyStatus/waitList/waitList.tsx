import React from "react";
import { Wrapper, Container, ItemBox } from "./watiList.style";
import Heart from "../../../assets/image/heart.svg";

const data = [
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
  {
    title: "방울토마토",
    desc: "울퉁 불퉁 멋진 몸매에빠알간 옷을 입고새콤달콤 단내 풍기는멋쟁이 토마토 (토마토) 나는야 주스될거야",
    kind: "디저트",
    vote: 0,
  },
];
const WaitList = () => {
  return (
    <Wrapper>
      <h1>대기 목록</h1>
      <Container>
        {data.map((item) => (
          <>
            <ItemBox>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p id="tag">#{item.kind}</p>
              <div>
                <p>{item.vote}</p>
                <Heart />
              </div>
            </ItemBox>
          </>
        ))}
      </Container>
    </Wrapper>
  );
};

export default WaitList;
