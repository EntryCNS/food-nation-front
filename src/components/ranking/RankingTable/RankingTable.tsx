import Image from "next/image";

import profileImage from "assets/image/profile.png";
import * as RT from "./RankingTable.style";

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
  {
    name: "배진영",
    rank: 6,
    contribute: 3,
  },
  {
    name: "배진영",
    rank: 7,
    contribute: 3,
  },
  {
    name: "배진영",
    rank: 8,
    contribute: 3,
  },
];

const RankingTable = () => {
  return (
    <RT.Container>
      <RT.TableContainer>
        <nav>
          <ul>
            <li className="profileM">Profile</li>
            <li className="nameM">Name</li>
            <li className="scroeM">Score</li>
            <li className="rankingM">Ranking</li>
          </ul>
        </nav>
        <hr />
        <div className="table">
          {data.map((d) => (
            <div className="rankTable" key={d.rank}>
              <div className="profileImg">
                <Image src={profileImage} width={40} height={40} />
              </div>
              <p className="tableText">{d.name}</p>
              <p className="tableText">{d.contribute}</p>
              <p className="ranking">{d.rank}</p>
            </div>
          ))}
        </div>
      </RT.TableContainer>
    </RT.Container>
  );
};

export default RankingTable;
