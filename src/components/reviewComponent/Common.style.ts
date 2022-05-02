import styled,{css} from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";

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
  font-size:12px;
  width:60px;
  height:28px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:${(props) => (props.selected ? 
    "white" : 
    (props) => (props.theme.fontColor))
  };
  background-color:${(props) => (props.selected ? "#1556F7" : (props) => (props.theme.background))};

`

export const FitContainer = styled.div`
  width:fit-content;
  height:fit-content;
`
