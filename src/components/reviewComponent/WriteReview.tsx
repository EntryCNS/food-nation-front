import { useEffect, useState } from "react";

import * as C from "./Common.style"
import * as W from "./WriteReview.style";

// import leftArrow from "../../assets/image/review/leftArrow.svg";
// import rightArrow from "../../assets/image/review/rightArrow.svg";
// import emptyStar from "../../assets/image/review/writeEmptyStar.svg";
// import fullStar from "../../assets/image/review/writeFullStar.svg";

import Calendar from "components/reviewComponent/Calendar";


export default function WriteReview() {
  // 별
  const [stars,setStars] = useState([0,0,0,0,0])
  const [starNum,setStarNum] = useState(-1)
  
  const [selectedButton, setSelectedButton] = useState(-1);
  const timeArray = ["아침", "점심", "저녁"];
  function buttonClick(idx: number): void {
    console.log(idx,"의 서버값")
    setSelectedButton(idx);
  }

  const [review,setReview] = useState("")

  // 버튼의 기본 선택이 현제 시간에 따라 변경,
  // 계속 리렌더링이 고민
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      setSelectedButton(0);
    } else if (time > 1230 && time < 1920) {
      setSelectedButton(1);
    } else {
      setSelectedButton(2);
    }
  }, []);

  function paintStar(idx:number){
    console.log('별개수',idx+1)
    let temp:number[] = []
    for (let i=0;i<idx+1;i++){
      temp.push(1)
    }
    for (let i=idx+1;i<5;i++){
      temp.push(0)
    }
    setStars(temp)
    setStarNum(idx+1)
  }

  function onchange(value:string){
    setReview(value)
  }

  // 리뷰형식(별점 + 글)이 맞지 않을 때
  const [reviewError,setReviewError] = useState(false)

  // 별이나 글이 없을 때 에러
  function onClick(){
    if (stars[0] == 0 || review.length < 1){
      setReviewError(true)
    } else {
      setReviewError(false)
      console.log("리뷰작성됨")
    }
  }

  return (
    <W.Container>
      <W.InnerContainer>
        <Calendar></Calendar>

        <C.ButtonsContainer>
          {timeArray.map((time, idx) => (
            <C.Button
              key={idx}
              onClick={() => buttonClick(idx)}
              selected={idx == selectedButton ? true : false}
            >
              {time}
            </C.Button>
          ))}
        </C.ButtonsContainer>

        <W.StarContainer>
          {/* <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/>
            <Image src={emptyStar}/> */}
          {/* {stars.map((star, idx) => (
            <Image src={star ? fullStar : emptyStar} key={idx} onClick={()=>paintStar(idx)}/>
          ))} */}
        </W.StarContainer>
        <W.CommentInputContainer>
          <W.CommentInput 
          onChange={(e) => onchange(e.target.value)} 
          placeholder="급식에 대해 말해주세요" />
        </W.CommentInputContainer>
        {
          reviewError && <W.ReviewError>별점과 글 모두 작성해주세요</W.ReviewError>
        }
        <W.Button onClick={onClick}>리뷰쓰기</W.Button>
      </W.InnerContainer>
    </W.Container>
  );
}
