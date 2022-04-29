import React from "react";
import ReadReview from "./ReadReview";
import WriteReview from "./WriteReview";

import * as R from "./ReviewPage.style";

export default function Review() {
  return (
    <R.ReviewPageWrapper>
      <section>
        <div
          style={{
            width: "580px",
            height: "330px",
            backgroundColor: "black",
          }}
        ></div>
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
