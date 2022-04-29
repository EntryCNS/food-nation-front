import { SetterOrUpdater } from "recoil";

const useSelectCalendarDate = ({
   idx,
   currentMonthFirst,
   previousMonthLast,
   currentMonthLast,
   setYear,
   setMonth,
   setDate,
   calYear,
   calMonth,
}:{
    idx:number,
    currentMonthFirst:Date,
    previousMonthLast:Date,
    currentMonthLast:Date,
    setYear:SetterOrUpdater<number>,
    setMonth:SetterOrUpdater<number>,
    setDate:SetterOrUpdater<number>,
    calYear:number,
    calMonth:number, 
}) => {
  // 날짜 선택시 날짜를 바꾸고 그 날짜의 정보를 가져옴
  // 저번, 이번, 다음 달에 따라 조정
  //
  // selectDay함수에서는 year,month,date를 calYear,calMonth를 사용하기 때문에 선택이 켈린더에 영향을 끼치지 않는다

  // 지난 달 선택
  if (idx < currentMonthFirst.getDay()) {
    if (calMonth == 0) {
      setYear(calYear - 1);
      setMonth(11);
    } else {
      setYear(calYear);
      setMonth(calMonth - 1);
    }
    setDate(previousMonthLast.getDate() - currentMonthFirst.getDay() + idx + 1);

    // 이번 달 선택
  } else if (idx < currentMonthFirst.getDay() + currentMonthLast.getDate()) {
    setYear(calYear);
    setMonth(calMonth);
    setDate(idx - currentMonthFirst.getDay() + 1);

    // 다음 달 선택
  } else {
    if (calMonth == 1) {
      setYear(calYear + 1);
      setMonth(0);
    } else {
      setYear(calYear);
      setMonth(calMonth + 1);
    }
    setDate(idx - currentMonthFirst.getDay() - currentMonthLast.getDate() + 1);
  }
};

export default useSelectCalendarDate;
