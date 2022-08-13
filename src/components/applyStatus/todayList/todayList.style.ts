import styled from "styled-components"


export const Wrapper = styled.div`
    position:relative;
    width:550px;
    height:268px;
    border-radius: 15px;
    padding:40px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    display:flex;
    align-items:center;
    justify-content:center;

    >h1{
        position:absolute;
        top:20px;
        left:40px;
        font-weight:700
    }
`
export const Container = styled.div`
    width:371px;
    height: 107px;
    display:flex;
    flex-wrap: wrap;
    gap:60px;
`

export const ItemBox = styled.div`
    position:relative;
    width:155px;
    height:45px;
    border-bottom:1px solid ${(props) => props.theme.border};

    >div{
        position:absolute;
        right:0px;
        bottom:13px;
        display:flex;
        width:30px;
        justify-content:space-between;
        align-items:center;
        font-size:13px;
    }
`