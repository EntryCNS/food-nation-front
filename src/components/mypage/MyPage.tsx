import React from "react";
import CropImg from "components/mypage/CropImg";
import styled from "styled-components";
const MypageCatainer = styled.div`
  display: flex;
`;
const MyPage = () => {
  return (
    <MypageCatainer>
      <CropImg />
    </MypageCatainer>
  );
};

export default MyPage;
