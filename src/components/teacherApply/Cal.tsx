import { useEffect, useState } from "react";

import * as Cal from "components/teacherApply/Calendar";
import Image from "next/image";

// import leftArrow from "assets/image/review/leftArrow.svg";
// import rightArrow from "assets/image/review/rightArrow.svg";

export default function Calendar() {
  let today = new Date();
  // let year = today.getFullYear(); // 년도
  // let month = today.getMonth() + 1;  // 월
  // let date = today.getDate();  // 날짜
  // // 0 = 일 1 = 월...
  // let day = today.getDay();  // 요일`

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [date, setDate] = useState(today.getDate());
  const [day, setDay] = useState(today.getDay());

  // 이번달 첫날의
  let test = new Date(year, month - 1, 1);
  // console.log(test.getDate())
  // console.log(test.getDay())

  // 이번달 마지막날
  let test1 = new Date(year, month, 0);
  // console.log(test1.getDate())
  // console.log(test1.getDay())

  // 지난달 마지막날
  let test2 = new Date(year, month - 1, 0);
  // console.log(test2.getDate())
  // console.log(test2.getDay())

  let dayArray: number[] = [];

  let colorArray: number[] = [];

  for (
    let i = test2.getDate() - (test.getDay() - 1);
    i <= test2.getDate();
    i++
  ) {
    dayArray.push(i);
    colorArray.push(0);
  }
  for (let i = test.getDate(); i <= test1.getDate(); i++) {
    dayArray.push(i);
    colorArray.push(1);
  }
  for (let i = 1; i < 7 - test1.getDay(); i++) {
    dayArray.push(i);
    colorArray.push(0);
  }

  // 그냥 날짜로 비교하면 지난/다음 달 날짜와 중복되어 선택될 수 있어서
  // checkNum과 map의 idx를 비교해준다
  const [checkNum, setCheckNum] = useState(test.getDay());

  function previousMonth() {
    setMonth(month - 1);
    console.log("이전페이지");
  }
  function nextMonth() {
    setMonth(month + 1);
    console.log("다음페이지");
  }

  // 캘린더에 띄울 영어
  const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Cal.CalendarContainer>
      <nav>
        <div onClick={previousMonth}>{/* <Image src={leftArrow} /> */}왼</div>
        <div>{monthes[month - 1]}</div>
        <div onClick={nextMonth}>{/* <Image src={rightArrow} /> */}오</div>
      </nav>
      <Cal.DayOfWeek>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </Cal.DayOfWeek>
      <Cal.Calendar>
        {
          // idx는 0부터이기 때문에 checkNum - 1
          dayArray?.map((day, idx) => (
            <Cal.Day
              key={idx}
              visable={colorArray[idx]}
              selected={date == day && checkNum - 1 < idx ? 1 : 0}
            >
              {" "}
              {day}
            </Cal.Day>
          ))
        }
      </Cal.Calendar>
    </Cal.CalendarContainer>
  );
}
