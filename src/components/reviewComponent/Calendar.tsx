import { useEffect, useState } from "react"

import * as Cal from "./Calendar.style"
import Image from "next/image"

import leftArrow from "assets/image/review/leftArrow.svg"
import rightArrow from "assets/image/review/rightArrow.svg"

export default function Calendar() {
    let today = new Date();
    const [year,setYear] = useState(today.getFullYear())
    const [month,setMonth] = useState(today.getMonth()+1)
    const [date,setDate] = useState(today.getDate())
    const [day,setDay] = useState(today.getDay())

    // console.log("year",year)
    // console.log("month",month)
    // console.log("date",date)
    // console.log("day",day)
  
    // 이번달 첫날의
    let test:Date = new Date(year,month-1,1)
    // console.log(test.getDate())
    // console.log(test.getDay())
    
    // 이번달 마지막날
    let test1:Date = new Date(year,month,0)
    // console.log(test1.getDate())
    // console.log(test1.getDay())
    
    // 지난달 마지막날
    let test2:Date = new Date(year,month-1,0)
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


    // 위는 달력, 아래는 추가

    // 그냥 날짜로 비교하면 지난/다음 달 날짜와 중복되어 선택될 수 있어서
    // checkNum과 map의 idx를 비교해준다
    const [checkNum,setCheckNum] = useState(test.getDay());
    // month가 바뀜에 따라 checkNum도 바꿔준다
    useEffect(()=>{
        // CheckNum도 함께 바꿔서 두 번 렌더링 된다
        setCheckNum(test.getDay());
    },[month])

    // console.log("checkNum",checkNum)

    function previousMonth():void{
        setMonth(month -1)
        if (month == 1){
            setYear(year-1)
            setMonth(12)
        }
    }  
    function nextMonth():void{
        setMonth(month +1)
        if (month == 12){
            setYear(year+1)
            setMonth(1)
        }
    }

    // 캘린더에 띄울 영어
    const monthes:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"]


    return(
        <Cal.CalendarContainer>
            <nav>
                <div>{year}</div>
                <div>{monthes[month-1]}</div>
                <div onClick={previousMonth}>
                    <Image src={leftArrow} />
                </div>
                <div onClick={nextMonth}>
                    <Image src={rightArrow}/>
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
                // idx는 0부터이기 때문에 checkNum - 1
                dayArray?.map((day,idx) => (
                  <Cal.Day 
                  key={idx}
                  visable={colorArray[idx]} 
                  selected={date == day && checkNum-1 < idx ? 1 : 0}>                    
                  {day}
                  </Cal.Day>
                ))
              }
            </Cal.Calendar>
        </Cal.CalendarContainer>
    )
}