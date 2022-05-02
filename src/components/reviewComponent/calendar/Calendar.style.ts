import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  /* width:214px; */
  /* height:219px; */
  width: 225.73px;
  height: 231px;
  font-weight: bold;
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

    user-select: none;

    .arrow{
      path{
        fill:${(props) => (props.theme.fontColor)}
      }
    }
    div:nth-child(2) {
      margin-left: 17px;
    }
    div:nth-child(3) {
      /* margin-right:24px; */
      position: absolute;
      right: 45px;
      cursor: pointer;
    }
    div:nth-child(4) {
      cursor: pointer;
      position: absolute;
      right: 10px;
      // svg
      .rightArrow {
        transform: rotate(180deg);
      }
    }
  }
`;

export const DayOfWeek = styled.div`
  margin-top: 10px;
  font-size: 11px;
  font-weight: 400px;
  width: 92%;
  display: flex;
  justify-content: space-between;
  color: #434343;
  user-select: none;
`;

export const Calendar = styled.div`
  /* margin-top:10px; */
  /* width:215px; */
  width: 100%;
  height: 170px;
  /* background-color:seashell; */
  display: flex;
  flex-flow: row wrap;
  /* .div{
        width:35px;
        display:flex;
        justify-content:center;
        align-items:center;
    } */
`;

interface DayType {
  visable?: boolean;
  selected?: boolean;
  isDark?: boolean;
}

export const Day = styled.div<DayType>`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;

  font-family: Roboto;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;

  /* ${(props) =>
    props.selected
      ? css`
          background-color: #1556f7;
          color: white;
        `
      : css`
          :hover {
            background-color: #f4f4f4;
          }
        `} */

  border-radius: 100%;
  /* color: ${(props) => (props.visable ? "black" : "#CACACA")}; */
  color: ${(props) =>
    props.isDark
      ? props.visable
        ? "white"
        : "#333333"
      : props.visable
      ? "black"
      : "#cacaca"
    };

  ${(props) =>
    props.selected
      ? css`
          background-color: #1556f7;
          color: white;
        `
      : 
      props.isDark ?
      css`
          :hover {
            background-color: #757575;
          }
        `
      : css`
          :hover {
            background-color:#f4f4f4;
          }
      `

    }
`;
