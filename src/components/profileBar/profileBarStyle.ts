import styled from "styled-components";
import { lightTheme } from "styles/theme";

const ProfileBarContainer = styled.div`
  position:sticky;
  top:0px;
  width: 302px;
  height: 100vh;
  display: inline-block;
  background: ${(props) => props.theme.gradient};
  .custom1 {
    background: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  .custom2 {
    position: absolute;
    background: none;
    left: calc(50% - 65px);
    top: 150px;
    text-align: center;
    .drop {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: none;
    }
    h2 {
      margin-top: 22px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
    }
    p {
      margin-top: 10px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
    }
  }
  .custom3 {
    background: none;
    position: absolute;
    bottom: 0;
  }
  .custom4 {
    background: none;
    position: absolute;
    bottom: 0;
  }
`;

export default ProfileBarContainer;
