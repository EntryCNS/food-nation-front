import styled from "styled-components";
import Calendar from "../../../assets/image/common/calendar.svg";

export const Container = styled.div`
    width: 580px;
    height: 330px;
    background-color: ${(props) => props.theme.background};
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    padding-left: 50px; 
    >#loading{
        margin-top:100px;
        text-align:center
    }
`

export const DateBox = styled.div`
    width: 222px;
    padding-top:40px;
    height: 19px;
    display: flex;
    align-items:center;
    justify-content:space-between;


    .svg{
        cursor:pointer;
        path{
            fill:${(props) => props.theme.fontColor}
        }
    }

    #right{
        transform: rotate(180deg);
    }

    #calander{

        cursor: pointer;
    }

.datepicker-input {
  position: absolute;
  left: 220px;
  top: 30px;
  width: 20px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor:pointer;
}


`

export const Date = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color:${(props) => props.theme.fontColor};
    letter-spacing: 0.02em;
`

export const MenuBox = styled.div`
    width:490px;
    height:185px;
    margin-top:46px;
`
export const MealBox = styled.div`
    width:490px;
    height:61px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    >p{
        width: 402px;
        /* height: 61px; */
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color:${(props) => props.theme.fontColor};
    }
`
