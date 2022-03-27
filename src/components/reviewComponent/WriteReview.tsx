import { useState } from "react";

import * as W from "./WriteReview.style";
import * as C from "./Common.style";
import Image from "next/image";

import leftArrow from "assets/image/review/leftArrow.svg"
import rightArrow from "assets/image/review/rightArrow.svg"
import emptyStar from "assets/image/review/writeEmptyStar.svg"
import fullStar from "assets/image/review/writeFullStar.svg"
import { chdir } from "process";


export default function WriteReview() {

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  const [selectedDay,setSelectedDay] = useState(date);

  // 0 = 일 1 = 월...
  let day = today.getDay();  // 요일`
  console.log(year)
  console.log(month)
  console.log(date)
  console.log(day)

  console.log("test Start")

  // 이번달 첫날의
  let test = new Date(year,month-1,1)
  // console.log(test.getDate())
  // console.log(test.getDay())

  // 이번달 마지막날
  let test1 = new Date(year,month,0)
  // console.log(test1.getDate())
  // console.log(test1.getDay())

  // 지난달 마지막날
  let test2 = new Date(year,month-1,0)
  // console.log(test2.getDate())
  // console.log(test2.getDay())

  let dayArray:number[] = []

  let colorArray:number[] = []

  for (let i = test2.getDate()-(test.getDay()-1);i<=test2.getDate();i++){
    dayArray.push(i)
    colorArray.push(0)
  }
  for (let i = test.getDate();i<=test1.getDate();i++){
    dayArray.push(i)
    colorArray.push(1)
  }
  for (let i = 1;i<7-test1.getDay();i++){
    dayArray.push(i)
    colorArray.push(0)
  }

  return (
    <W.Container>
      <W.InnerContainer>
        <W.CalendarContainer>
            <nav>
                <div>{2202}</div>
                <div>{"MAY"}</div>
                <div>
                    <Image src={leftArrow}/>
                </div>
                <div>
                    <Image src={rightArrow}/>
                </div>
            </nav>
            <W.DayOfWeek>
              <div>일</div>
              <div>월</div>
              <div>화</div>
              <div>수</div>
              <div>목</div>
              <div>금</div>
              <div>토</div>
            </W.DayOfWeek>
            <W.Calendar>
              {
                dayArray?.map((day,idx) => (
                  <W.Day key={idx} visable={colorArray[idx]} selected={selectedDay}>
                    {day}
                  </W.Day>
                ))
              }
            </W.Calendar>
        </W.CalendarContainer>
        <C.ButtonsContainer>
          <C.Button>아침</C.Button>
          <C.Button>점심</C.Button>
          <C.Button>저녁</C.Button>
        </C.ButtonsContainer>
        <W.StarContainer>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
        </W.StarContainer>
        <W.CommentInputContainer>
        <W.CommentInput placeholder="급식에 대해 말해주세요" />
        </W.CommentInputContainer>
        <W.Button>
            리뷰쓰기
        </W.Button>
      </W.InnerContainer>
    </W.Container>
  );
}
