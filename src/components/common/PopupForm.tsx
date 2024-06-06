import React, { SetStateAction } from "react";
import OverallPopupInput from "../../components/overallManagement/OverallPopupInput";
import OverallPopupBtn from "../../components/overallManagement/OverallPopupBtn";
import OverallAddress from "../../components/overallManagement/OverallAddress";
import OverallDate from "../../components/overallManagement/OverallDate";
import OverallTime from "../../components/overallManagement/OverallTime";
import ImgUpload from "../../components/common/ImgUpload";
import TitleText from "./TitleText";

type PopupFormType = {
  title: string;
  subTitle: string;
  guide: string;
  popupName: string;
  exceptions: string;
  detailAddress: string;
  siteAddress: string;
  intro: string;
  keyWord: string;
  possibleAge: string;
  category: string;
  showImages: string[];
  popupCategory: string;
  popupReservation: string;
  admissionFee: string;
  parking: string;
  price: string;
  setPrice: React.Dispatch<SetStateAction<string>>;
  setPopupName: React.Dispatch<SetStateAction<string>>;
  setExceptions: React.Dispatch<SetStateAction<string>>;
  setDetailAddress: React.Dispatch<SetStateAction<string>>;
  setSiteAddress: React.Dispatch<SetStateAction<string>>;
  setIntro: React.Dispatch<SetStateAction<string>>;
  setPossibleAge: React.Dispatch<SetStateAction<string>>;
  setKeyWord: React.Dispatch<SetStateAction<string>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
  setPopupCategory: React.Dispatch<SetStateAction<string>>;
  setShowImages: React.Dispatch<SetStateAction<string[]>>;
  setPopupReservation: React.Dispatch<SetStateAction<string>>;
  setAdmissionFee: React.Dispatch<SetStateAction<string>>;
  setParking: React.Dispatch<SetStateAction<string>>;
  handleBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleAddImages: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PopupForm = ({
  title,
  subTitle,
  guide,
  price,
  exceptions,
  detailAddress,
  siteAddress,
  intro,
  keyWord,
  possibleAge,
  popupName,
  showImages,
  category,
  popupCategory,
  popupReservation,
  admissionFee,
  parking,
  setPrice,
  setPopupName,
  setCategory,
  setShowImages,
  setPopupCategory,
  setExceptions,
  setPopupReservation,
  setAdmissionFee,
  setParking,
  handleBtnClick,
  handleAddImages,
  setDetailAddress,
  setSiteAddress,
  setIntro,
  setPossibleAge,
  setKeyWord,
}: PopupFormType) => {
  const popupCategoryArray = ["소비형", "전시형", "체험형"];
  const reservationArray = ["필수 아님", "예약 필수"];
  const admissionFeeArray = ["없음", "있음"];
  const parkingArray = ["주차불가", "주차가능"];

  return (
    <div>
      <TitleText mainTitle={title} subTitle={subTitle} className="mb-16" />
      <div className="mb-14 font-bold">{guide}</div>
      <OverallPopupInput
        title="팝업 이름"
        value={popupName}
        placeholder="팝업 이름"
        essential
        onChange={(e) => setPopupName(e.target.value)}
      />
      <OverallPopupInput
        title="카테고리"
        value={category}
        placeholder="카테고리"
        essential
        onChange={(e) => setCategory(e.target.value)}
      />
      <OverallPopupBtn
        title="팝업 유형"
        value={popupCategory}
        onClick={handleBtnClick}
        btnArray={popupCategoryArray}
      />
      <OverallDate />
      <OverallTime />
      <OverallPopupInput
        title="운영 시간 외 예외사항"
        value={exceptions}
        placeholder="예외사항"
        essential={false}
        onChange={(e) => setExceptions(e.target.value)}
      />
      <OverallAddress />
      <OverallPopupInput
        title="상세 주소"
        value={detailAddress}
        placeholder="상세 주소"
        essential
        onChange={(e) => setDetailAddress(e.target.value)}
      />
      <OverallPopupInput
        title="공식 사이트 주소"
        value={siteAddress}
        placeholder="site@site.com"
        essential
        onChange={(e) => setSiteAddress(e.target.value)}
      />
      <ImgUpload
        title="관련 사진"
        value={showImages}
        setValue={setShowImages}
        onChange={handleAddImages}
        limit="5"
      />
      <OverallPopupInput
        title="소개"
        value={intro}
        placeholder="소개"
        essential
        onChange={(e) => setIntro(e.target.value)}
      />
      <OverallPopupBtn
        title="예약 필수 여부"
        onClick={handleBtnClick}
        value={popupReservation}
        btnArray={reservationArray}
      />
      <OverallPopupInput
        title="이용 가능 연령"
        value={possibleAge}
        placeholder="EX)전연령"
        essential
        onChange={(e) => setPossibleAge(e.target.value)}
      />
      <OverallPopupBtn
        title="입장료 유무"
        onClick={handleBtnClick}
        value={admissionFee}
        btnArray={admissionFeeArray}
      />
      <OverallPopupInput
        title="입장료"
        value={price}
        placeholder="입장료"
        essential={false}
        onChange={(e) => setPrice(e.target.value)}
      />
      <OverallPopupBtn
        title="주차 가능 여부"
        onClick={handleBtnClick}
        value={parking}
        btnArray={parkingArray}
      />
      <OverallPopupInput
        title="키워드 등록"
        value={keyWord}
        placeholder="키워드"
        essential
        subTitle="키워드는 띄어쓰기 없이 /로 구분해서 작성해 주세요."
        onChange={(e) => setKeyWord(e.target.value)}
      />
    </div>
  );
};

export default PopupForm;
