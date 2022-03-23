import React from "react";
import styled from "styled-components";
import { lightTheme } from "styles/theme";
import data from "./data.json";
import heart from "assets/image/heart.svg";

const Container = styled.div`
  width: 970px;
  height: 738px;
  background: ${lightTheme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
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
    border: 1px solid #fe8885;
    box-sizing: border-box;
    border-radius: 15px;
    color: #fe8885;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    transition: 0.2s;
    cursor: pointer;
  }
  .approve:hover {
    background: #fe8885;
    border: 1px solid #fff;
    transition: 0.2s;
    color: #fff;
  }
  .closed {
    margin-left: 8px;
    width: 50px;
    background: #ffffff;
    border: 1px solid #1556f7;
    box-sizing: border-box;
    border-radius: 15px;
    height: 22px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;
    color: #1556f7;
  }
  .closed:hover {
    background: #1556f7;
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
`;

const WaitMenu = () => {
  return (
    <Container>
      <h2 className="title">대기 목록</h2>
      <div className="innerContainer">
        {data.map((i) => (
          <div className="eachContainer">
            <div className="menuTitle">{i.name}</div>
            <p className="menuDes">{i.des}</p>
            <div className="navContainer">
              <nav>
                {i.kategory.map((j, index) => (
                  <p key={index}>#{j}&nbsp;</p>
                ))}
              </nav>
              <div>
                <span className="heart">{i.heart}</span>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.36726e-08 3.00036C-6.76401e-05 2.6017 0.0785375 2.20702 0.231222 1.83939C0.383906 1.47176 0.607606 1.13856 0.889247 0.859264C1.17089 0.579964 1.50482 0.360167 1.87153 0.21272C2.23824 0.0652724 2.63037 -0.00686821 3.025 0.000514459C3.49193 -0.00199013 3.95405 0.0957704 4.38074 0.287317C4.80744 0.478863 5.18895 0.759821 5.5 1.11157C5.81105 0.759821 6.19256 0.478863 6.61926 0.287317C7.04595 0.0957704 7.50807 -0.00199013 7.975 0.000514459C8.36963 -0.00686821 8.76176 0.0652724 9.12847 0.21272C9.49518 0.360167 9.82911 0.579964 10.1108 0.859264C10.3924 1.13856 10.6161 1.47176 10.7688 1.83939C10.9215 2.20702 11.0001 2.6017 11 3.00036C11 5.97576 7.49155 8.22231 5.5 10C3.51285 8.20731 4.36726e-08 5.97798 4.36726e-08 3.00036Z"
                    fill="#FE8885"
                  />
                </svg>
              </div>
            </div>
            <div className="apply">
              <button className="approve">수락</button>
              <button className="closed">거절</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WaitMenu;
