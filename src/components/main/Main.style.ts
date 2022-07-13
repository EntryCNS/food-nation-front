import Image from 'next/image';
import styled, { css } from "styled-components";

interface styleProps {
    darkMode?: boolean;
    marginTop?: number;
}


export const Wrapper = styled.div`
    position:relative;
    background-color:${(props) => props.theme.htmlBackground};
    display:flex;
    flex-wrap: wrap;
    gap:50px;
    justify-content:space-between;
    width:970px;
    height:738px;

    #arrow{
        transform:rotate(180deg);
        path{
            fill:${(props) => props.theme.fontColor};
        }
    }

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin-top:10px;
    }

   
`

const ContainerFrame = styled.div`
    cursor:pointer;
`

export const RankingContainer = styled(ContainerFrame)`
    position:relative;
    width:330px;
    padding:40px;
    height:330px;
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

    >#arrow{
        position:absolute;
        top:40px;
        left:88px;
    }
`
export const RankingBox = styled.div`
    width: 240px;
    height: 185px;
    margin-top:18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`

export const RankingItem = styled.div`
    width:240px;
    height:45px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    >p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        width:120px;
    }
    `
export const RankingProfile = styled.div`
    width:45px;
    height:45px;
    border-radius:50%;
    background-color:${(props) => props.theme.gray};
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

`
export const RankingNumber = styled.div`
    width: 15px;
    height: 15px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props) => props.theme.blue};
    border-radius: 50%;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
`

export const MenuCheckBar = styled(ContainerFrame)`
    position:relative;
    width: 305px;
    height: 358px;
    padding:40px 40px 0 40px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    >#arrow{
        position: absolute;
        top: 42px;
        left: 168px;
    }
`

export const ApplyMenuBar = styled(ContainerFrame)`
    width:332px;
    height:358px;
    position:relative;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding:40px;

    >#arrow{
        position: absolute;
        top: 42px;
        left: 123px;
    }
`
export const OtherCotainer = styled.div`
    width: 193px;
    height: 358px;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    background-color:${(props) => props.theme.htmlBackground};
`

export const darkModeBtn = styled.button<styleProps>`
    width: 193px;
    height: 104px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;

    ${(props) =>
        props.darkMode &&
        css`
        background-color:${(props) => props.theme.blue};
        color:#fff;
        `
    }

    >h1{
        margin-left:12px;
    }

    #darkMode{
        path{
            fill:${(props) => props.theme.fontColor};
        }
    }
`

export const ReviewBar = styled(ContainerFrame)`
    width: 193px;
    height: 204px;
    position:relative;
    padding:40px;
    border-radius: 15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    background:${(props) => props.theme.subGradient};

    >#arrow{
        position: absolute;
        top: 42px;
        left: 123px;
    }
`

export const IMGBox = styled.div<styleProps>`
    margin-top:${(props) => props.marginTop}px;
    background-color:rgba(0,0,0,0);
`