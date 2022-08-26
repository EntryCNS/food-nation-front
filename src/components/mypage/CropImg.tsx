import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ClassAttributes,
} from "react";
import Cropper from "react-easy-crop";
import * as C from "./CropImg.style";
import Image from "next/image";
import ProfileImg from "../../assets/image/mypage/CropSample.png";
import buttonSVG from "../../assets/image/mypage/buttonSVG";

type ClassNameT = string | undefined | Boolean;

interface imgT {
  staticImg: StaticImageData | string;
  prevStaticImg: StaticImageData | string;
  stringImg: string | undefined;
  prevStringImg: string | undefined;
}

interface cropArea {
  width: number;
  height: number;
  x: number;
  y: number;
}

const CropImg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgFile, setImgFile] = useState<imgT>({
    staticImg: ProfileImg,
    prevStringImg: "",
    stringImg: "",
    prevStaticImg: ProfileImg,
  });

  const defaultArea: cropArea = { height: 0, width: 0, x: 0, y: 0 };

  const [cropAreaInfo, setCropAreaInfo] = useState({
    stateCroppedArea: defaultArea,
    stateCroppedAreaPixels: defaultArea,
    prevCroppedArea: defaultArea,
    prevCroppedAreaPixels: defaultArea,
  });

  const [choseFile, setChoseFile] = useState<ClassNameT>("");
  const [dontShowDefault, setDontShowDefault] = useState<ClassNameT>("");
  const [dontShowCanvas, setDontShowCanvas] = useState<ClassNameT>(true);
  const [changeBtn, setChangeBtn] = useState<ClassNameT>("");
  const [confirmBtn, setConfirmBtn] = useState<ClassNameT>(true);

  //파일을 선택 했을 때만 이미지 크롭으로 넘어가게 하는 함수
  const uploadFile = (e: any) => {
    e.target.files.length == 1 && chooseImg(e);
  };

  const chooseImg = (e: any) => {
    setDontShowDefault(true);
    setDontShowCanvas(true);
    setChoseFile(true);
    setChangeBtn(true);
    setConfirmBtn("");

    setImgFile((prevState) => ({
      ...prevState,
      prevStaticImg: prevState.staticImg,
      prevStringImg: prevState.stringImg,
      staticImg: URL.createObjectURL(e.target.files[0]),
      stringImg: URL.createObjectURL(e.target.files[0]),
    }));
  };

  useEffect(() => {
    console.log("staticImg :", imgFile.staticImg);
    console.log("prevStaticImg :", imgFile.prevStaticImg);
    console.log("stringImg :", imgFile.stringImg);
    console.log("prevStringImg :", imgFile.prevStringImg);
  }, [imgFile]);

  //사진 자르는 부분 display none 하고 자른 사진 보여주는 함수 : 사진 자르고 확인 눌렀을때 실행
  const onClickConfirm = () => {
    setChoseFile("");
    setChangeBtn("");
    setConfirmBtn(true);
    setDontShowCanvas("");
  };

  const onClickCancel = () => {
    console.log("취소 눌렀을때");

    setImgFile((prevState) => ({
      ...prevState,
      staticImg: prevState.prevStaticImg,
      stringImg: prevState.prevStringImg,
    }));
    setChoseFile("");
    setChangeBtn("");
    setConfirmBtn(true);
    setDontShowCanvas("");
    cavasDraw(cropAreaInfo.stateCroppedAreaPixels);
  };

  const onCropComplete = useCallback(
    (croppedArea: cropArea, croppedAreaPixels: cropArea) => {
      console.log("excute");
      setCropAreaInfo((prevState) => ({
        ...prevState,
        stateCroppedArea: {
          height: croppedArea.height,
          width: croppedArea.width,
          x: croppedArea.x,
          y: croppedArea.y,
        },
        stateCroppedAreaPixels: {
          height: croppedAreaPixels.height,
          width: croppedAreaPixels.width,
          x: croppedAreaPixels.x,
          y: croppedAreaPixels.y,
        },
      }));
      cavasDraw(croppedAreaPixels);
    },
    []
  );

  const cavasDraw = (croppedAreaPixels: cropArea) => {
    const ctx = canvasRef?.current?.getContext("2d");
    const image = document.getElementById("source1");
    canvasRef?.current?.setAttribute("width", String(croppedAreaPixels?.width));
    canvasRef?.current?.setAttribute(
      "height",
      String(croppedAreaPixels?.height)
    );

    image!.onload = function () {
      ctx?.drawImage(
        image as CanvasImageSource,
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

    ctx?.drawImage(
      image as CanvasImageSource,
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

  return (
    <C.CropContainer>
      <div id="imgDiv" className={dontShowDefault && "dontshow"}>
        <Image src={imgFile.staticImg} id="source1" width={200} height={200} />
      </div>
      <canvas
        className={dontShowCanvas && "dontshow"}
        id="source"
        ref={canvasRef}
        width={cropAreaInfo.stateCroppedAreaPixels.width}
        height={cropAreaInfo.stateCroppedAreaPixels.height}
      ></canvas>
      <input
        type="file"
        className={changeBtn && "dontshow"}
        onChange={uploadFile}
        accept="image/*"
      />

      {choseFile && (
        <C.CropperContainer>
          <div className="cropperDiv">
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
          <div className="btnDiv">
            <button
              className={confirmBtn && "dontshow"}
              onClick={onClickConfirm}
              id="confirm"
            >
              확인
            </button>
            <button
              className={confirmBtn && "dontshow"}
              onClick={onClickCancel}
              id="cancle"
            >
              취소
            </button>
          </div>
        </C.CropperContainer>
      )}
    </C.CropContainer>
  );
};
export default CropImg;
