import { useEffect, useState } from "react";

import * as Cal from "./Calendar.style";

import LeftArrow from "../../assets/image/review/leftArrow.svg";
import RightArrow from "../../assets/image/review/rightArrow.svg";

import { useRecoilState, useRecoilValue } from "recoil";
import {calendarYear,calendarMonth,calendarDate,calendarDay} from "stores/review/calednar";

// 이번년이 아닌 다른 년에 같은 달일 때 선택되는 것
// 달력에서 날을 선택했을 때 급식 메뉴를 바꿔야하는데, 
// recoil과 useState를 두개 다 써서 캘린더상에서는 useState를 쓰고 밖에서는
// recoil을 쓰던가 해야됨

export default function Calendar() {
  let today = new Date();

  // const [year, setYear] = useState(today.getFullYear());
  // const [month, setMonth] = useState(today.getMonth() + 1);
  // const [date, setDate] = useState(today.getDate());
  // const [day, setDay] = useState(today.getDay());

  const [year,setYear] = useRecoilState(calendarYear)
  const [month,setMonth] = useRecoilState(calendarMonth)
  const [date,setDate] = useRecoilState(calendarDate)
  const [day,setDay] = useRecoilState(calendarDay)

  useEffect(() => {
    setYear(today.getFullYear());
    setMonth(today.getMonth()+1);
    setDate(today.getDate())
    setDay(today.getDay())

    requestData(today.getMonth(), today.getDate());
  }, []);

  function setting(){
    setYear(today.getFullYear());
    setMonth(today.getMonth()+1);
    setDate(today.getDate())
    setDay(today.getDay())
  }

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

  // 서버통신
  // 날짜를 선택했을 때만 recoil이 사용됨

  // const [globalDate, setGlobalDate] = useRecoilState(calendarDate);
  function requestData(month: number, idx: number) {
    console.log("서버통신", month, idx);
  }

  // recoil값에서 년/달 만 변경
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

      // 날짜 설정
      console.log(test2.getDate() - test.getDay() + idx + 1)
      setDate(test2.getDate() - test.getDay() + idx + 1)
      

    } else if (idx < test.getDay() + test1.getDate()) {
      // 이번달 | 이번달 요일 + idx + 1(idx가 0부터 시작)
      requestData(month, idx - test.getDay() + 1);

      setDate(idx-test.getDay()+1)
      setDay(idx % 7)

      // 레코일은 review페이지 내에서만 사용
      // 나는 model -> view 를 common에 넣고 사용
      // component화 했을 때props로 useState값들을 넘겨줘서 
      // recoil을 사용하지 않는다
      // 
      // 근데 그러면 나도 props로 useRecoil을 넘겨야함?
      // 그럴거면 useRecoil을 사용하는게 의미가 있을까?
      // 어떻게해야해!
      
    } else {
      // 이번달+1 | 이번달 요일 + 이번달 날짜 + idx + 1(idx가 0부터 시작)
      requestData(month + 1, idx - test.getDay() - test1.getDate() + 1);

    }

    // 눌렀을 때 recoil변화는 날짜/요일만 변경한다
    // 저번달이 눌렸다고 month를 변경하면 달력이 저번달로 변경된다

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
          <LeftArrow/>
        </div>
        <div onClick={nextMonth}>
          {/* <Image src={rightArrow} /> */}
          <RightArrow/>
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
