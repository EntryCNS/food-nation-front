import styled, { css } from "styled-components";


interface styleProps {
    top?: number;
    selected?: boolean;
}

export const Wrapper = styled.div`
    position:sticky;
    top:0px;
    width: 100px;
    height: 100vh;
    display:flex;
    border-right: 1px solid #F4F4F4;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center; 
`

export const LogoBox = styled.div`
    position:absolute;
    top:62px;
    left:26px;
`

export const Navigate = styled.div`
    position:relative;
    width:44px;
    height:414px;

    ul{
        display: flex;
        height: 390px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        
        li{
            width:44px;
            height:44px;
            border-radius:15px;
            display:flex;
            align-items:center;
            justify-content:center;
            z-index: 2;
            transition: 0.5s;
            cursor: pointer;

        }
    }
    
`
export const IMG = styled.a<styleProps>`
.img{
    path{
            transition:0.5s;
            fill:${(props) => props.theme.fontColor};
           ${(props) => props.selected && css`fill:#fff`};
            
        }
    }
`

export const Indicator = styled.div<styleProps>`
    position: absolute;
    top:${(props) => props.top}px;
    display:flex;
    z-index:0;
    justify-content:space-between;
    align-items:center;
    width:76px;
    background: rgba(0, 0, 0, 0.0);
    transition: 0.5s;
`
export const BoxIndicator = styled.div`
    width: 44px;
    height: 44px;
    background: ${(props) => props.theme.blue};
    border-radius: 50%;
    border-radius: 15px;
`
export const DotIndicator = styled.div`
    background-color:${(props) => props.theme.blue};
    width: 6px;
    height: 6px;
    border-radius:50%;
`

export const LogoutBtn = styled.button`
    position:absolute;
    bottom: 61px;
    left:39px;
    cursor:pointer;

    .img{
        fill:${(props) => props.theme.fontColor};
    }
`
