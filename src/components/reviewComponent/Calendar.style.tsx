import styled, { css } from "styled-components";

// 달력은 우재한테 보내야함
export const CalendarContainer = styled.div`
    /* width:214px; */
    /* height:219px; */
    width:225.73px;
    height:231px;
    font-weight:bold;
    font-size:16px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    nav{
        width:100%;
        display:flex;
        /* justify-content:space-between; */
        color:#434343;
        position:relative;

        div:nth-child(2){
            margin-left:17px;
        }
        div:nth-child(3){
            /* margin-right:24px; */
            position:absolute;
            right:45px;
            cursor: pointer;
        }
        div:nth-child(4){
            cursor: pointer;
            position:absolute;
            right:10px;
        }
        
    }
`

export const DayOfWeek = styled.div`
    margin-top:10px;
    font-size:11px;
    font-weight:400px;
    width:92%;
    display:flex;
    justify-content:space-between;
    color:#434343;
    `

export const Calendar = styled.div`
    /* margin-top:10px; */
    /* width:215px; */
    width:100%;
    height:170px;
    /* background-color:seashell; */
    display:flex;
    flex-flow:row wrap;
    /* .div{
        width:35px;
        display:flex;
        justify-content:center;
        align-items:center;
    } */
`

interface DayType {
    visable?:boolean;
    selected?:boolean;
}

export const Day = styled.div<DayType>`
    width:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    cursor:pointer;

    font-family: Roboto;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;

    border-radius:100%;    
    color:${(props) => (props.visable?"black":"#CACACA")};
    ${(props) => (props.selected?css`
    background-color:#1556F7;
    color:white;
    `:css`
    :hover{
        background-color:#F4F4F4;
    }   
    `)}
    
`
