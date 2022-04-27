// 날짜를 캘린더에서

import { useEffect, useState } from "react";

import * as Cal from "./Calendar.style";

import ArrowSvg from "../../assets/image/review/arrow.svg";

export default function Calendar({
  year,
  setYear,
  month,
  setMonth,
  date,
  setDate,
}: {
  year: number;
  setYear: any;
  month: number;
  setMonth: any;
  date: number;
  setDate: any;
}) {
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

  // 오늘 날짜 가져오기
  const today = new Date();

  // 달력에 띄우기 위한 변수,
  // props로 들어오는 값과 독립적이다
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  // 이번달 첫날의
  let currentMonthFirst: Date = new Date(calYear, calMonth, 1);
  // 이번달 마지막날
  let currentMonthLast: Date = new Date(calYear, calMonth + 1, 0);
  // 지난달 마지막날
  let previousMonthLast: Date = new Date(calYear, calMonth, 0);

  // 날짜 배열에 넣기
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
  for (
    let i = currentMonthFirst.getDate();
    i <= currentMonthLast.getDate();
    i++
  ) {
    dayArray.push(i);
    colorArray.push(true);
  }
  for (let i = 1; i < 7 - currentMonthLast.getDay(); i++) {
    dayArray.push(i);
    colorArray.push(false);
  }

  // 앞뒤 버튼만이 calYear, calMonth를 변경할 수 있다
  function previousMonth(): void {
    const tempDate = new Date(calYear, calMonth - 1);
    setCalYear(tempDate.getFullYear());
    setCalMonth(tempDate.getMonth());
  }
  // 다음달
  function nextMonth(): void {
    const tempDate = new Date(calYear, calMonth + 1);
    setCalYear(tempDate.getFullYear());
    setCalMonth(tempDate.getMonth());
  }

  // 값 초기화 month 그대로 초기화
  useEffect(() => {
    setYear(today.getFullYear())
    setMonth(today.getMonth())
    setDate(today.getDate())
  },[])

  // props로 들어오는 값이 바뀔 때 실행, 서버통신 넣기
  useEffect(() => {
    // propsFunction(month,year,date)|
    console.log("year",year)
    console.log("month",month)
    console.log("date",date)
  }, [year, month, date]);


  // 날짜 선택시 날짜를 바꾸고 그 날짜의 정보를 가져옴
  // 저번, 이번, 다음 달에 따라 조정
  // 
  // selectDay함수에서는 year,month,date를 calYear,calMonth를 사용하기 때문에 선택이 켈린더에 영향을 끼치지 않는다
  function selectDay(idx: number) {
    if (idx < currentMonthFirst.getDay()) {
      if (calMonth == 0){
        setYear(calYear-1)
        setMonth(11)
      }
      else{
        setYear(calYear)
        setMonth(calMonth-1)
      }
      setDate(previousMonthLast.getDate() - currentMonthFirst.getDay() + idx + 1)

    } else if (idx < currentMonthFirst.getDay() + currentMonthLast.getDate()) {
      setYear(calYear)
      setMonth(calMonth)
      setDate(idx - currentMonthFirst.getDay() + 1)

    } else {
      if (calMonth == 1){
        setYear(calYear+1)
        setMonth(0)
      } else{
        setYear(calYear)
        setMonth(calMonth + 1)
      }
      setDate(idx - currentMonthFirst.getDay() - currentMonthLast.getDate() + 1)
    }
  }

  return (
    <Cal.CalendarContainer>
      <nav>
        <div>{calYear}</div>
        <div>{monthes[calMonth]}</div>
        <div onClick={previousMonth}>
          <ArrowSvg />
        </div>
        <div onClick={nextMonth}>
          <ArrowSvg className="rightArrow" />
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
        {dayArray?.map((day, idx) => (
          <Cal.Day
            key={idx}
            visable={colorArray[idx]}
            // selected={i
            //   selected == idxi
            //     ? true
            //     : selected < 0 &&
            //       date == idx - currentMonthFirst.getDay() + 1 &&
            //       month == today.getMonth() + 1
            //     ? true
            //     : false
            // }
            onClick={() => selectDay(idx)}
          >
            {day}
          </Cal.Day>
        ))}
      </Cal.Calendar>
    </Cal.CalendarContainer>
  );
}
