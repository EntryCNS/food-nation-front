import styled from "styled-components";

export const ButtonsContainer = styled.div`
    width:192px;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    `

export const Button = styled.div`
  cursor:pointer;
  border-radius:15px;
  box-shadow:4px 4px 15px 0px rgba(0,0,0,0.1);
  /* background-color:black; */
  font-size:12px;
  width:60px;
  height:28px;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const FitContainer = styled.div`
  width:fit-content;
  height:fit-content;
`
