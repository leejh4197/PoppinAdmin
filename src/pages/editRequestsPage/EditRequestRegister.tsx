import React, { useEffect, useState } from "react";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";
import PopupForm from "../../components/common/PopupForm";
import usePostOverAllPopupCreate from "../../queries/overAllpopupManager/usePostOverAllPopupCreate";
import useLocation from "../../hook/useLocation";
import {
  generatePopupObject,
  generateTasteObject,
} from "../../components/common/FormUtil";

const EditRequestRegister = () => {
  // 팝업이름
  const [popupName, setPopupName] = useState("");
  // 카테고리
  const [category, setCategory] = useState<{ name: string; value: string }>({
    name: "",
    value: "",
  });
  // 가능연령
  const [possibleAge, setPossibleAge] = useState({
    name: "",
    value: "",
  });
  // 예외사항
  const [exceptions, setExceptions] = useState("");
  // 상세주소
  const [detailAddress, setDetailAddress] = useState("");
  // 주소
  const [address, setAddress] = useState("");
  // 사이트주소
  const [siteAddress, setSiteAddress] = useState("");
  // 소개
  const [intro, setIntro] = useState("");
  // 입장료
  const [price, setPrice] = useState("");
  // 키워드
  const [keyWord, setKeyWord] = useState("");
  // 시작 시간
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  // 종료 시간
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  // 운영 기간
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  // 종료 기간
  const [endTime, setEndTime] = useState<Date | null>(new Date());
  // 입장료 유무
  const [admissionFee, setAdmissionFee] = useState("");
  // 이미지 미리보기
  const [showImages, setShowImages] = useState<string[]>([]);
  // 이미지
  const [images, setImages] = useState<File[]>([]);
  // 팝업 유형
  const [popupCategory, setPopupCategory] = useState("");
  // 팝업 예약
  const [popupReservation, setPopupReservation] = useState("");
  // 주차 유무
  const [parking, setParking] = useState("");
  // 버튼 disabled
  const [isFormComplete, setIsFormComplete] = useState(false);

  const { latitude, longitude } = useLocation(address);

  useEffect(() => {
    const checkFormComplete = () => {
      if (
        popupName &&
        category.name &&
        possibleAge.name &&
        exceptions &&
        detailAddress &&
        address &&
        siteAddress &&
        intro &&
        keyWord &&
        startDate &&
        endDate &&
        startTime &&
        endTime &&
        admissionFee &&
        popupCategory &&
        popupReservation &&
        parking &&
        images.length > 0
      ) {
        setIsFormComplete(true);
      } else {
        setIsFormComplete(false);
      }
    };

    checkFormComplete();
  }, [
    popupName,
    category,
    possibleAge,
    exceptions,
    detailAddress,
    address,
    siteAddress,
    intro,
    keyWord,
    startDate,
    endDate,
    startTime,
    endTime,
    admissionFee,
    popupCategory,
    popupReservation,
    parking,
    images,
  ]);
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
    let imagesList = [...images];

    if (imageLists) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        imagesList.push(imageLists[i]);
      }

      if (imageUrlLists.length || imagesList.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
        imagesList = imagesList.slice(0, 5);
      }

      setShowImages(imageUrlLists);
      setImages(imagesList);
    }
  };

  const { mutate } = usePostOverAllPopupCreate();

  const handleSubmit = async () => {
    const contents = {
      name: popupName,
      homepageLink: siteAddress,
      introduce: intro,
      address: address,
      addressDetail: detailAddress,
      closeDate: endDate,
      entranceFee: admissionFee,
      availableAge: possibleAge.name,
      parkingAvailable: true,
      resvRequired: false,
      openDate: startDate,
      openTime: startTime,
      closeTime: endTime,
      operationExcept: exceptions,
      latitude: latitude,
      longitude: longitude,
      prefered: generatePopupObject(popupCategory),
      taste: generateTasteObject(category.name),
      keywords: keyWord.split("/"),
    };

    mutate({ contents, images: images });
  };

  return (
    <div className="flexCenter w-4/5">
      <PopupForm
        title="팝업 정보 관리"
        subTitle="팝핀에 등록할 정확한 정보를 입력해주세요."
        guide="팝팝에 등록하기 위한 정보가 충분한지 확인해주세요!"
        address={address}
        setAddress={setAddress}
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
        images={images}
        popupCategory={popupCategory}
        popupReservation={popupReservation}
        parking={parking}
        price={price}
        startTime={startTime}
        endTime={endTime}
        startDate={startDate}
        endDate={endDate}
        setImages={setImages}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
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
        <OverallAddEditBtn
          content="등록하기"
          onClick={handleSubmit}
          disabled={!isFormComplete}
        />
      </div>
    </div>
  );
};

export default EditRequestRegister;
