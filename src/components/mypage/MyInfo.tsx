import * as M from "./MyInfo.style";

const MyInfo = () => {
  return (
    <M.MyInfoContainer>
      <div>
        <h4 className="infoTitle">이름</h4>
        <p className="info">정우재</p>
      </div>
      <div>
        <h4 className="infoTitle">아이디</h4>
        <p className="info">woojea</p>
      </div>
      <div>
        <h4 className="infoTitle">이메일</h4>
        <p className="info">woojea@gmail.com</p>
      </div>
    </M.MyInfoContainer>
  );
};

export default MyInfo;
