import styled from "styled-components";
import { lightTheme } from "styles/theme";

export const ListContainer = styled.div`
  @media screen and (min-width: 1500px) {
    width: 600px;
    height: 738px;
    position: relative;
    background-color: ${lightTheme.background};
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    .name {
      padding-top: 40px;
      padding-left: 40px;
      font-size: 16px;
      font-weight: 700;
      /* font-family: "Roboto"; */
    }
    .nav-container {
      display: flex;
      width: 468px;
      justify-content: space-between;
      flex-wrap: nowrap;
      margin-left: 40px;
      flex-grow: 1;
      .kategory-nomal {
        cursor: pointer;
        margin-top: 40px;
        margin-right: 6px;
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
        margin-top: 40px;
        margin-right: 6px;
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
    .menu-container {
      width: auto;
      margin: 30px;
      height: 529px;
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;
      .menus {
        margin-left: 10px;
        margin-right: 30px;
        margin-bottom: 30px;
        width: 220px;
        height: 130px;
        background: ${lightTheme.background};
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        position: relative;
        .menus-title {
          margin-top: 24px;
          margin-left: 24px;
          font-weight: 400;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.02em;
          color: ${lightTheme.gray};
        }
        .menus-description {
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 0.02em;
          width: 168px;
          height: 38px;
          margin-left: 24px;
          margin-top: 12px;
          color: ${lightTheme.gray};
        }
        .menus-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .menus-tags {
            /* margin-top: 8px; */
            margin-left: 24px;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.02em;
            color: #939393;
          }
          .menus-good {
            margin-right: 24px;
            /* margin-top: 12px; */
            font-weight: 400;
            font-size: 8px;
            line-height: 9px;
            color: #939393;
            display: flex;
            align-items: center;
          }
        }
        .menus-check {
          position: absolute;
          font-size: 8px;
          top: 24px;
          right: 24px;
        }
      }
    }
    .menu-container::-webkit-scrollbar {
      width: 15px;
    }

    .menu-container::-webkit-scrollbar-thumb {
      height: 17%;
      background: #e4e4e4;
      border-radius: 15px;
    }

    /* 스크롤바 뒷 배경 설정*/
    .menu-container::-webkit-scrollbar-track {
      background: #f4f4f4;
      border-radius: 15px;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 300px;
  height: 738px;
  background: ${lightTheme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
  margin-left: 70px;
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
