import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 580px;

  width: 580px;
  height: 358px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  *{
    font-family:"Roboto";
  }
`;

export const InnerContainer = styled.div`
  /* width:515px; */
  width: 525px;
  height: 313px;
  /* background-color:seashell; */
  /* box-sizing:border-box; */
  display: flex;
  flex-flow: row wrap;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    height: 17%;
    background: #e4e4e4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`;

export const NavTemp = styled.div`
  width: 500px;
  height: 10px;
`;

// width 스크롤 보이게 조정 필요(스크롤 css 한 후)
export const NavContainer = styled.div`
  width: 500px;
  height: 50px;
  /* height:fit-content; */
  /* margin-top:13px; */
  padding-top: 5px;
  padding-left: 12px;
  padding-right: 24px;


  position: absolute;
  /* background-color:rgba(0,0,0,0); */

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 1;

  user-select:none;

  /* box-sizing:border; */
  nav {
    display: flex;
    flex-flow: row nowrap;
    /* color:${(props) => (props.theme.fontColor)}; */
    div {
      font-weight: 600;
      /* color: #434343; */
    }
    div:nth-child(1) {
      margin-right: 17px;
      cursor: pointer;
    }
    div:nth-child(3) {
      margin-left: 3.5px;
      margin-right: 3.5px;
    }
    div:nth-child(5) {
      margin-left: 3.5px;
      margin-right: 3.5px;
    }
    div:nth-child(7) {
      margin-left: 3.5px;
      margin-right: 17px;
    }
    div:nth-child(8) {
      cursor: pointer;
      .rightArrow {
        transform: rotate(180deg);
      }
    }
  }
`;

// 간격 뛰우기
export const Temp = styled.div`
  height: 50px;
  width: 100%;
`;

export const CommentContainer = styled.div`
  /* 높이는 테스트, 70=3개씩 들어가고, 110=2개씩*/
  /* min-height:70px;  */
  min-height: 100px;
  height: fit-content;
  /* min-height:90px;  */
  /* width는 더 키우고 싶을 수 있어서 테스트 원래는 212 */
  width: 212px;
  /* width:222px; */

  /* background-color:blue; */
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 15px;
  /* margin-top:10px;
    margin-bottom:10px; */
  padding: 20px;
`;

export const StarContainer = styled.div`
  width: 58px;
  display: flex;
  justify-content: space-between;

  .empty{
     /* fill:${(props) => props.theme.background} */
     fill:white;
  }
`;

export const Comment = styled.div`
  margin-top: 10px;
  font-size: 11px;
  /* color: ${(props) => (props.theme.description)}; */
  line-height: 13.6px;
  display: flex;
  word-break: keep-all;
`;
