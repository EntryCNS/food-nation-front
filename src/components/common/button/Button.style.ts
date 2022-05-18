import styled, { css } from "styled-components";
import { lightTheme } from "styles/theme";

interface styleProps {
    visible?: boolean;
    width?: string;
}

export const Button = styled.button<styleProps>`
    min-width:60px;
    width:${(props) => props.width};
    height:28px;
    text-align:center;
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    cursor:pointer;

    ${(props) =>
        props.visible &&
        css`
        background-color:${lightTheme.blue};
        color:#fff;
        `
    }
`