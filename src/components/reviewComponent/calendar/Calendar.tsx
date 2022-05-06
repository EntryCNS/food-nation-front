// 날짜를 캘린더에서

import { useEffect, useState } from "react";

import * as Cal from "./Calendar.style";

import ArrowSvg from "../../../assets/image/review/arrow.svg";

import { useRecoilState, useRecoilValue } from "recoil";
import { recoilCalYear, recoilCalMonth } from "stores/calendar/calLocation";
import { ThemeState } from "stores/themeAtom";

import useCalendar from "hooks/review/useCalendar";

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

  const {
    calYear,
    calMonth,
    changeMonth,
    dayArray,
    colorArray,
    isDark,
    isSameDate,
    currentMonthFirst,
    selectDay
  } = useCalendar({
    year,
    setYear,
    month,
    setMonth,
    date,
    setDate,
  })

  // // 달력에 띄우기 위한 변수,
  // // props로 들어오는 값과 독립적이다
  // const [calYear, setCalYear] = useRecoilState(recoilCalYear);
  // const [calMonth, setCalMonth] = useRecoilState(recoilCalMonth);

  // // 값 초기화 month 그대로 초기화
  // useEffect(() => {
  //   // 오늘 날짜 가져오기
  //   const today = new Date();

  //   setYear(today.getFullYear());
  //   setMonth(today.getMonth());
  //   setDate(today.getDate());

  //   setCalYear(today.getFullYear());
  //   setCalMonth(today.getMonth());
  // }, []);

  // useEffect(() => {
  //   console.log("year", year);
  //   console.log("month", month);
  //   console.log("date", date);
  // }, [year, month, date]);

  // // 이번달 첫날의
  // let currentMonthFirst: Date = new Date(calYear, calMonth, 1);
  // // 이번달 마지막날
  // let currentMonthLast: Date = new Date(calYear, calMonth + 1, 0);
  // // 지난달 마지막날
  // let previousMonthLast: Date = new Date(calYear, calMonth, 0);
  // // 날짜 배열에 넣기
  // let dayArray: number[] = [];
  // // 달력 한 면의 색을 채워넣는 배열
  // let colorArray: boolean[] = [];

  // for (
  //   let i = previousMonthLast.getDate() - (currentMonthFirst.getDay() - 1);
  //   i <= previousMonthLast.getDate();
  //   i++
  // ) {
  //   dayArray.push(i);
  //   colorArray.push(false);
  // }
  // for (
  //   let i = currentMonthFirst.getDate();
  //   i <= currentMonthLast.getDate();
  //   i++
  // ) {
  //   dayArray.push(i);
  //   colorArray.push(true);
  // }
  // for (let i = 1; i < 7 - currentMonthLast.getDay(); i++) {
  //   dayArray.push(i);
  //   colorArray.push(false);
  // }

  // function changeMonth(changeMonth: number) {
  //   const tempDate = new Date(calYear, calMonth + changeMonth);
  //   console.log(tempDate);
  //   setCalYear(tempDate.getFullYear());
  //   setCalMonth(tempDate.getMonth());
  // }

  // // 선택된 날짜를 비교할 때 더해질 달
  // const [tempMonth, setTempMonth] = useState(0);

  // function selectDay(idx: number) {
  //   // 날짜 선택시 날짜를 바꾸고 그 날짜의 정보를 가져옴
  //   // 저번, 이번, 다음 달에 따라 조정
  //   //
  //   // selectDay함수에서는 year,month,date를 calYear,calMonth를 사용하기 때문에 선택이 켈린더에 영향을 끼치지 않는다

  //   // 지난 달 선택
  //   if (idx < currentMonthFirst.getDay()) {
  //     if (calMonth == 0) {
  //       setYear(calYear - 1);
  //       setMonth(11);
  //     } else {
  //       setYear(calYear);
  //       setMonth(calMonth - 1);
  //     }
  //     setDate(
  //       previousMonthLast.getDate() - currentMonthFirst.getDay() + idx + 1
  //     );

  //     // 이번 달 선택
  //   } else if (idx < currentMonthFirst.getDay() + currentMonthLast.getDate()) {
  //     setYear(calYear);
  //     setMonth(calMonth);
  //     setDate(idx - currentMonthFirst.getDay() + 1);

  //     // 다음 달 선택
  //   } else {
  //     if (calMonth == 1) {
  //       setYear(calYear + 1);
  //       setMonth(0);
  //     } else {
  //       setYear(calYear);
  //       setMonth(calMonth + 1);
  //     }
  //     setDate(
  //       idx - currentMonthFirst.getDay() - currentMonthLast.getDate() + 1
  //     );
  //   }
  // }

  // // 객체를 생성해서 같은 날인지 판단
  // function isSameDate([
  //   calYear,
  //   calMonth,
  //   calDate,
  //   year,
  //   month,
  //   date,
  // ]: // tempMonth,
  // number[]) {
  //   const cal = new Date(calYear, calMonth, calDate);
  //   // const cal = new Date(calYear, calMonth - tempMonth, calDate);
  //   const select = new Date(year, month, date);

  //   if (
  //     cal.getFullYear() == select.getFullYear() &&
  //     cal.getMonth() == select.getMonth() &&
  //     cal.getDate() == select.getDate()
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // // 다크모드, 라이트모드에 따라 props로 넘겨주기
  // const isDark = useRecoilValue(ThemeState);

  return (
    <Cal.CalendarContainer>
      <nav>
        <div>{calYear}</div>
        <div>{monthes[calMonth]}</div>
        <div onClick={() => changeMonth(-1)}>
          <ArrowSvg className="arrow"/>
        </div>
        <div onClick={() => changeMonth(1)}>
          <ArrowSvg className="rightArrow arrow" />
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
            // year,month,date모두 같을 때 selected
            // tempYear/Month는 지난 달/ 다음달 선택 시를 고려
            isDark={isDark}
            selected={isSameDate([
              calYear,
              calMonth,
              idx - currentMonthFirst.getDay() + 1,
              year,
              month,
              date,
              // tempMonth,
            ])}
            onClick={() => selectDay(idx)}
          >
            {day}
          </Cal.Day>
        ))}
      </Cal.Calendar>
    </Cal.CalendarContainer>
  );
}
