import * as Rk from "./MainRanking.style";
import profileImage from "assets/image/profile.png";
import Image from "next/image";
import { useCallback } from "react";
import { IRanking } from "../../../interface/ranking/IRanking";
import useRanking from "hooks/useRanking";

const data = [
  {
    name: "김영성",
    rank: 1,
    contribute: 100,
  },
  {
    name: "박소영",
    rank: 2,
    contribute: 99,
  },
  {
    name: "전효은",
    rank: 3,
    contribute: 98,
  },
  {
    name: "이승민",
    rank: 4,
    contribute: 32,
  },
  {
    name: "배진영",
    rank: 5,
    contribute: 3,
  },
];

const Ranking = () => {
  const { top3, other } = useRanking(data);

  const RankingMap: Function = useCallback(() => {
    const TopRanking = top3.map((d: IRanking) => {
      return (
        <Rk.CardContainer key={d.rank}>
          <div className="profileImg">
            <Image src={profileImage} width={60} height={60} />
          </div>
          <p className="name whiteFont">{d.name}</p>
          <hr />
          <div className="mini">
            <label>
              <p className="whiteFont">기여도</p>
              <p className="num whiteFont">{d.contribute}</p>
            </label>
            <label>
              <p className="whiteFont">랭킹</p>
              <p className="rank ">{d.rank}</p>
            </label>
          </div>
        </Rk.CardContainer>
      );
    });
    return TopRanking;
  }, [data]);

  const SideRankingMap: Function = useCallback(() => {
    const SideRanking = other.map((d: IRanking) => {
      return (
        <Rk.SideCardContainer key={d.rank}>
          <div className="right">
            <div className="profileImg">
              <Image src={profileImage} width={40} height={40} />
            </div>
            <p className="name whiteFont">{d.name}</p>
          </div>
          <hr />
          <div className="left">
            <label>
              <p className="whiteFont">기여도</p>
              <p className="num whiteFont">{d.contribute}</p>
            </label>
            <label>
              <p className="whiteFont">랭킹</p>
              <p className="rank">{d.rank}</p>
            </label>
          </div>
        </Rk.SideCardContainer>
      );
    });
    return SideRanking;
  }, [data]);

  return (
    <Rk.Container>
      {RankingMap()}
      <Rk.SideWapper>{SideRankingMap()}</Rk.SideWapper>
    </Rk.Container>
  );
};

export default Ranking;
