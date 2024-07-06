import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAddressLocation from "../../hook/useLocation";
import { categoryDummy } from "../../constants/categoryDummy";
import {
  conversionFormDate,
  conversionFormTime,
  generatePopupObject,
  generateTasteObject,
} from "../../components/common/FormUtil";
import PopupForm from "../../components/common/PopupForm";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";
import useGetUserReportSearch from "../../queries/submissionManager/useGetUserReportSearch";
import useEditUserReportApprove from "../../queries/submissionManager/useEditUserReportApprove";
import useEditUserReportTemp from "../../queries/submissionManager/useEditUserReportTemp";

const UserReportUpload = () => {
  const prams = useParams();
  const { data: popupInfo } = useGetUserReportSearch(prams.id);
  //업로드 승인
  const { mutate: editApprove } = useEditUserReportApprove();
  //임시
  const { mutate: editTemp } = useEditUserReportTemp();

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

  // 위도,경도
  const { latitude, longitude } = useAddressLocation(address);

  useEffect(() => {
    if (popupInfo) {
      // 데이터를 받아와서 상태를 설정
      setPopupName(popupInfo.popup.name);
      setPossibleAge({
        name: popupInfo.popup.availableAgeValue,
        value: popupInfo.popup.availableAge,
      });
      setExceptions(popupInfo.popup.operationExcept);
      setDetailAddress(popupInfo.popup.addressDetail);
      setAddress(popupInfo.popup.address || "");
      setSiteAddress(popupInfo.popup.homepageLink);
      setIntro(popupInfo.popup.introduce);
      setPrice(popupInfo.popup.entranceFee);
      setKeyWord(popupInfo.popup.keywordList.join("/"));
      setStartDate(
        popupInfo.popup.openDate ? new Date(popupInfo.popup.openDate) : null
      );
      setEndDate(
        popupInfo.popup.closeDate ? new Date(popupInfo.popup.closeDate) : null
      );
      if (popupInfo.popup.openTime) {
        const [hours, minutes] = popupInfo.popup.openTime.split(":");
        const openTimeDate = new Date();
        openTimeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        setStartTime(openTimeDate);
      }
      if (popupInfo.popup.closeTime) {
        const [hours, minutes] = popupInfo.popup.closeTime.split(":");
        const closeTimeDate = new Date();
        closeTimeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        setEndTime(closeTimeDate);
      }

      setAdmissionFee(popupInfo.popup.entranceRequired ? "있음" : "없음");
      const selectCategory = Object.entries(popupInfo.popup.taste)
        .filter(([, value]) => value === true)
        .map(([key]) => key);

      const categoryNames = selectCategory
        .map(
          (key) =>
            categoryDummy.find((category) => category.name === key)?.value ||
            key
        )
        .join(",");

      setCategory({
        name: selectCategory.join(", "),
        value: categoryNames,
      });
      const selectPopupCategory = Object.entries(popupInfo.popup.prefered)
        .filter(([, value]) => value === true)
        .map(([value]) => value);

      setPopupCategory(selectPopupCategory.join());
      setPopupReservation(
        popupInfo.popup.resvRequired ? "예약 필수" : "필수 아님"
      );
      setParking(popupInfo.popup.parkingAvailable ? "주차가능" : "주차불가");
      // 이미지 미리보기 설정
      setShowImages(popupInfo.popup.posterList || []);

      const fileTest = async () => {
        try {
          const files = await Promise.all(
            popupInfo.popup.posterList.map(async (el, index) => {
              try {
                const response = await axios.get(el, {
                  responseType: "blob",
                  headers: {
                    "Cache-Control": "no-cache",
                  },
                });

                const url = response.config.url;
                const fileName = url?.substring(url.lastIndexOf("/") + 1);

                const file = new File([response.data], fileName || "", {
                  type: response.data.type,
                });
                return file;
              } catch (err) {
                console.log(`${index}에서 에러가 발생합니다.`, err);
                return null;
              }
            })
          );
          const validFiles = files.filter((file) => file !== null);
          setImages(validFiles as File[]);
        } catch (err) {
          console.log(err);
        }
      };
      fileTest();
    }
  }, [popupInfo]);

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

  // 업로드 승인
  const handleSubmit = async () => {
    const contents = {
      userInformId: prams.id,
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
      entranceRequired: admissionFee === "있음" ? true : false,
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

    editApprove({ contents, images });
  };
  const handleTempSubmit = async () => {
    const contents = {
      userInformId: prams.id,
      homepageLink: siteAddress,
      name: popupName,
      introduce: intro,
      address: address,
      addressDetail: detailAddress,
      openDate: startDate ? conversionFormDate(startDate.toISOString()) : "",
      closeDate: endDate ? conversionFormDate(endDate.toISOString()) : "",
      openTime: startTime ? conversionFormTime(startTime.toISOString()) : "",
      closeTime: endTime ? conversionFormTime(endTime.toISOString()) : "",
      entranceFee: price,
      entranceRequired: admissionFee === "있음" ? true : false,
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

    editTemp({ contents, images });
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
          onClick={handleTempSubmit}
          className="text-gray-400 bg-white border border-LoginBtn mr-5"
        />
        <OverallAddEditBtn
          content="업로드 승인"
          onClick={handleSubmit}
          disabled={!isFormComplete}
        />
      </div>
    </div>
  );
};

export default UserReportUpload;
