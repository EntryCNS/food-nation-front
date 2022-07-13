import React, { memo, useCallback, useState } from "react";
import { MenuContainer } from "components/applymenu/applyListStyle";
import { NextPage } from "next";

const categorys = ["한식", "일식", "중식", "양식", "디저트", "패스트푸드"];

// eslint-disable-next-line react/display-name
const MenuApply: NextPage = React.memo(() => {
  const [check, setCheck] = useState(8);
  const [inputs, setInputs] = useState({
    menuName: "",
    menuDes: "",
  });
  const { menuName, menuDes } = inputs;

  const onChange = useCallback(
    (e: any) => {
      const { value, name }: any = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
      // onReset()
    },
    [inputs]
  );

  // const onReset = useCallback(() => {
  //   setInputs({
  //     menuName: "",
  //     menuDes: "",
  //   });
  // }, []);

  return (
    <MenuContainer>
      <h2 className="menu-container-title">급식 신청</h2>
      <div className="nav-container">
        <nav className="kategory-container">
          {categorys.map((i, index) => (
            <div
              className={`kategory${check === index ? "-blue" : "-nomal"}`}
              key={index}
              onClick={() => {
                setCheck(index);
              }}
            >
              {i}
            </div>
          ))}
        </nav>
      </div>
      <input
        type="text"
        value={menuName}
        className="menu-names"
        onChange={onChange}
        name="menuName"
        placeholder="메뉴의 이름을 작성해 주세요 (15자 내)"
        maxLength={15}
      />
      <textarea
        className="menu-description"
        maxLength={50}
        placeholder="메뉴의 설명을 작성해 주세요 (50자 내)"
        value={menuDes}
        onChange={onChange}
        name="menuDes"
      ></textarea>
      <button className="apply-button">신청하기</button>
    </MenuContainer>
  );
});

export default MenuApply;
