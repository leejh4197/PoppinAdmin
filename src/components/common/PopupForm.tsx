import React, { SetStateAction, useState } from "react";
import OverallPopupInput from "../../components/overallManagement/OverallPopupInput";
import OverallPopupBtn from "../../components/overallManagement/OverallPopupBtn";
import OverallAddress from "../../components/overallManagement/OverallAddress";
import OverallDate from "../../components/overallManagement/OverallDate";
import OverallTime from "../../components/overallManagement/OverallTime";
import ImgUpload from "../../components/common/ImgUpload";
import TitleText from "./TitleText";
import { popupCategoryArray } from "../../constants/formBtnDummy";

type CategoryType = {
  name: string;
  value: string;
};
type PopupFormType = {
  reportSort?: boolean;
  title: string;
  subTitle: string;
  guide: string;
  popupName: string;
  exceptions: string | null;
  detailAddress: string | null;
  siteAddress: string;
  intro: string;
  keyWord: string;
  possibleAge: { name: string; value: string };
  category: { name: string; value: string };
  showImages: string[];
  images: File[];
  popupCategory: string;
  popupReservation: string;
  admissionFee: string;
  parking: string;
  price: string;
  address: string;
  startTime: Date | null;
  endTime: Date | null;
  startDate: Date | null;
  endDate: Date | null;
  managerEmail?: string;
  companyName?: string;
  setManagerEmail?: React.Dispatch<SetStateAction<string>>;
  setCompanyName?: React.Dispatch<SetStateAction<string>>;
  setEndDate: React.Dispatch<SetStateAction<Date | null>>;
  setStartDate: React.Dispatch<SetStateAction<Date | null>>;
  setEndTime: React.Dispatch<SetStateAction<Date | null>>;
  setStartTime: React.Dispatch<SetStateAction<Date | null>>;
  setPrice: React.Dispatch<SetStateAction<string>>;
  setAddress: React.Dispatch<SetStateAction<string>>;
  setPopupName: React.Dispatch<SetStateAction<string>>;
  setExceptions: React.Dispatch<SetStateAction<string | null>>;
  setDetailAddress: React.Dispatch<SetStateAction<string | null>>;
  setSiteAddress: React.Dispatch<SetStateAction<string>>;
  setIntro: React.Dispatch<SetStateAction<string>>;
  setPossibleAge: React.Dispatch<SetStateAction<CategoryType>>;
  setKeyWord: React.Dispatch<SetStateAction<string>>;
  setCategory: React.Dispatch<SetStateAction<CategoryType>>;
  setPopupCategory: React.Dispatch<SetStateAction<string>>;
  setShowImages: React.Dispatch<SetStateAction<string[]>>;
  setImages: React.Dispatch<SetStateAction<File[]>>;
  setPopupReservation: React.Dispatch<SetStateAction<string>>;
  setAdmissionFee: React.Dispatch<SetStateAction<string>>;
  setParking: React.Dispatch<SetStateAction<string>>;
  handleBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleAddImages: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PopupForm = ({
  reportSort,
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
  address,
  startTime,
  endTime,
  startDate,
  endDate,
  images,
  companyName,
  managerEmail,
  setCompanyName,
  setManagerEmail,
  setImages,
  setEndTime,
  setStartTime,
  setEndDate,
  setStartDate,
  setAddress,
  setPrice,
  setPopupName,
  setCategory,
  setShowImages,
  setExceptions,
  handleBtnClick,
  handleAddImages,
  setDetailAddress,
  setSiteAddress,
  setIntro,
  setPossibleAge,
  setKeyWord,
}: PopupFormType) => {
  const reservationArray = ["필수 아님", "예약 필수"];
  const admissionFeeArray = ["없음", "있음"];
  const parkingArray = ["주차불가", "주차가능"];
  const [cateActive, setCateActive] = useState(false);
  const [ageActive, setAgeActive] = useState(false);

  const handleCateClick = () => {
    setCateActive(!cateActive);
  };
  const handleAgeClick = () => {
    setAgeActive(!ageActive);
  };

  return (
    <div>
      <TitleText mainTitle={title} subTitle={subTitle} className="mb-16" />
      <div className="mb-14 font-bold">{guide}</div>
      {reportSort && (
        <>
          <OverallPopupInput
            title="소속 (업체명)"
            value={companyName}
            placeholder="소속명"
            essential
            onChange={(e) => setCompanyName?.(e.target.value)}
          />
          <OverallPopupInput
            title="담당자 이메일"
            value={managerEmail}
            placeholder="poppin@gmail.com"
            essential
            onChange={(e) => setManagerEmail?.(e.target.value)}
          />
        </>
      )}
      <OverallPopupInput
        title="팝업 이름"
        value={popupName}
        placeholder="팝업 이름"
        essential
        onChange={(e) => setPopupName(e.target.value)}
      />
      <OverallPopupInput
        title="카테고리"
        value={category.name}
        placeholder="카테고리"
        essential
        onClick={handleCateClick}
        cateActive={cateActive}
        setCateActive={setCateActive}
        setCategory={setCategory}
        category={category}
      />
      <OverallPopupBtn
        title="팝업 유형"
        value={popupCategory}
        onClick={handleBtnClick}
        boolBtnArray={popupCategoryArray}
      />
      <OverallDate
        endDate={endDate}
        startDate={startDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />
      <OverallTime
        endTime={endTime}
        startTime={startTime}
        setEndTime={setEndTime}
        setStartTime={setStartTime}
      />
      <OverallPopupInput
        title="운영 시간 외 예외사항"
        value={exceptions}
        placeholder="예외사항"
        essential={false}
        onChange={(e) => setExceptions(e.target.value)}
      />
      <OverallAddress address={address} setAddress={setAddress} />
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
        img={images}
        setImg={setImages}
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
        value={possibleAge.name}
        placeholder="EX)전연령"
        essential
        onClick={handleAgeClick}
        ageActive={ageActive}
        setAgeActive={setAgeActive}
        setPossibleAge={setPossibleAge}
        possibleAge={possibleAge}
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
