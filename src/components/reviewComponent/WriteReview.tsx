import { useEffect, useState } from "react";

import * as W from "./WriteReview.style";
import * as C from "./Common.style";
import Image from "next/image";

import leftArrow from "assets/image/review/leftArrow.svg"
import rightArrow from "assets/image/review/rightArrow.svg"
import emptyStar from "assets/image/review/writeEmptyStar.svg"
import fullStar from "assets/image/review/writeFullStar.svg"

import Calendar from "components/reviewComponent/Calendar";

export default function WriteReview() {

  
  const [selectedButton,setSelectedButton] = useState(-1)
  const timeArray = ["아침","점심","저녁"]
  function buttonClick(idx:number):void{
    setSelectedButton(idx)
    console.log(selectedButton)
  }

  // 버튼의 기본 선택이 현제 시간에 따라 변경,
  // 계속 리렌더링이 고민
  useEffect(() => {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    if ((hours >= 7 && minutes >= 10) && (hours <= 12 && minutes < 30)){
      setSelectedButton(0)
    } else if ((hours >= 12 && minutes >= 30) && (hours <= 19 && minutes <20)){
      setSelectedButton(1)
    } else {
      setSelectedButton(2)
    }
  },[])

  // 별
  const [stars,setStars] = useState([0,0,0,0,0])

  return (
    <W.Container>
      <W.InnerContainer>

        <Calendar></Calendar>

        <C.ButtonsContainer>
          {/* <C.Button>아침</C.Button>
          <C.Button>점심</C.Button>
          <C.Button>저녁</C.Button> */}
          {
            timeArray.map((time,idx) => (
              <C.Button 
              key={idx} 
              onClick={() => buttonClick(idx)}
              selected={idx == selectedButton ? true : false}
              >{time}</C.Button>
            ))
          }
        </C.ButtonsContainer>
        <W.StarContainer>
            {/* <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/> */}
            {
              stars.map((star,idx) => (
                <Image src={emptyStar} key={idx} />
              ))
            }
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
