import styled from "styled-components";

export const Container = styled.div`
    width: 580px;
    height: 330px;
    background-color: ${(props) => props.theme.background};
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    padding-left: 50px;
`

export const DateBox = styled.div`
    width: 220px;
    height: 19px;
    display: flex;

    .arrow{
        path{
            fill:${(props) => props.theme.fontColor}
        }
    }
`

export const Date = styled.h1`

`