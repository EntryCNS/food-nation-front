import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { ListContainer } from "components/applymenu/applyListStyle";
import image from "assets/image/heart.png";
import checkImage from "assets/image/check.png";
import menus from "lib/data/menu.json";

const kategorys = [
  "전체",
  "한식",
  "일식",
  "중식",
  "양식",
  "디저트",
  "패스트푸드",
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
