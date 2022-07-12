import styled, { css } from "styled-components";

// 달력은 우재한테 보내야함
export const CalendarContainer = styled.div`
  /* width: 214px;
  height: 219px; */
  width: 271px;
  height: 308px;
  /* font-weight: bold; */
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  nav {
    width: 100%;
    display: flex;
    /* justify-content:space-between; */
    color: #434343;
    position: relative;
    margin-bottom: 50px;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;

    div:nth-child(1) {
      /* margin-right:24px; */
      cursor: pointer;
      color: #434343;
    }

    div:nth-child(2) {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: #434343;
      line-height: 26px;
    }

    div:nth-child(3) {
      cursor: pointer;
      color: #434343;
    }
  }
`;

export const DayOfWeek = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 92%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 13.5px;

  color: #434343;
`;

export const Calendar = styled.div`
  /* margin-top:10px; */
  /* width:215px; */
  width: 100%;
  height: 100%;
  /* background-color:seashell; */
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-between; */
  /* .div{
        width:35px;
        display:flex;
        justify-content:center;
        align-items:center;
    } */
`;

interface DayType {
  visable?: number;
  selected?: number;
}

export const Day = styled.div<DayType>`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8.7px;

  cursor: pointer;

  font-family: Roboto;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 4.5px;
  margin-top: 4.5px;
  padding-top: 4.5px;
  padding-bottom: 4.5px;

  border-radius: 100%;
  color: ${(props) => (props.visable ? "black" : "#939393")};
  ${(props) =>
    props.selected
      ? css`
          background-color: #1556f7;
          color: white;
        `
      : css`
          :hover {
            background-color: #f4f4f4;
          }
        `}
`;
