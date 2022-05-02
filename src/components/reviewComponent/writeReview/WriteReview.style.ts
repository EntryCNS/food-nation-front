import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 738px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  *{
    font-family:"Roboto";
  }
`;

export const InnerContainer = styled.div`
  /* width:240px;
    height:658px; */
  width: 245px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// 달력은 우재한테 보내야함
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

    div:nth-child(2) {
      margin-left: 17px;
      margin-right: 94.5px;
    }
    div:nth-child(3) {
      margin-right: 24px;
      cursor: pointer;
    }
    div:nth-child(4) {
      cursor: pointer;
      
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



interface StarType {
  isPainted?: boolean;
}

export const StarContainer = styled.div<StarType>`
  display: flex;
  justify-content: space-between;
  width: 210px;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  * {
    cursor: pointer;
  }
  .empty {
    fill: ${(props) => (props.theme.background)};
  }
`;

export const CommentInputContainer = styled.div`
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding-right: 15px;
  padding: 15px;
  width: 240px;
  height: 184px;
`;

export const CommentInput = styled.textarea`
  resize: none;
  width: 200px;
  height: 150px;
  border: none;
  outline: none;
  font-size: 11px;
  color: ${(props) => (props.theme.fontColor)};
  /* color: #636363; */
  background-color:${(props) =>(props.theme.background)};
  ::placeholder {
    color: #d0d0d0;
  }
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    height: 17%;
    background: ${(props) => (props.theme.scrollBar)};
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => (props.theme.border)};
    border-radius: 15px;
  }
`;

export const Button = styled.button`
 
  width: 240px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  background-color: #1556f7;
  border-radius: 15px;
  color: white;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ReviewError = styled.div`
  font-size: 13px;
  color:#bcbcbc;
`;
