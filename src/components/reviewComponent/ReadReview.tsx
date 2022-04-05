import { useState,useEffect } from "react";

import * as R from "./ReadReview.style";
import * as C from "./Common.style"
import LeftArrow from"../../assets/image/review/leftArrow.svg"
import RightArrow from "../../assets/image/review/rightArrow.svg";
import EmptyStar from "../../assets/image/review/readEmptyStar.svg";
import FullStar from "../../assets/image/review/readFullStar.svg";

import {useRecoilState} from "recoil";
import {calendarYear,calendarMonth,calendarDate,calendarDay} from "stores/review/calednar";


// 달 넘길 때 년, 월, 일, 요일 바꿔주기

export default function ReadReview() {

  const [year,setYear] = useRecoilState(calendarYear)
  const [month,setMonth] = useRecoilState(calendarMonth)
  const [date,setDate] = useRecoilState(calendarDate)
  const [day,setDay] = useRecoilState(calendarDay)

  interface ReviewType {
    id: number;
    stars:number;
    comment:string;
  }

  // 아침점심저 녁 중 선택된 버튼
  const [selectedButton, setSelectedButton] = useState(-1);
  // 버튼 map출력 배열
  const timeArray = ["아침", "점심", "저녁"];
  // 아침점심저녁 중 선택된 값에 따른 서버요청
  function buttonClick(idx: number): void {
    console.log(idx,"의 서버값")
    setSelectedButton(idx);
  }

  // 버튼의 초기값이 현제 시간에 따라 변경,
  // (각각의 급식시간이 지난 후)
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      console.log(0,"의 서버값")
      setSelectedButton(0);
    } else if (time > 1230 && time < 1820) {
      console.log(1,"의 서버값")
      setSelectedButton(1);
    } else {
      console.log(2,"의 서버값")
      setSelectedButton(2);
    }
  }, []);

  // 더미데이터
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

  function makeStarArray(starNum:number){
    let starArray = []
    for(let i = 0;i<starNum;i++){
      starArray.push(true)
    }
    for(let i = 0;i<5-starNum;i++){
      starArray.push(false)
    }
    return starArray
  }

  const dayArray = ['일','월','화','수','목','금','토'];

  // recoil값에서 일/요일/월/년까지 변경
  function previousDate(): void {
    // 달이 넘어갈 때
    if (date-1 < 1){
      // 년이 넘어갈 때
      if (month - 1 < 1) {
        setYear(year - 1)
        setMonth(12)
      } else {

      }

    } else {
      // setDate(Date)
    }
  }
  // 다음달
  function nextDate(): void {

  }

  return (
    <R.Container>
      <R.InnerContainer>
        <R.NavContainer>
          <nav>
            <div onClick={previousDate}>
              <LeftArrow/>
            </div>
            <div>{year}</div>
            <div>.</div>
            <div>{month}</div>
            <div>.</div>
            <div>{date}</div>
            <div>({dayArray[day]})</div>
            <div onClick={nextDate}>
              <RightArrow/>
            </div>
          </nav>
          <C.ButtonsContainer>
          {/* <C.Button>아침</C.Button>
          <C.Button>점심</C.Button>
          <C.Button>저녁</C.Button> */}
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
                // makeStarArray(review.stars).map((star,idx) => (
                  
                // ))
                makeStarArray(review.stars).map((star,idx) => {
                  star ? <FullStar/> : <EmptyStar/>
                })
              }
            </R.StarContainer>
            <R.Comment>
              {
                review.comment
              }
            </R.Comment>
          </R.CommentContainer>
        ))}
      </R.InnerContainer>
    </R.Container>
  );
}

