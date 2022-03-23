import React from "react";
import IButton from "interface/common/button/IButton";
import * as Btn from "./Button.style";

const Button: React.FC<IButton> = ({ visible, children, width }) => {
  return (
    <Btn.Button visible={visible} width={width}>
      {children}
    </Btn.Button>
  );
};

export default Button;
