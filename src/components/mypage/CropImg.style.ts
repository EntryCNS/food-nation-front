import styled from "styled-components";

export const CropContainer = styled.div`
  position: relative;
  margin-bottom: 240px;
  input[type="file"] {
    position: absolute;
    z-index: 333;
    background-color: ${(props) => props.theme.background};
    bottom: 10px;
    width: 60px;
    height: 60px;
    right: 0;
    border-radius: 50%;
    font-size: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  input[type="file"]::file-selector-button {
    border-radius: 25px;
    background-position: center;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    border: none;
    background-color: white;
    font-size: 0;
    background-image: buttonSVG;
  }

  #source {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .reactEasyCrop_CropArea {
    background: transparent;
  }

  .dontshow {
    display: none !important;
  }
`;

export const CropperContainer = styled.div`
  position: relative;
  z-index: 3;
  width: 290px;
  height: 450px;
  background: ${(props) => props.theme.background};
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .cropperDiv {
    position: relative;
    width: 290px;
    height: 300px;
  }

  .btnDiv {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    #confirm,
    #cancle {
      width: 64px;
      height: 30px;
      border-radius: 10px;
      border: 1px solid #000;
    }

    #confirm:hover,
    #cancle:hover {
      color: #1556f7;
      border: 1px solid #1556f7;
    }
  }
`;
