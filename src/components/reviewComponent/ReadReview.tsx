import Image from "next/image";

import { useState,useEffect } from "react";
import * as R from "./ReadReview.style";
import * as C from "./Common.style"

import leftArrow from "assets/image/review/leftArrow.svg";
import rightArrow from "assets/image/review/rightArrow.svg";
import emptyStar from "assets/image/review/readEmptyStar.svg";
import fullStar from "assets/image/review/readFullStar.svg";

export default function ReadReview() {
  interface ReviewType {
    id: number;
    stars:number;
    comment:string;
  }

  // 아침점심저녁 중 선택된 버튼
  const [selectedButton, setSelectedButton] = useState(-1);
  // 버튼 map출력 배열
  const timeArray = ["아침", "점심", "저녁"];
  // 아침점심저녁 중 선택된 값에 따른 서버요청
  function buttonClick(idx: number): void {
    console.log(idx,"의 서버값")
    setSelectedButton(idx);
  }

  // 버튼의 초기값이 현제 시간에 따라 변경,
  // (각각의 급식시간이 지난 후)
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      console.log(0,"의 서버값")
      setSelectedButton(0);
    } else if (time > 1230 && time < 1820) {
      console.log(1,"의 서버값")
      setSelectedButton(1);
    } else {
      console.log(2,"의 서버값")
      setSelectedButton(2);
    }
  }, []);

  // 더미데이터
  const [reviews, setReviews] = useState([
    {
      id: 1,
      stars: 1,
      comment: "맛있어요",
    },
    {
      id: 2,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 3,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 4,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 5,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 6,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 7,
      stars: 5,
      comment: "맛있어요",
    },
    {
      id: 8,
      stars: 5,
      comment: "맛있어요",
    },
  ]);

  function makeStarArray(starNum:number){
    let starArray = []
    for(let i = 0;i<starNum;i++){
      starArray.push(true)
    }
    for(let i = 0;i<5-starNum;i++){
      starArray.push(false)
    }
    return starArray
  }

  return (
    <R.Container>
      <R.InnerContainer>
        <R.NavContainer>
          <nav>
            <div>
              <Image src={leftArrow} />
            </div>
            <div>0000</div>
            <div>.</div>
            <div>00</div>
            <div>.</div>
            <div>00</div>
            <div>(일)</div>
            <div>
              <Image src={rightArrow} />
            </div>
          </nav>
          <C.ButtonsContainer>
          {/* <C.Button>아침</C.Button>
          <C.Button>점심</C.Button>
          <C.Button>저녁</C.Button> */}
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
        </R.NavContainer>
        <R.Temp />
        {reviews?.map((review: ReviewType) => (
          <R.CommentContainer key={review.id}>
            <R.StarContainer>
              {/* <Image src={fullStar} />
              <Image src={fullStar} />
              <Image src={fullStar} />
              <Image src={fullStar} />
              <Image src={emptyStar} /> */}
              {
                makeStarArray(review.stars).map((star,idx) => (
                  <Image key={idx} src={star?fullStar:emptyStar}/>
                ))
              }
            </R.StarContainer>
            <R.Comment>
              {
                review.comment
              }
            </R.Comment>
          </R.CommentContainer>
        ))}
      </R.InnerContainer>
    </R.Container>
  );
}


// // import * as C from "";


// export default function Button() {
//   const [selectedButton, setSelectedButton] = useState(-1);
//   const timeArray = ["아침", "점심", "저녁"];
//   function buttonClick(idx: number): void {
//     setSelectedButton(idx);
//     console.log(selectedButton);
//   }

//   // 버튼의 기본 선택이 현제 시간에 따라 변경,
//   // 계속 리렌더링이 고민
//   useEffect(() => {
//     const today = new Date();
//     const time = today.getHours() * 100 + today.getMinutes();
//     console.log(time);
//     if (time > 710 && time < 1230) {
//       setSelectedButton(0);
//     } else if (time > 1230 && time < 1920) {
//       setSelectedButton(1);
//     } else {
//       setSelectedButton(2);
//     }
//   }, []);
//   return (
//     <C.ButtonsContainer>
//       {/* <C.Button>아침</C.Button>
//           <C.Button>점심</C.Button>
//           <C.Button>저녁</C.Button> */}
//       {timeArray.map((time, idx) => (
//         <C.Button
//           key={idx}
//           onClick={() => buttonClick(idx)}
//           selected={idx == selectedButton ? true : false}
//         >
//           {time}
//         </C.Button>
//       ))}
//     </C.ButtonsContainer>
//   );
// }
