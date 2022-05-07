import { useState, useEffect } from "react";

import * as R from "./ReadReview.style";
import * as C from "../Common.style";

import ArrowSvg from "../../../assets/image/review/arrow.svg";
import Star from "../../../assets/image/review/readStar.svg";

import useReadReview from "hooks/review/useReadReview";

export default function ReadReview() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      stars: 1,
      comment: "맛있어요",
    },
    {
      id: 2,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 3,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 4,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 5,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 6,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 7,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 8,
      stars: 5,
      comment: "맛있어요",
    },
  ]);

  const timeArray = ["아침", "점심", "저녁"];

  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

  const {
    changeDate,
      year,
      month,
      date,
      buttonClick,
      selectedButton,
      makeStarArray,
      day
  } = useReadReview()

  interface ReviewType {
    id: number;
    stars: number;
    comment: string;
  }

  return (
    <R.Container>
      <R.InnerContainer>
        <R.NavContainer>
          <nav>
            <div onClick={() => changeDate(-1)}>
              <ArrowSvg className="leftArrow" />
            </div>
            <div>{year}</div>
            <div>.</div>
            <div>{month < 9 ? "0" + (month + 1) : month + 1}</div>
            <div>.</div>
            <div>{date < 10 ? "0" + date : date}</div>
            <div>({dayArray[day]})</div>
            <div onClick={() => changeDate(1)}>
              <ArrowSvg className="rightArrow" />
            </div>
          </nav>
          <C.ButtonsContainer>
            {timeArray.map((time, idx) => (
              <C.Button
                key={idx}
                onClick={() => buttonClick(idx)}
                selected={idx == selectedButton ? true : false}
              >
                {time}
              </C.Button>
            ))}
          </C.ButtonsContainer>
        </R.NavContainer>
        <R.Temp />
        {reviews?.map((review: ReviewType) => (
          <R.CommentContainer key={review.id}>
            <R.StarContainer>
              {makeStarArray(review.stars).map((star) => (
                <Star
                  key={star.idx}
                  className={star.filled ? "fill" : "empty"}
                />
              ))}
            </R.StarContainer>
            <R.Comment>{review.comment}</R.Comment>
          </R.CommentContainer>
        ))}
      </R.InnerContainer>
    </R.Container>
  );
}
