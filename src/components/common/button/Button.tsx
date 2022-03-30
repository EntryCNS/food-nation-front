import React, { ReactNode } from "react";
import IButton from "interface/common/button/IButton";
import * as Btn from "./Button.style";

const Button: React.FC<IButton> = ({ visible, width, children }: IButton) => {
  return (
    <Btn.Button visible={visible} width={width}>
      {children}
    </Btn.Button>
  );
};

export default Button;
