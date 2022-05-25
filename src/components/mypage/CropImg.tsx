import React, { useState, useCallback, useRef } from "react";
import Cropper, { Area } from "react-easy-crop";
import styled from "styled-components";
import Image from "next/image";
import profileImgG from "../../assets/image/profileImgG.png";
import btnImg from "../../assets/image/buttonImg.png";

const CropContainer = styled.div`
  width: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  .dontshow {
    display: none;
  }
  input[type="file"]::file-selector-button {
    /* padding: 0;
    margin: 0; */

    border-radius: 25px;
    background-position: center;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    border: none;
    background-color: white;
    font-size: 0;
    background-image: url(${btnImg});
  }
  input[type="file"] {
    z-index: 333;
    background-color: white;
    position: absolute;
    bottom: 30px;
    width: 60px;
    height: 60px;
    right: 100px;
    border-radius: 50%;
    font-size: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #source {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .imgDiv {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .reactEasyCrop_CropArea {
    background: transparent;
  }
`;

type ClassNameT = string | undefined | Boolean;

interface imgT {
  staticImg: StaticImageData | string;
  stringImg: string | undefined;
}

const CropImg = () => {
  const canvasRef = useRef();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgFile, setImgFile] = useState<imgT>({
    staticImg: profileImgG,
    stringImg: "",
  });

  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const [choseFile, setChoseFile] = useState<ClassNameT>(false);
  const [dontShowDefault, setDontShowDefault] = useState<ClassNameT>(false);
  const [dontShowCanvas, setDontShowCanvas] = useState<ClassNameT>(true);
  const [changeBtn, setChangeBtn] = useState<ClassNameT>(false);
  const [confirmBtn, setConfirmBtn] = useState<ClassNameT>(true);

  const chooseImg = (e: any) => {
    setDontShowDefault(true);
    setDontShowCanvas(true);
    setChoseFile(true);
    setChangeBtn(true);
    setConfirmBtn(false);
    setImgFile((prevState) => ({
      ...prevState,
      staticImg: URL.createObjectURL(e.target.files[0]),
      stringImg: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const saveFileImg = (e: any) => {
    e.target.files.length == 1 && chooseImg(e);
  };

  const onClickConfirm = () => {
    setChoseFile(false);
    setChangeBtn(false);
    setConfirmBtn(true);
    setDontShowCanvas(false);
  };

  const onClickCancle = () => {
    setChoseFile(false);
    setChangeBtn(false);
    setConfirmBtn(true);
    setDontShowCanvas(false);
  };

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log("excute");

      const ctx = canvasRef.current.getContext("2d");
      const image = document.getElementById("source1");
      canvasRef.current.setAttribute("width", croppedAreaPixels.width);
      canvasRef.current.setAttribute("height", croppedAreaPixels.height);
      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      image.onload = function () {
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );
      };
    },
    []
  );

  return (
    <CropContainer>
      <div id="imgDiv" className={dontShowDefault && "dontshow"}>
        <Image src={imgFile.staticImg} id="source1" width={200} height={200} />
      </div>
      <canvas
        className={dontShowCanvas && "dontshow"}
        id="source"
        ref={canvasRef}
        width={croppedAreaPixels.width}
        height={croppedAreaPixels.height}
      ></canvas>
      <input
        type="file"
        className={changeBtn && "dontshow"}
        onChange={saveFileImg}
        accept="image/*"
      />
      {choseFile && (
        <div style={{ position: "relative", width: 400, height: 400 }}>
          <Cropper
            image={imgFile.stringImg}
            crop={crop}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            cropShape={"round"}
            cropSize={{ width: 200, height: 200 }}
            showGrid={false}
            zoom={zoom}
            onZoomChange={setZoom}
          />
        </div>
      )}
      <button className={confirmBtn && "dontshow"} onClick={onClickConfirm}>
        확인
      </button>
      <button className={confirmBtn && "dontshow"} onClick={onClickCancle}>
        취소
      </button>
    </CropContainer>
  );
};

export default CropImg;
