import { useState, useEffect } from "react";

import * as R from "./ReadReview.style";
import * as C from "./Common.style";

import ArrowSvg from "../../assets/image/review/arrow.svg";
import Star from "../../assets/image/review/readStar.svg";

import { useRecoilState } from "recoil";
import {
  calendarYear,
  calendarMonth,
  calendarDate,
} from "stores/review/selectedDate";
import { recoilCalYear, recoilCalMonth } from "stores/calendar/calLocation";

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

  interface ReviewType {
    id: number;
    stars: number;
    comment: string;
  }

  const [year, setYear] = useRecoilState(calendarYear);
  const [month, setMonth] = useRecoilState(calendarMonth);
  const [date, setDate] = useRecoilState(calendarDate);

  // readReview에는 요일이 있다
  const [day, setDay] = useState(0);
  
  // 아침점심저녁 중 선택된 버튼
  const [selectedButton, setSelectedButton] = useState(-1);
  // 버튼 map출력 배열
  const timeArray = ["아침", "점심", "저녁"];

  // 아침점심저녁 중 선택된 값에 따른 서버요청
  function buttonClick(idx: number): void {
    requestData(idx)
    setSelectedButton(idx);
  }
  function requestData(time:number) {
    console.log(month+1,"월",date,"일",time,"리뷰가져오기");
  }

  // 버튼의 초기값이 현제 시간에 따라 변경,
  // (각각의 급식시간이 지난 후)
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      console.log(0, "의 서버값");
      setSelectedButton(0);
    } else if (time > 1230 && time < 1820) {
      console.log(1, "의 서버값");
      setSelectedButton(1);
    } else {
      console.log(2, "의 서버값");
      setSelectedButton(2);
    }
  }, []);

  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

  // recoilCalYear, recoilCalMonth
  const [calYear, setCalYear] = useRecoilState(recoilCalYear);
  const [calMonth, setCalMonth] = useRecoilState(recoilCalMonth);

  // 날짜 변경
  function changeDate(x: number): void {
    // Date는 넘어가면 알아서 맞춰줘서
    const makeDate = new Date(year, month, date + x);

    // readReview에서 날짜를 변경하다가 달이 넘어갔을 때 처리
    if (makeDate.getMonth() !== calMonth) {
      // console.log("달이 다름")
      const moveCal = new Date(
        makeDate.getFullYear(),
        makeDate.getMonth(),
        makeDate.getDate()
      );
      setCalYear(moveCal.getFullYear());
      setCalMonth(moveCal.getMonth());
    }
    setYear(makeDate.getFullYear());
    setMonth(makeDate.getMonth());
    setDate(makeDate.getDate());
  }

  // 요일변경
  useEffect(() => {
    const forSetDay = new Date(year, month, date);
    setDay(forSetDay.getDay());
  }, [year, month, date]);


  function makeStarArray(starNum:number):{filled:boolean,idx:number}[]{
    let starArray:{filled:boolean,idx:number}[] = []
    for (let i = 0;i<5;i++){
      if (i < starNum){
        starArray.push({
          filled:true,
          idx:i,
        })
      }else{
        starArray.push({
          filled:false,
          idx:i,
        })
      }
    }
    return starArray
  }

  return (
    <R.Container>
      <R.InnerContainer>
        <R.NavContainer>
          <nav>
            <div onClick={() => changeDate(-1)}>
              <ArrowSvg />
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
              {
                makeStarArray(review.stars).map((star)=>(
                  <Star key={star.idx} className={star.filled ? "fill" : "empty"
                }/>
                ))
              }
            </R.StarContainer>
            <R.Comment>{review.comment}</R.Comment>
          </R.CommentContainer> 
        ))}
      </R.InnerContainer>
    </R.Container>
  );
}
