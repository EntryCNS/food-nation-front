import styled from "styled-components";
import { lightTheme } from "styles/theme";

export const ApplyContainer = styled.div`
  width: 450px;
  height: 600px;
  background: ${lightTheme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 225px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button {
    width: 320px;
    height: 70px;
    background: #1556f7;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  .menuCheck {
    width: 271px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #939393;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 970px;
  height: 738px;
  background: ${lightTheme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  /* position: relative; */
  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${lightTheme.darkGray};
    padding-top: 40px;
    margin-left: 40px;
    padding-bottom: 40px;
  }
  .innerContainer {
    width: 920px;
    height: 599px;
    padding-left: 15px;
    padding-bottom: 36px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
    position: relative;
    /* padding-right: 38px; */
  }
  .eachContainer {
    width: 198px;
    height: 162px;
    margin-bottom: 30px;
    margin-right: 20px;
    background: ${lightTheme.background};
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  .menuTitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin-top: 24px;
    margin-left: 16px;
  }
  .menuDes {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.02em;
    width: 166px;
    height: 39px;
    margin: 0 auto;
    margin-top: 8px;
  }
  nav {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #939393;
  }
  nav p {
    color: #939393;
  }
  .navContainer {
    display: flex;
    margin-left: 16px;
    margin-top: 24px;
    width: 166px;
    justify-content: space-between;
    align-items: center;
  }
  .navContainer div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .heart {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    margin-right: 4px;
  }
  .apply {
    display: flex;
    margin-left: 16px;
    margin-top: 10px;
    width: 166px;
    justify-content: flex-end;
    align-items: center;
  }
  .approve {
    width: 50px;
    height: 22px;
    background: #ffffff;
    border: 1px solid #1556f7;
    box-sizing: border-box;
    border-radius: 15px;
    color: #1555f7;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    transition: 0.2s;
    cursor: pointer;
    margin-left: 8px;
  }
  .approve:hover {
    background: #1555f7;
    border: 1px solid #fff;
    transition: 0.2s;
    color: #fff;
  }
  .closed {
    width: 50px;
    background: #ffffff;
    border: 1px solid #fe8885;
    box-sizing: border-box;
    border-radius: 15px;
    height: 22px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;
    color: #fe8885;
  }
  .closed:hover {
    background: #fe8885;
    border: 1px solid #fff;
    transition: 0.2s;
    color: #fff;
  }
  .innerContainer::-webkit-scrollbar {
    width: 15px;
  }

  .innerContainer::-webkit-scrollbar-thumb {
    height: 17%;
    background: #e4e4e4;
    border-radius: 15px;
  }

  /* 스크롤바 뒷 배경 설정*/
  .innerContainer::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
  .not {
    width: 100%;
    height: 100%;
    background: none;
    position: absolute;
    z-index: 100;
    top: -100%;
    left: 0;
    transition: background 0.3s;
  }
  .active {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    z-index: 100;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s;
  }
  .alert {
    background: #ffffff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 256px;
    height: 55px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  .alert label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alert label p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #636363;
  }
  .alert label button {
    margin-left: 21px;
    width: 59px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #434343;
    box-sizing: border-box;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;
