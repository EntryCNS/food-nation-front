import { useState,useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  calendarYear,
  calendarMonth,
  calendarDate,
} from "stores/review/selectedDate";
import { recoilCalYear, recoilCalMonth } from "stores/calendar/calLocation";

import { StarType } from "interface/review/readReview.type";

const useReadReview = () => {

  const [year, setYear] = useRecoilState(calendarYear);
  const [month, setMonth] = useRecoilState(calendarMonth);
  const [date, setDate] = useRecoilState(calendarDate);

  // readReview에는 요일이 있다
  const [day, setDay] = useState(0);

  // 아침점심저녁 중 선택된 버튼
  const [selectedButton, setSelectedButton] = useState(-1);

  // 아침점심저녁 중 선택된 값에 따른 서버요청
  function buttonClick(idx: number): void {
    requestData(idx);
    setSelectedButton(idx);
  }
  function requestData(time: number) {
    console.log(month + 1, "월", date, "일", time, "리뷰가져오기");
  }

  // 버튼의 초기값이 현제 시간에 따라 변경,
  // (각각의 급식시간이 지난 후)
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      setSelectedButton(0);
    } else if (time > 1230 && time < 1820) {
      setSelectedButton(1);
    } else {
      setSelectedButton(2);
    }
  }, []);

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

  function makeStarArray(starNum:number):StarType[]{
    let starArray:StarType[] = []
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
  
  return ({
      changeDate,
      year,
      month,
      date,
      buttonClick,
      selectedButton,
      makeStarArray,
      day
  })
};

export default useReadReview;
