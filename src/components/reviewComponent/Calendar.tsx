import { useEffect, useState } from "react";

import * as Cal from "./Calendar.style";
import Image from "next/image";

import leftArrow from "assets/image/review/leftArrow.svg";
import rightArrow from "assets/image/review/rightArrow.svg";

// import { useRecoilState, useRecoilValue } from "recoil";
// import { calendarDate, calendarMonth } from "stores/review/review";

export default function Calendar() {
  let today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [date, setDate] = useState(today.getDate());
  const [day, setDay] = useState(today.getDay());

  // 이번달 첫날의
  let test: Date = new Date(year, month - 1, 1);
  // console.log(test.getDate())
  // console.log(test.getDay())

  // 이번달 마지막날
  let test1: Date = new Date(year, month, 0);
  // console.log(test1.getDate())
  // console.log(test1.getDay())

  // 지난달 마지막날
  let test2: Date = new Date(year, month - 1, 0);
  // console.log(test2.getDate())
  // console.log(test2.getDay())

  let dayArray: number[] = [];

  let colorArray: boolean[] = [];

  for (
    let i = test2.getDate() - (test.getDay() - 1);
    i <= test2.getDate();
    i++
  ) {
    dayArray.push(i);
    colorArray.push(false);
  }
  for (let i = test.getDate(); i <= test1.getDate(); i++) {
    dayArray.push(i);
    colorArray.push(true);
  }
  for (let i = 1; i < 7 - test1.getDay(); i++) {
    dayArray.push(i);
    colorArray.push(false);
  }

  // --------------------

  // 선택된 날짜(idx), 초기값은 선택되지 않았기 때문에 0
  const [selected, setSelected] = useState(-1);

  // //
  useEffect(() => {
    requestData(month, date);
  }, []);
  // 서버통신
  // 날짜를 선택했을 때만 recoil이 사용됨

  // const [globalDate, setGlobalDate] = useRecoilState(calendarDate);
  function requestData(month: number, idx: number) {
    console.log("서버통신", month, idx);
  }

  //이전달
  function previousMonth(): void {
    // selected를 변경해서 달력이동할 때 선택을 없앤다
    setSelected(-1);
    setMonth(month - 1);
    if (month == 1) {
      setYear(year - 1);
      setMonth(12);
    }
  }
  // 다음달
  function nextMonth(): void {
    // selected를 변경해서 달력이동할 때 선택을 없앤다
    setSelected(-1);
    setMonth(month + 1);
    if (month == 12) {
      setYear(year + 1);
      setMonth(1);
    }
  }
  // 날짜 선택시 날짜를 바꾸고 그 날짜의 정보를 가져옴
  // 저번, 이번, 다음 달에 따라 조정
  function selectDay(idx: number) {
    // 선택해줌
    setSelected(idx);
    if (idx < test.getDay()) {
      // 이번달 - 1 | 지난달날짜 - 이번달 요일 + idx + 1(idx가 0부터 시작)
      requestData(month - 1, test2.getDate() - test.getDay() + idx + 1);
    } else if (idx < test.getDay() + test1.getDate()) {
      // 이번달 | 이번달 요일 + idx + 1(idx가 0부터 시작)
      requestData(month, idx - test.getDay() + 1);
    } else {
      // 이번달+1 | 이번달 요일 + 이번달 날짜 + idx + 1(idx가 0부터 시작)
      requestData(month + 1, idx - test.getDay() - test1.getDate() + 1);
    }
  }

  // 캘린더에 띄울 영어
  const monthes: string[] = [
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
        <div>{year}</div>
        <div>{monthes[month - 1]}</div>
        <div onClick={previousMonth}>
          <Image src={leftArrow} />
        </div>
        <div onClick={nextMonth}>
          <Image src={rightArrow} />
        </div>
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
          // selected속성의 조건은
          // selected == idx는 선택된 날짜를 우선적으로 뛰우고
          // 선택된 게 없다면
          // selected < 0 (선택이 안 됐을 때)
          // date + 1 == idx
          dayArray?.map((day, idx) => (
            <Cal.Day
              key={idx}
              visable={colorArray[idx]}
              selected={
                selected == idx
                  ? true
                  : selected < 0 &&
                    date == idx - test.getDay() + 1 &&
                    month == today.getMonth() + 1
                  ? true
                  : false
              }
              onClick={() => selectDay(idx)}
            >
              {day}
            </Cal.Day>
          ))
        }
      </Cal.Calendar>
    </Cal.CalendarContainer>
  );
}
