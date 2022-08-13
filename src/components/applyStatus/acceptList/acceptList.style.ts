import styled from "styled-components";

export const Wrapper = styled.div`
    position:relative;
    width:550px;
    height:420px;
    padding:40px;
    border-radius:15px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

    >h1{
        font-weight: 700;
    }
`
export const Container = styled.div`
    position:relative;
    width:100%;
    height:298px;
    margin-top:30px;
    display:flex;
    flex-direction: column;
    overflow: auto;
    background-color:transparent;
    gap:22px;

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
  
  >.imgContainer{
        position:sticky;
        bottom:0px;
        left:20px;
        z-index: 1;
        background-color:transparent;
    }
`

export const ItemBox = styled.div`
    width:270px;
    padding-bottom:13px;
    display:flex;
    gap:10px;
    flex-direction:column;
    justify-content:space-between;
    border-bottom:1px solid ${(props) => props.theme.border};

    .voteContainer{
        display:flex;
        width:50px;
        align-items:center;
        justify-content:space-between;
    }
    >.head{
        display:flex;
        justify-content:space-between;
        width:110px;
        align-items:center;
    }
    >.foot{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
    }
    #date{
        color:${(props) => props.theme.blue};
    }
    #desc{
        color:${(props) => props.theme.fontColor};
    }
    #tag{
        color:${(props) => props.theme.gray};
    }
`