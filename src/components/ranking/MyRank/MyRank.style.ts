import styled from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.htmlBackground};
`;

export const MyProfileContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 190px;
  height: 397px;
  background: ${(props) => props.theme.gradient};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
  hr {
    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 28px;
    border: 1px solid #f4f4f4;
    width: 120px;
  }
  .profileImg {
    width: 60px;
    height: 60px;
    display: flex;
    background: transparent;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .mini {
    font-weight: 600;
    width: 120px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: space-around;
    background-color: transparent;
  }
  .img {
    background: transparent;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .img1 {
    background: transparent;
    position: absolute;
    bottom: 0;
    border-radius: 15px;
    z-index: 1;
    width: 190px;
    height: 97px;
  }
  .img2 {
    background: transparent;
    position: absolute;
    bottom: 0;
    border-radius: 15px;
    width: 190px;
    height: 113px;
  }
  .name {
    text-align: center;
    margin-top: 24px;
    font-weight: 500;
  }
  .rank {
    color: ${(props) => props.theme.blue};
  }
  .whiteFont {
    color: ${(props) => props.theme.fontColor};
  }
`;
