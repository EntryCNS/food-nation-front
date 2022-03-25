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
import useMoveIndiccator from "util/hooks/useMoveIndiccator";

const NavBar: React.FC = (): any => {
  const [selected, setSelected] = useState(false);

  const navBarStatus = {
    hoem: true,
    profile: false,
    addMenu: false,
    checkMenu: false,
    ranking: false,
    review: false,
  };

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
                <a>
                  <Home className="img" fill={"#000"} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>
                  <Profile className="img" fill={"#fff"} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <AddMenu className="img" fill={"#fff"} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <CheckMenu className="img" fill={`kj`} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Ranking className="img" fill={"#000"} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Review className="img" fill={"#000"} />
                </a>
              </Link>
            </li>
          </ul>

          <N.Indicator top={useMoveIndiccator()}>
            <N.BoxIndicator />
            <N.DotIndicator />
          </N.Indicator>
        </N.Navigate>

        <N.LogoutBtn>
          <Logout />
        </N.LogoutBtn>
      </N.Wrapper>
    </>
  );
};

export default NavBar;
