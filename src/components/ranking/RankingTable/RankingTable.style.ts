import { lightTheme } from "styles/theme";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-right: 70px;
  background-color: ${(props) => props.theme.htmlBackground};
`;
export const TableContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  width: 710px;
  height: 403px;

  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  nav {
    color: #dedede;
    display: flex;
    margin-top: 25px;
    margin-bottom: 17px;
  }
  ul {
    display: flex;
  }
  hr {
    width: 590px;
    height: 0px;
    border: 1px solid #f4f4f4;
  }
  .profileM {
    margin-left: 65px;
  }
  .nameM {
    margin-left: 145px;
  }
  .scoreM {
    margin-left: 135px;
  }
  .rankingM {
    margin-left: 120px;
  }
  .table {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 680px;
    height: 310px;
  }
  .rankTable {
    width: 680px;
    height: 60px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .tableText {
    color: ${(props) => props.theme.fontColor};
  }
  .table::-webkit-scrollbar {
    width: 15px;
  }

  .table::-webkit-scrollbar-thumb {
    height: 17%;
    background: ${(props) => props.theme.scrollBar};
    border-radius: 15px;
  }

  /* 스크롤바 뒷 배경 설정*/
  .table::-webkit-scrollbar-track {
    background-color: ${(props) => (props.theme.isDark ? "#333333" : "F4F4F4")};
    border-radius: 15px;
  }
  .ranking {
    width: 18px;
    height: 18px;
    border-radius: 15px;
    background-color: ${lightTheme.blue};
    color: white;
    font-weight: 500;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  }
`;
