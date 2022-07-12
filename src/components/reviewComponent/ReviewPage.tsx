import React from "react";
import ReadReview from "./readReview/ReadReview";
import WriteReview from "./writeReview/WriteReview";

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
