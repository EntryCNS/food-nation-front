import MenuApply from "components/applymenu/MenuApply";
import ApplyList from "components/applymenu";
import { NextPage } from "next";
import React from "react";

const apply: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <ApplyList />
      <MenuApply />
    </div>
  );
};

export default apply;
