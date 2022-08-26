import React from "react";
import CropImg from "components/mypage/CropImg";
import styled from "styled-components";
import { NextComponentType } from "next";
import MyInfo from "components/mypage/MyInfo";
const MyPageContainer = styled.div`
  width: 970px;
  height: 738px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const MyPage: NextComponentType = () => {
  return (
    <MyPageContainer>
      <CropImg />
      <MyInfo />
    </MyPageContainer>
  );
};

export default MyPage;
