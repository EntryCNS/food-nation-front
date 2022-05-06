import { useEffect,useState } from "react";
import { useRecoilState } from "recoil";
import {
  calendarYear,
  calendarMonth,
  calendarDate,
} from "stores/review/selectedDate";

const useWriteReview = () => {
    // 리뷰에 별
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);

  // 아침, 점심, 저녁
  const [selectedButton, setSelectedButton] = useState(-1);

  // 아침, 점심, 저녁 세팅
  function buttonClick(idx: number): void {
    setSelectedButton(idx);
  }

  const [review, setReview] = useState("");

  // 버튼의 기본 선택이 현제 시간에 따라 변경,
  useEffect(() => {
    const today = new Date();
    const time = today.getHours() * 100 + today.getMinutes();
    if (time > 710 && time < 1230) {
      console.log(0, "의 서버값");
      setSelectedButton(0);
    } else if (time > 1230 && time < 1920) {
      console.log(1, "의 서버값");
      setSelectedButton(1);
    } else {
      console.log(2, "의 서버값");
      setSelectedButton(2);
    }
  }, []);

  function paintStar(idx: number):void {
    console.log("별개수", idx + 1);
    let temp: number[] = [];
    for (let i = 0; i < idx + 1; i++) { temp.push(1); }
    for (let i = idx + 1; i < 5; i++) { temp.push(0); }
    console.log(temp);
    setStars(temp);
  }

  function onchange(value: string) {
    setReview(value);
  }

  // 리뷰형식(별점 + 글)이 맞지 않을 때
  const [reviewError, setReviewError] = useState(false);

  // 별이나 글이 없을 때 에러핸들링
  function onClick() {
    if (stars[0] == 0 || review.length < 1) {
      setReviewError(true);
    } else {
      setReviewError(false);

      console.log(year,month+1,date,"일",selectedButton,"리뷰는",stars.filter(e => 1 === e).length, review);
    }
  }

  // recoil에 저장되는 값은 "오늘" 또는 "선택된 날" 이다
  const [year, setYear] = useRecoilState(calendarYear);
  const [month, setMonth] = useRecoilState(calendarMonth);
  const [date, setDate] = useRecoilState(calendarDate);

  return ({
      year,
      setYear,
      month,
      setMonth,
      date,
      setDate,
      buttonClick,
      selectedButton,
      stars,
      paintStar,
      onchange,
      reviewError,
      onClick
  })
}

export default useWriteReview