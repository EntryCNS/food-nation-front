import React from "react";
import ReadReview from "./readReview/ReadReview";
import WriteReview from "./writeReview/WriteReview";

import Menu from "components/common/menu";

import * as R from "./ReviewPage.style";

export default function Review() {
  return (
    <R.ReviewPageWrapper>
      <section>
        <Menu/>
        <R.ReadReviewWrapper>
        <ReadReview />
        </R.ReadReviewWrapper>
      </section>
      <section>
        <WriteReview />
      </section>    
    </R.ReviewPageWrapper>
  );
}
