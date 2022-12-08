import React, { useEffect } from "react";
import Image from "next/image";
import * as M from "./Menu.style";
import Arrow from "../../../assets/image/common/arrow.svg";
import Calendar from "../../../assets/image/common/calendar.svg";
import Breakfast from "../../../assets/image/menu/breakfast.svg";
import lunch from "assets/image/menu/lunch.png";
import dinner from "assets/image/menu/dinner.png";
import useMenu from "hooks/useMenu";

type props = {
  isCalander?: boolean;
};

const Menu = ({ isCalander }: props) => {
  const { planner, changeDate, selectDate, year, month, date } = useMenu();
  const today = new Date(year, month, date);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const mealPlanner = ["조식", "중식", "석식"];
  const imgArray = ["", lunch, dinner];

  return (
    <M.Container>
      <M.DateBox>
        <Arrow
          id="left"
          className="svg"
          onClick={() => {
            changeDate(-1);
          }}
        />

        <M.Date>
          {`${year}.${month + 1}.${date} (${day[today.getDay()]})`}
        </M.Date>

        {/* 달력 부분*/}
        {isCalander && (
          <span className="datepicker-toggle">
            <Calendar />
            <input
              type="date"
              className="datepicker-input"
              onChange={(e) => selectDate(e.target.value)}
            />
          </span>
        )}

        <Arrow
          id="right"
          className="svg"
          onClick={() => {
            changeDate(1);
          }}
        />
      </M.DateBox>

      <M.MenuBox>
        {mealPlanner.map((item, idx) => {
          return (
            <M.MealBox key={idx}>
              {idx === 0 ? (
                <Breakfast />
              ) : (
                <Image src={imgArray[idx]} width={32} height={32} alt="img" />
              )}
              <p>
                {planner[idx] != undefined
                  ? planner[idx].menuList.join(", ")
                  : `${item}이 없습니다`}
              </p>
            </M.MealBox>
          );
        })}
      </M.MenuBox>
    </M.Container>
  );
};

export default Menu;
