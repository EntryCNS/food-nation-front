import styled from "styled-components";

export const Wrapper = styled.div`
background-color:${(props) => props.theme.htmlBackground};
display: flex;
align-items: center;
justify-content: space-between;
width: 970px;
height: 738px;
`
export const LeftContainer = styled.div`
background-color: transparent;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`