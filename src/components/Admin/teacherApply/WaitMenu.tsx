import React, { useCallback, useState } from "react";
import data from "./data.json";
import {
  ApplyContainer,
  Container,
} from "components/Admin/teacherApply/WaitMenuStyle";
import Calendar from "components/Admin/teacherApply/Calendar";

const WaitMenu = () => {
  const [visiable, setVisiable] = useState(false);
  const [visiable2, setVisiable2] = useState(null);
  const closed = useCallback(() => {
    setVisiable(!visiable);
  }, [visiable]);
  return (
    <Container>
      <h2 className="title">대기 목록</h2>
      <div className="innerContainer">
        {data.map((i, j) => (
          <div className="eachContainer">
            <div className="menuTitle">{i.name}</div>
            <p className="menuDes">{i.des}</p>
            <div className="navContainer">
              <nav>
                {i.kategory.map((j: {}, index: number) => (
                  <p key={index}>#{j}&nbsp;</p>
                ))}
              </nav>
              <div>
                <span className="heart">{i.heart}</span>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.36726e-08 3.00036C-6.76401e-05 2.6017 0.0785375 2.20702 0.231222 1.83939C0.383906 1.47176 0.607606 1.13856 0.889247 0.859264C1.17089 0.579964 1.50482 0.360167 1.87153 0.21272C2.23824 0.0652724 2.63037 -0.00686821 3.025 0.000514459C3.49193 -0.00199013 3.95405 0.0957704 4.38074 0.287317C4.80744 0.478863 5.18895 0.759821 5.5 1.11157C5.81105 0.759821 6.19256 0.478863 6.61926 0.287317C7.04595 0.0957704 7.50807 -0.00199013 7.975 0.000514459C8.36963 -0.00686821 8.76176 0.0652724 9.12847 0.21272C9.49518 0.360167 9.82911 0.579964 10.1108 0.859264C10.3924 1.13856 10.6161 1.47176 10.7688 1.83939C10.9215 2.20702 11.0001 2.6017 11 3.00036C11 5.97576 7.49155 8.22231 5.5 10C3.51285 8.20731 4.36726e-08 5.97798 4.36726e-08 3.00036Z"
                    fill="#FE8885"
                  />
                </svg>
              </div>
            </div>
            <div className="apply">
              <button className="closed" onClick={closed}>
                거절
              </button>
              <button className="approve" onClick={() => setVisiable2(j)}>
                수락
              </button>
            </div>
          </div>
        ))}
      </div>
      {visiable2 !== null ? (
        <div className="not active">
          <ApplyContainer>
            <div className="menuCheck">{data[visiable2].name}</div>
            <Calendar />
            <button onClick={() => setVisiable2(null)}>수락하기</button>
          </ApplyContainer>
        </div>
      ) : (
        <div className="not"></div>
      )}
      {visiable ? (
        <div className="not active">
          <div className="alert">
            <label>
              <p>거절되었습니다.</p>
              <button onClick={closed}>확인</button>
            </label>
          </div>
        </div>
      ) : (
        <div className="not"></div>
      )}
    </Container>
  );
};

export default WaitMenu;
