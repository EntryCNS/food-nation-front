import React from "react";
import * as M from "./Menu.style";
import Arrow from "../../../assets/image/common/arrow.svg";

const Menu = () => {
  return (
    <M.Container>
      <M.DateBox>
        <Arrow id="left" class="arrow" />
      </M.DateBox>
    </M.Container>
  );
};

export default Menu;
