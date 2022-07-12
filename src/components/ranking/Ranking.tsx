import RankingTable from "./RankingTable/RankingTable";
import MainRanking from "./Ranking/MainRanking";
import * as R from "./Ranking.style";
import MyRank from "./MyRank/MyRank";

export const Ranking = () => {
  return (
    <R.Wrapper>
      <MainRanking />
      <RankingTable />
      <MyRank />
    </R.Wrapper>
  );
};
