import * as C from "../Common.style";
import * as W from "./WriteReview.style";

// 별을 read와 write 같은 걸 사용해 봤지만
import Star from "../../../assets/image/review/writeStar.svg";

import Calendar from "components/reviewComponent/calendar/Calendar";

import useWriteReview from "hooks/review/useWriteReview";

export default function WriteReview() {
  const timeArray = ["아침", "점심", "저녁"];

  const {
    year,
    setYear,
    month,
    setMonth,
    date,
    setDate,
    buttonClick,
    selectedButton,
    stars,
    paintStar,
    onchange,
    reviewError,
    onClick,
  } = useWriteReview();

  return (
    <W.Container>
      <W.InnerContainer>
        <Calendar
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          date={date}
          setDate={setDate}
        ></Calendar>

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

        <W.StarContainer>
          {stars.map((star, idx) => (
            <Star
              width="30px"
              height="30px"
              className={star ? "star" : "empty star"}
              key={idx}
              onClick={() => paintStar(idx)}
            />
          ))}
        </W.StarContainer>
        <W.CommentInputContainer>
          <W.CommentInput
            onChange={(e) => onchange(e.target.value)}
            placeholder="급식에 대해 말해주세요"
          />
        </W.CommentInputContainer>
        {reviewError && (
          <W.ReviewError>*별점과 글 모두 작성해주세요</W.ReviewError>
        )}
        <W.Button onClick={onClick}>리뷰쓰기</W.Button>
      </W.InnerContainer>
    </W.Container>
  );
}
