import React from "react";
import Image from "next/image";
import * as M from "./Menu.style";
import Arrow from "../../../assets/image/common/arrow.svg";
import Calendar from "../../../assets/image/common/calendar.svg";
import Breakfast from "../../../assets/image/menu/breakfast.svg";
import lunch from "assets/image/menu/lunch.png";
import dinner from "assets/image/menu/dinner.png";

const Menu = () => {

  return (
    <M.Container>
      <M.DateBox>
        <Arrow id="left" className="svg" />
        <M.Date>0000 . 00 . 00 (일)</M.Date>
        <Calendar  id="calender" className="svg"/>
        <Arrow id="right" className="svg" />

      </M.DateBox>

      <M.MenuBox>
        <M.MealBox>
          <Breakfast />
          <p>
            쇠고기버섯죽, 어니언베이글/크림치즈, *샐러드바/드레싱, 나박물김치,
            오레오오즈+우유
          </p>
        </M.MealBox>

        <M.MealBox>
          <Image src={lunch} width={32} height={32} />
          <p>
            매콤로제해물파스타, *브리오슈싸이버거, 양송이크림스프/크루통,
            모듬야채피클, 감자튀김/케첩
          </p>
        </M.MealBox>

        <M.MealBox>
          <Image src={dinner} width={32} height={32} />
          <p>
            *발아현미밥, 쇠고기미역국, 햄감자채볶음, *바싹고추장불고기,
            깻잎김치, *딸기요거트케이크
          </p>
        </M.MealBox>
      </M.MenuBox>
    </M.Container>
  );
};

export default Menu;
