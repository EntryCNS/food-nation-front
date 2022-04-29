import styled,{css} from "styled-components";

export const ButtonsContainer = styled.div`
    width:192px;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
`

interface ButtonType{
  selected?:boolean
}

export const Button = styled.div<ButtonType>`
  user-select:none;
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
  color:${(props) => (props.selected ? "white" : "#636363")};
  background-color:${(props) => (props.selected ? "#1556F7" : "white")};
`

export const FitContainer = styled.div`
  width:fit-content;
  height:fit-content;
`
