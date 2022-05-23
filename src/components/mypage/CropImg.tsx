import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import styled from "styled-components";

const CropContainer = styled.div`
  .dontshow {
    display: none;
  }
`;

type ClassNameT = string | undefined | Boolean;

const CropImg = () => {
  const canvas = useRef();
  const defaultImg = "../../assets/image/profileImage.png";
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgFile, setImgFile] = useState<string | undefined>(defaultImg);
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

  const saveFileImg = (e: any) => {
    setDontShowDefault(true);
    setImgFile(URL.createObjectURL(e.target.files[0]));
    setDontShowCanvas(true);
    setChoseFile(true);
    setChangeBtn(true);
    setConfirmBtn(false);
  };

  const onClickConfirm = () => {
    setChoseFile(false);
    setChangeBtn(false);
    setConfirmBtn(true);
    setDontShowCanvas(false);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(canvas);
    const ctx = canvas.current.getContext("2d");
    const image = document.getElementById("source");

    canvas.current.setAttribute("width", croppedAreaPixels.width);
    canvas.current.setAttribute("height", croppedAreaPixels.height);
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
  }, []);

  return (
    <CropContainer>
      <img
        id="source"
        src={imgFile}
        className={dontShowDefault && "dontshow"}
      />
      <canvas
        className={dontShowCanvas && "dontshow"}
        id="source"
        ref={canvas}
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
            image={imgFile}
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
    </CropContainer>
  );
};

export default CropImg;
