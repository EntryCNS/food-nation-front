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
import useNavBar from "hooks/useNavBar";

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
                <N.IMG selected={selectedNavBarElement.home} title="홈">
                  <Home className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <N.IMG selected={selectedNavBarElement.profile} title="프로필">
                  <Profile className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="/apply">
                <N.IMG selected={selectedNavBarElement.addMenu} title="메뉴신청">
                  <AddMenu className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="#">
                <N.IMG selected={selectedNavBarElement.checkMenu} title="메뉴확인">
                  <CheckMenu className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="#">
                <N.IMG selected={selectedNavBarElement.ranking} title="랭킹">
                  <Ranking className="img" />
                </N.IMG>
              </Link>
            </li>
            <li>
              <Link href="/review">
                <N.IMG selected={selectedNavBarElement.review} title="리뷰">
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

        <N.LogoutBtn title="로그아웃">
          <Logout className="img" />
        </N.LogoutBtn>
      </N.Wrapper>
    </>
  );
};

export default NavBar;
