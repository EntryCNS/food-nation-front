import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "styles/theme";
import { MenuContainer } from "components/applymenu/applyListStyle";

const kategorys = ["한식", "일식", "중식", "양식", "디저트", "패스트푸드"];

const MenuApply = () => {
  const [check, setCheck] = useState(8);
  const [menuName, setMenuName] = useState("");
  const [menuDes, setMenuDes] = useState("");
  const menuChange = useCallback(
    (e) => {
      setMenuName(e.target.value);
    },
    [menuName]
  );
  const menuDesChange = useCallback(
    (e) => {
      setMenuDes(e.target.value);
    },
    [menuDes]
  );
  return (
    <MenuContainer>
      <h2 className="menu-container-title">급식 신청</h2>
      <div className="nav-container">
        <nav className="kategory-container">
          {kategorys.map((i, index) => (
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
      </div>
      <input
        type="text"
        value={menuName}
        className="menu-names"
        onChange={menuChange}
        placeholder="메뉴의 이름을 작성해 주세요 (15자 내)"
        maxLength={15}
      />
      <textarea
        className="menu-description"
        maxLength={50}
        placeholder="메뉴의 설명을 작성해 주세요 (50자 내)"
        value={menuDes}
        onChange={menuDesChange}
      ></textarea>
      <button className="apply-button">신청하기</button>
    </MenuContainer>
  );
};

export default MenuApply;
