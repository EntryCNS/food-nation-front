// 날짜를 캘린더에서 

import { useEffect, useState } from "react";

import * as Cal from "./Calendar.style";

import ArrowSvg from "../../assets/image/review/arrow.svg"

import { useRecoilState, useRecoilValue } from "recoil";
import {calendarYear,calendarMonth,calendarDate,calendarDay} from "stores/review/calednar";

// 이번년이 아닌 다른 년에 같은 달일 때 선택되는 것
// 달력에서 날을 선택했을 때 급식 메뉴를 바꿔야하는데, 
// recoil과 useState를 두개 다 써서 캘린더상에서는 useState를 쓰고 밖에서는
// recoil을 쓰던가 해야됨

// 1. 날짜선택했을 때 날짜 세팅


export default function Calendar() {
  let today = new Date();

  const [year,setYear] = useRecoilState(calendarYear)
  const [month,setMonth] = useRecoilState(calendarMonth)
  const [date,setDate] = useRecoilState(calendarDate)
  const [day,setDay] = useRecoilState(calendarDay)
  
  useEffect(() => {
    setting()
    requestData(today.getMonth()+1, today.getDate());
  }, []);

  function setting(){
    setYear(today.getFullYear());
    setMonth(today.getMonth()+1);
    setDate(today.getDate())
    setDay(today.getDay())
  }


  // 이번달 첫날의
  let currentMonthFirst: Date = new Date(year, month - 1, 1);
  // 이번달 마지막날
  let currentMonthLast: Date = new Date(year, month, 0);
  // 지난달 마지막날
  let previousMonthLast: Date = new Date(year, month - 1, 0);


  // 달력 한 면의 날짜를 채워넣는 배열
  let dayArray: number[] = [];
  // 달력 한 면의 색을 채워넣는 배열
  let colorArray: boolean[] = [];


  for (
    let i = previousMonthLast.getDate() - (currentMonthFirst.getDay() - 1);
    i <= previousMonthLast.getDate();
    i++
  ) {
    dayArray.push(i);
    colorArray.push(false);
  }
  for (let i = currentMonthFirst.getDate(); i <= currentMonthLast.getDate(); i++) {
    dayArray.push(i);
    colorArray.push(true);
  }
  for (let i = 1; i < 7 - currentMonthLast.getDay(); i++) {
    dayArray.push(i);
    colorArray.push(false);
  }

  // --------------------

  // 선택된 날짜(idx), 초기값은 선택되지 않았기 때문에 0
  const [selected, setSelected] = useState(-1);

  // 서버통신
  // 날짜를 선택했을 때만 recoil이 사용됨

  // const [globalDate, setGlobalDate] = useRecoilState(calendarDate);
  function requestData(month: number, idx: number) {
    console.log("서버통신-리뷰쓰기", month, idx);
  }

  // recoil값에서 년/달 만 변경
  //이전달
  function previousMonth(): void {
    setSelected(-1);
    setMonth(month - 1);
    if (month == 1) {
      setYear(year - 1);
      setMonth(12);
    }
  }
  // 다음달
  function nextMonth(): void {
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
    // // 선택해줌
    // setSelected(idx);
    // if (idx < currentMonthFirst.getDay()) { 
    //   // 지난 달 선택
    //   requestData(month - 1, previousMonthLast.getDate() - currentMonthFirst.getDay() + idx + 1);

    // } else if (idx < currentMonthFirst.getDay() + currentMonthLast.getDate()) {
    //   // 이번달 선택

    //   // 이번달 | 이번달 요일 + idx + 1(idx가 0부터 시작)
    //   requestData(month, idx - currentMonthFirst.getDay() + 1);

    //   setDate(idx-currentMonthFirst.getDay()+1)
    //   setDay(idx % 7)

    // } else {
    //   // 다음달 선택

    //   // 이번달+1 | 이번달 요일 + 이번달 날짜 + idx + 1(idx가 0부터 시작)
    //   requestData(month + 1, idx - currentMonthFirst.getDay() - currentMonthLast.getDate() + 1);
    // }
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
          {/* <Image src={leftArrow} /> */}
          {/* <LeftArrow/> */}
          <ArrowSvg/>
        </div>
        <div onClick={nextMonth}>
          {/* <Image src={rightArrow} /> */}
          {/* <RightArrow/> */}
          <ArrowSvg className="rightArrow"/>
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
          dayArray?.map((day, idx) => (
            <Cal.Day
              key={idx}
              visable={colorArray[idx]}
              selected={
                selected == idx
                  ? true
                  : selected < 0 &&
                    date == idx - currentMonthFirst.getDay() + 1 &&
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
