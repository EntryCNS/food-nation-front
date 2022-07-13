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
  display: flex;
  flex-flow: row wrap;
  overflow: auto;

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
`;

export const NavTemp = styled.div`
  width: 500px;
  height: 10px;
`;

// width 스크롤 보이게 조정 필요(스크롤 css 한 후)
export const NavContainer = styled.div`
  width: 500px;
  height: 50px;
  padding-top: 5px;
  padding-left: 12px;
  padding-right: 24px;

  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 1;

  user-select:none;

  nav {
    display: flex;
    flex-flow: row nowrap;
    div {
      font-weight: 600;
      /* color: #434343; */
    }
    div:nth-child(1) {
      margin-right: 17px;
      cursor: pointer;
      .leftArrow{
        path{
          fill:${(props) => (props.theme.fontColor)};
        }
      }
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
        path{
          fill:${(props) => (props.theme.fontColor)};
        }
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
  /* 높이는 테스트, 70=3개씩 들어가고, 110=2개씩 */
  /* min-height:70px;  */
  min-height: 100px;
  height: fit-content;
  /* width는 더 키우고 싶을 수 있어서 테스트 원래는 212 */
  width: 215px;

  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 15px;
  padding: 20px;
`;

export const StarContainer = styled.div`
  width: 58px;
  display: flex;
  justify-content: space-between;

  .empty{
    fill:${(props) => props.theme.background}
  }
`;

export const Comment = styled.div`
  margin-top: 10px;
  font-size: 11px;
  line-height: 13.6px;
  display: flex;
  word-break: keep-all;
`;


