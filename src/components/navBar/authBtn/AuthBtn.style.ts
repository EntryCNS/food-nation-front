import styled from "styled-components";

export const Button = styled.button`
    width:44px;
    height:44px;

    .img{
        path{
            fill:${(props) => props.theme.fontColor};
        }
    }
`