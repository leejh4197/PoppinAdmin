import React, { useState } from "react";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";
import PopupForm from "../../components/common/PopupForm";

const PopUpRegister = () => {
  // 팝업이름/카테고리/예외사항/상세주소/사이트주소/소개/가능연령/입장료/키워드
  // 팝업이름
  const [popupName, setPopupName] = useState("");
  // 카테고리
  const [category, setCategory] = useState("");
  // 예외사항
  const [exceptions, setExceptions] = useState("");
  // 상세주소
  const [detailAddress, setDetailAddress] = useState("");
  // 사이트주소
  const [siteAddress, setSiteAddress] = useState("");
  // 소개
  const [intro, setIntro] = useState("");
  // 가능연령
  const [possibleAge, setPossibleAge] = useState("");
  // 입장료
  const [price, setPrice] = useState("");
  // 키워드
  const [keyWord, setKeyWord] = useState("");
  const [admissionFee, setAdmissionFee] = useState("");
  const [showImages, setShowImages] = useState<string[]>([]);
  const [popupCategory, setPopupCategory] = useState("");
  const [popupReservation, setPopupReservation] = useState("");
  const [parking, setParking] = useState("");

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget;
    if (name === "팝업 유형") {
      setPopupCategory(value);
    } else if (name === "예약 필수 여부") {
      setPopupReservation(value);
    } else if (name === "입장료 유무") {
      setAdmissionFee(value);
    } else if (name === "주차 가능 여부") {
      setParking(value);
    }
  };

  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    if (imageLists) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }

      if (imageUrlLists.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }

      setShowImages(imageUrlLists);
    }
  };

  return (
    <div className="flexCenter w-4/5">
      <PopupForm
        title="팝업 정보 관리"
        subTitle="팝핀에 등록할 정확한 정보를 입력해주세요."
        guide="팝팝에 등록하기 위한 정보가 충분한지 확인해주세요!"
        popupName={popupName}
        category={category}
        exceptions={exceptions}
        detailAddress={detailAddress}
        siteAddress={siteAddress}
        intro={intro}
        admissionFee={admissionFee}
        possibleAge={possibleAge}
        keyWord={keyWord}
        showImages={showImages}
        popupCategory={popupCategory}
        popupReservation={popupReservation}
        parking={parking}
        price={price}
        setPrice={setPrice}
        setDetailAddress={setDetailAddress}
        setExceptions={setExceptions}
        setKeyWord={setKeyWord}
        setPossibleAge={setPossibleAge}
        setSiteAddress={setSiteAddress}
        setIntro={setIntro}
        setPopupName={setPopupName}
        setCategory={setCategory}
        setShowImages={setShowImages}
        setPopupCategory={setPopupCategory}
        setPopupReservation={setPopupReservation}
        setAdmissionFee={setAdmissionFee}
        setParking={setParking}
        handleBtnClick={handleBtnClick}
        handleAddImages={handleAddImages}
      />
      <div className="flex justify-end mb-16">
        <OverallAddEditBtn content="등록하기" />
        <OverallAddEditBtn content="등록하기" />
      </div>
    </div>
  );
};

export default PopUpRegister;
