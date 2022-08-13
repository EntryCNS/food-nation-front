import styled from "styled-components";

export const Wrapper = styled.div`
    width:350px;
    height:738px;
    border-radius: 15px;
    padding:40px;
    >h1{
        font-weight:700
    }
    box-shadow: 4px 4px 15px rgb(0 0 0 / 10%);
`
export const Container = styled.div`
    width:285px;
    height:616px;
    margin-top:62px;
    overflow:auto;
    gap:20px;
    display:flex;
    flex-direction:column;

    ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    height: 17%;
    background: ${(props) => (props.theme.scrollBar)};
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => (props.theme.border)};
    border-radius: 15px;
  }
`

export const ItemBox = styled.div`
    position:relative;
    width:240px;
    border-bottom:1px solid ${(props) => (props.theme.border)};
    display:flex;
    flex-direction:column;
    gap:11px;
    padding-bottom: 14px;
    >p{
        font-size:14px;
    }
    >div{
        position:absolute;
        width:30px;
        bottom:10px;
        right:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    #tag{
      color:${(props) => props.theme.darkGray};
    }
`