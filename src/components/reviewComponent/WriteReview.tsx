import { useEffect, useState } from "react";

import * as C from "./Common.style";
import * as W from "./WriteReview.style";

// 별을 read와 write 같은 걸 사용해 봤지만
import Star from "../../assets/image/review/writeStar.svg";

import Calendar from "components/reviewComponent/Calendar";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  calendarYear,
  calendarMonth,
  calendarDate,
} from "stores/review/selectedDate";

export default function WriteReview() {
  // 별
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);

  const [selectedButton, setSelectedButton] = useState(-1);
  const timeArray = ["아침", "점심", "저녁"];
  function buttonClick(idx: number): void {
    console.log(idx, "의 서버값");
    setSelectedButton(idx);
  }

  const [review, setReview] = useState("");

  // 버튼의 기본 선택이 현제 시간에 따라 변경,
  // 계속 리렌더링이 고민
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      console.log(0, "의 서버값");
      setSelectedButton(0);
    } else if (time > 1230 && time < 1920) {
      console.log(1, "의 서버값");
      setSelectedButton(1);
    } else {
      console.log(2, "의 서버값");
      setSelectedButton(2);
    }
  }, []);

  function paintStar(idx: number) {
    console.log("별개수", idx + 1);
    let temp: number[] = [];
    for (let i = 0; i < idx + 1; i++) {
      temp.push(1);
    }
    for (let i = idx + 1; i < 5; i++) {
      temp.push(0);
    }
    console.log(temp);
    setStars(temp);
  }

  function onchange(value: string) {
    setReview(value);
  }

  // 리뷰형식(별점 + 글)이 맞지 않을 때
  const [reviewError, setReviewError] = useState(false);

  // 별이나 글이 없을 때 에러
  function onClick() {
    if (stars[0] == 0 || review.length < 1) {
      setReviewError(true);
    } else {
      setReviewError(false);

      console.log(year,month+1,date,"일 리뷰는",stars.filter(e => 1 === e).length, review);
    }
  }

  // ------아래는 켈린더에 넣는 값

  // recoil에 저장되는 값은 "오늘" 또는 "선택된 날" 이다
  const [year, setYear] = useRecoilState(calendarYear);
  const [month, setMonth] = useRecoilState(calendarMonth);
  const [date, setDate] = useRecoilState(calendarDate);

  useEffect(() => {
    console.log("year",year)
    console.log("month",month+1)
    console.log("date",date)
  },[year,month,date])

  return (
    <W.Container>
      <W.InnerContainer>
        {/* <Calendar></Calendar> */}
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
