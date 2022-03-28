import React, { useState } from "react";
import * as N from "./NavBar.style";
import Link from "next/link";
import LOGO from "assets/image/navBar/logo.png";
import Image from "next/image";
import Home from "../../assets/image/navBar/home.svg";
import Profile from "../../assets/image/navBar/profile.svg";
import AddMenu from "../../assets/image/navBar/addMenu.svg";
import CheckMenu from "../../assets/image/navBar/checkMenu.svg";
import Ranking from "../../assets/image/navBar/ranking.svg";
import Review from "../../assets/image/navBar/review.svg";
import Logout from "../../assets/image/navBar/logout.svg";
import useNavBar from "util/hooks/useNavBar";

const NavBar: React.FC = () => {
  const { positionTop, selectedNavBarElement } = useNavBar();
  return (
    <>
      <N.Wrapper>
        <N.LogoBox>
          <Image src={LOGO} />
        </N.LogoBox>

        <N.Navigate>
          <ul>
            <li>
              <Link href="/">
                <N.IMG selected={selectedNavBarElement.home}>
                  <Home className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <N.IMG selected={selectedNavBarElement.profile}>
                  <Profile className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="/addMenu">
                <N.IMG selected={selectedNavBarElement.addMenu}>
                  <AddMenu className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="#">
                <N.IMG selected={selectedNavBarElement.checkMenu}>
                  <CheckMenu className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="#">
                <N.IMG selected={selectedNavBarElement.ranking}>
                  <Ranking className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="#">
                <N.IMG selected={selectedNavBarElement.review}>
                  <Review className="img" />
                </N.IMG>
              </Link>
            </li>
          </ul>

          <N.Indicator top={positionTop}>
            <N.BoxIndicator />
            <N.DotIndicator />
          </N.Indicator>
        </N.Navigate>

        <N.LogoutBtn>
          <Logout className="img" />
        </N.LogoutBtn>
      </N.Wrapper>
    </>
  );
};

export default NavBar;
