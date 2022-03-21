import MenuApply from "components/applymenu/MenuApply";
import ApplyList from "components/applymenu";
import { NextPage } from "next";
import React, { Suspense } from "react";

// const ApplyList = React.lazy(() => import("components/applymenu"));

const apply: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <ApplyList />
      <MenuApply />
    </div>
  );
};

export default apply;
