import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { ListContainer } from "components/applymenu/applyListStyle";
import image from "assets/image/heart.png";
import checkImage from "assets/image/check.png";

const kategorys = [
  "전체",
  "한식",
  "일식",
  "중식",
  "양식",
  "디저트",
  "패스트푸드",
];

const menus = [
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "순살 치킨",
    description:
      "후라이드 치킨에 양념소스 따로 나왔으면 좋겠어요! 찍먹이 맛있거둥요",
    tag: ["패스트푸드"],
    good: 2,
    check: false,
  },
  {
    title: "딸기 우유",
    description: "맛있겠다",
    tag: ["디저트"],
    good: 156,
    check: true,
  },
  {
    title: "방울토마토",
    description:
      "울퉁 불퉁 멋진 몸매에 빠알간 옷을 입고 새콤달콤 단내 풍기는 멋쟁이 토마토 (토마토) 나는야 주스될거야 ",
    tag: ["디저트"],
    good: 0,
    check: false,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
  {
    title: "치즈 떡볶이",
    description: "치즈 많이 넣어주세요, 그리고 매콤했으면 좋겠어요.",
    tag: ["한식"],
    good: 156,
    check: true,
  },
];

const ApplyList: NextPage = () => {
  const [check, setCheck] = useState(0);
  return (
    <ListContainer>
      <h1 className="name">신청 목록</h1>
      <nav className="nav-container">
        {kategorys.map((i: Object, index: number) => (
          <div
            className={`kategory${check === index ? "-blue" : "-nomal"}`}
            key={index}
            onClick={() => {
              setCheck(index);
            }}
          >
            {i}
          </div>
        ))}
      </nav>
      <div className="menu-container">
        {menus.map((i, index: number) => (
          <div key={index} className="menus">
            <h2 className="menus-title">{i.title}</h2>
            <p className="menus-description">{i.description}</p>
            <div className="menus-footer">
              <p className="menus-tags">
                {i.tag.map((j, index: number) => (
                  <div key={index}>#{j}</div>
                ))}
              </p>
              <span className="menus-good">
                {i.good}&nbsp;
                <Image src={image} width={10} height={11} />
              </span>
            </div>
            <i className="menus-check">
              {i.check && <Image src={checkImage} width={11} height={8.5} />}
            </i>
          </div>
        ))}
      </div>
    </ListContainer>
  );
};

export default ApplyList;
