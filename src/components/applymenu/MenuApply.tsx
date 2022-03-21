import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "styles/theme";

const Container = styled.div`
  width: 300px;
  height: 738px;
  background: ${lightTheme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
  .menu-container-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${lightTheme.title};
    margin-top: 40px;
    margin-left: 40px;
  }
  .nav-container {
    .kategory-container {
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      margin-top: 40px;
      margin-left: 40px;
      flex-grow: 1;
    }
    .kategory-nomal {
      cursor: pointer;
      margin-right: 8px;
      margin-bottom: 14px;
      width: 60px;
      height: 28px;
      background: ${lightTheme.background};
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: ${lightTheme.gray};
      justify-content: center;
      transition: 0.2s;
      &:last-child {
        width: 80px;
      }
    }
    .kategory-blue {
      margin-right: 8px;
      margin-bottom: 14px;
      width: 60px;
      height: 28px;
      background: ${lightTheme.blue};
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: ${lightTheme.background};
      justify-content: center;
      transition: 0.2s;
      &:last-child {
        width: 80px;
      }
    }
  }
  .menu-names {
    width: 220px;
    height: 70px;
    background: ${lightTheme.background};
    border: 1px solid #e4e4e4;
    border-radius: 15px;
    margin-left: 40px;
    margin-top: 40px;
    padding-left: 16px;
    font-family: "Roboto";
    font-style: normal;
  }
  .menu-names::placeholder {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #e4e4e4;
  }
  .menu-description {
    background: #ffffff;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 15px;
    width: 220px;
    height: 263px;
    margin-left: 40px;
    margin-top: 40px;
    outline: none;
    padding: 28px 16px 28px 16px;
    resize: none;
    font-family: "Roboto";
    font-style: normal;
  }
  .menu-description::placeholder {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #e4e4e4;
  }
  .apply-button {
    width: 220px;
    height: 70px;
    background: #1556f7;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    color: ${lightTheme.background};
    margin: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
  }
`;

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
    <Container>
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
    </Container>
  );
};

export default MenuApply;
