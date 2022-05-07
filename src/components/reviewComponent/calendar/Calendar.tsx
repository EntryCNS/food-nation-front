import * as Cal from "./Calendar.style";

import ArrowSvg from "../../../assets/image/review/arrow.svg";

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
