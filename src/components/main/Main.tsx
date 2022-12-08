import React from "react";
import * as M from "./Main.style";
import Link from "next/link";
import Image from "next/image";
import Menu from "components/common/menu";
import Arrow from "../../assets/image/common/arrow.svg";
import DarkMode from "../../assets/image/main/darkMode.svg";
import review from "assets/image/main/review.png";
import checkMenu from "assets/image/main/checkMenu.png";
import applyMenu from "assets/image/main/applyMenu.png";

import { useTheme } from "hooks/useTheme";

const user = [
  { name: "김영성", rank: 1 },
  { name: "박소영", rank: 2 },
  { name: "전효은", rank: 3 },
];

const Main = () => {
  const { handleDarkMode, darkMode } = useTheme();
  return (
    <M.Wrapper>
      <Menu isCalander={true} />

      <Link href="#">
        <M.RankingContainer>
          <h1>랭킹</h1>
          <Arrow id="arrow" fill="red" />
          <p>기여도를 순위를 확인하세요</p>

          <M.RankingBox>
            {user.map(({ name, rank }) => (
              <M.RankingItem key={rank}>
                <M.RankingProfile />
                <p>{name}</p>
                <M.RankingNumber>{rank}</M.RankingNumber>
              </M.RankingItem>
            ))}
          </M.RankingBox>
        </M.RankingContainer>
      </Link>

      <Link href="#">
        <M.MenuCheckBar>
          <h1>꿈이 이루어진다</h1>
          <Arrow id="arrow" />
          <p>수락된 메뉴를 확인하세요</p>
          <M.IMGBox marginTop={60}>
            <Image src={checkMenu} />
          </M.IMGBox>
        </M.MenuCheckBar>
      </Link>

      <Link href="/apply">
        <M.ApplyMenuBar>
          <h1>급식 신청</h1>
          <Arrow id="arrow" />
          <p>원하는 급식을 신청하세요</p>
          <M.IMGBox marginTop={80}>
            <Image src={applyMenu} width={292} height={223} />
          </M.IMGBox>
        </M.ApplyMenuBar>
      </Link>

      <M.OtherCotainer>
        <M.darkModeBtn onClick={handleDarkMode} darkMode={darkMode}>
          <DarkMode id="darkMode" />
          <h1>다크모드</h1>
        </M.darkModeBtn>

        <Link href="/review">
          <M.ReviewBar>
            <h1>리뷰 쓰기</h1>
            <Arrow id="arrow" />
            <p>리뷰를 남겨주세요</p>
            <M.IMGBox marginTop={10}>
              <Image src={review} id="review" />
            </M.IMGBox>
          </M.ReviewBar>
        </Link>
      </M.OtherCotainer>
    </M.Wrapper>
  );
};

export default Main;
