import React, { ReactNode } from "react";
import NavBar from "components/navBar";
import ProfileBar from "components/profileBar";
import { Wrapper } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <NavBar />
      <div>{children}</div>
      <ProfileBar />
    </Wrapper>
  );
};

export default Layout;
