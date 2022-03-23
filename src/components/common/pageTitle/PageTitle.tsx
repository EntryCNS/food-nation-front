import Container from "components/common/pageTitle/pageTitleStyle";
import { useRouter } from "next/router";
import React from "react";

const PageTitle = () => {
  const router = useRouter();
  const r = router.pathname;
  return <Container>{r.replace("/", "")}</Container>;
};

export default PageTitle;
