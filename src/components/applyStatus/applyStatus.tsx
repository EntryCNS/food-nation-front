import React from "react";
import AcceptList from "./acceptList";
import TodayList from "./todayList";
import WaitList from "./waitList";
import { Wrapper, LeftContainer } from "./applyStatus.style";
const ApplyStatus = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <AcceptList />
        <TodayList />
      </LeftContainer>
      <WaitList />
    </Wrapper>
  );
};

export default ApplyStatus;
