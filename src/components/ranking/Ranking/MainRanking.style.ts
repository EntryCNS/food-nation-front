import { lightTheme } from "styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 970px;
  height: 285px;
`;

export const CardContainer = styled.div`
  width: 190px;
  height: 285px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding-top: 40px;
  hr {
    width: 120px;
    border: 1px solid #f4f4f4;
  }
  .profileImg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .mini {
    display: flex;
    width: 150px;
    justify-content: space-around;
    margin-top: 30px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
  .name {
    margin-top: 40px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  .num {
    font-weight: 500;
    margin: 20px;
  }
  .rank {
    margin: 20px;
    color: ${lightTheme.blue};
  }
`;

export const SideWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideCardContainer = styled.div`
  width: 190px;
  height: 118px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  box-shadow: 4px 4px 15px rgba(0, 1, 1, 0.1);
  border-radius: 15px;
  display: flex;
  hr {
    margin-top: 24px;
    height: 70px;
    border: 1px solid #f4f4f4;
  }
  .profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
  }
  .left {
    border-radius: 15px;
    display: flex;
    width: 100px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .name {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    margin-top: 6px;
  }
  .num {
    font-weight: 500;
  }
  .rank {
    color: ${lightTheme.blue};
    font-size: 11px;
    /* text-align: center; */
  }
  .num,
  .rank {
    font-weight: 500;
    font-size: 11px;
    margin-top: 17px;
  }
  .right {
    border-radius: 15px;
    text-align: center;
  }
`;
