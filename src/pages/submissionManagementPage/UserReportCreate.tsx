import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddressLocation from "../../hook/useLocation";
import { categoryDummy } from "../../constants/categoryDummy";
import useEditPopup from "../../queries/reportManager/useEditPopup";
import {
  conversionFormDate,
  conversionFormTime,
  generatePopupObject,
  generateTasteObject,
} from "../../components/common/FormUtil";
import PopupForm from "../../components/common/PopupForm";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";

const UserReportCreate = () => {
  const { id } = useNavigate();
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
  const [exceptions, setExceptions] = useState<string | null>("");
  // 상세주소
  const [detailAddress, setDetailAddress] = useState<string | null>("");
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

  const { latitude, longitude } = useAddressLocation(address);

  // useEffect(() => {
  //   if (popupInfo) {
  //     // 데이터를 받아와서 상태를 설정
  //     setPopupName(popupInfo.name);
  //     setPossibleAge({
  //       name: popupInfo.availableAgeValue,
  //       value: popupInfo.availableAge,
  //     });
  //     setExceptions(popupInfo.operationExcept);
  //     setDetailAddress(popupInfo.addressDetail);
  //     setAddress(popupInfo.address || "");
  //     setSiteAddress(popupInfo.homepageLink);
  //     setIntro(popupInfo.introduce);
  //     setPrice(popupInfo.entranceFee);
  //     setKeyWord(popupInfo.keywordList.join("/"));
  //     setStartDate(popupInfo.openDate ? new Date(popupInfo.openDate) : null);
  //     setEndDate(popupInfo.closeDate ? new Date(popupInfo.closeDate) : null);
  //     if (popupInfo.openTime) {
  //       const [hours, minutes] = popupInfo.openTime.split(":");
  //       const openTimeDate = new Date();
  //       openTimeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
  //       setStartTime(openTimeDate);
  //     }
  //     if (popupInfo.closeTime) {
  //       const [hours, minutes] = popupInfo.closeTime.split(":");
  //       const closeTimeDate = new Date();
  //       closeTimeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
  //       setEndTime(closeTimeDate);
  //     }
  //     setAdmissionFee(popupInfo.resvRequired ? "있음" : "없음");
  //     const selectCategory = Object.entries(popupInfo.taste)
  //       .filter(([, value]) => value === true)
  //       .map(([key]) => key);

  //     const categoryNames = selectCategory
  //       .map(
  //         (key) =>
  //           categoryDummy.find((category) => category.name === key)?.value ||
  //           key
  //       )
  //       .join(", ");

  //     setCategory({
  //       name: selectCategory.join(", "),
  //       value: categoryNames,
  //     });
  //     const selectPopupCategory = Object.entries(popupInfo.prefered)
  //       .filter(([, value]) => value === true)
  //       .map(([value]) => value);

  //     setPopupCategory(selectPopupCategory.join());
  //     setPopupReservation(popupInfo.resvRequired ? "예약 필수" : "필수 아님");
  //     setParking(popupInfo.parkingAvailable ? "주차가능" : "주차불가");
  //     // 이미지 미리보기 설정
  //     setShowImages(popupInfo.posterList || []);
  //     // 받아온 이미지 File형태로 변환
  //     const filesToSend = Promise.all(
  //       popupInfo.posterList.map((el) => {
  //         return fetch(el, { mode: "no-cors" })
  //           .then((response) => response.blob())
  //           .then((blob) => new File([blob], el));
  //       })
  //     );
  //     filesToSend.then((files) => {
  //       setImages(files);
  //     });
  //   }
  // }, [popupInfo]);
  useEffect(() => {
    const checkFormComplete = () => {
      if (
        popupName &&
        category.name &&
        possibleAge.name &&
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

  const { mutate } = useEditPopup();

  const handleSubmit = async () => {
    const contents = {
      name: popupName,
      homepageLink: siteAddress,
      introduce: intro,
      address: address,
      addressDetail: detailAddress,
      openDate: startDate ? conversionFormDate(startDate.toISOString()) : "",
      closeDate: endDate ? conversionFormDate(endDate.toISOString()) : "",
      openTime: startTime ? conversionFormTime(startTime.toISOString()) : "",
      closeTime: endTime ? conversionFormTime(endTime.toISOString()) : "",
      entranceFee: price,
      availableAge: possibleAge.name,
      parkingAvailable: parking === "주차가능" ? true : false,
      resvRequired: popupReservation === "예약 필수" ? true : false,
      operationExcept: exceptions,
      latitude: latitude,
      longitude: longitude,
      prefered: generatePopupObject(popupCategory),
      taste: generateTasteObject(category.name),
      keywords: keyWord.split("/"),
    };

    mutate({ contents: contents, images: images });
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
          content="임시저장"
          onClick={handleSubmit}
          className="bg-white border border-LoginBtn text-gray-400 mr-2"
        />
        <OverallAddEditBtn
          content="업로드승인"
          onClick={handleSubmit}
          disabled={!isFormComplete}
        />
      </div>
    </div>
  );
};

export default UserReportCreate;
