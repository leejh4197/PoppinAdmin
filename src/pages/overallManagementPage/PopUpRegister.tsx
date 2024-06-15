import React, { useState } from "react";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";
import PopupForm from "../../components/common/PopupForm";
import usePostOverAllPopupCreate from "../../queries/overAllpopupManager/usePostOverAllPopupCreate";

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
  const [keyWord, setKeyWord] = useState("키워드/키워드/키워드");
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

  const { mutate, data } = usePostOverAllPopupCreate();
  console.log(data);
  console.log(showImages);

  const handleSubmit = async () => {
    const imagesFiles = await Promise.all(
      showImages.map(async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const fileName = url.split("/").pop();
        return new File([blob], fileName || "image.jpg", { type: blob.type });
      })
    );
    console.log("파일", imagesFiles);

    const contents = {
      name: "젠틀 몬스터 잠실",
      homepageLink: "https://www.naver.com/",
      introduce: "안녕하세요 젠틀 몬스터 잠실입니다.",
      address: "서울",
      addressDetail: "팝핀빌딩",
      closeDate: "2024-03-25",
      entranceFee: "성인 10000원, 청소년 7000원",
      availableAge: "G_RATED",
      parkingAvailable: true,
      resvRequired: false,
      openDate: "2024-03-03",
      openTime: "13:00",
      closeTime: "22:00",
      latitude: "37.5486305419897",
      longitude: "126.849079688841",
      prefered: {
        market: true,
        display: false,
        experience: false,
        wantFree: true,
      },
      taste: {
        fashionBeauty: true,
        characters: false,
        foodBeverage: true,
        webtoonAni: false,
        interiorThings: false,
        movie: true,
        musical: false,
        sports: false,
        game: true,
        itTech: false,
        kpop: false,
        alcohol: true,
        animalPlant: false,
      },
      keywords: keyWord.split("/"),
    };

    mutate({ contents, images: imagesFiles });
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
        <OverallAddEditBtn content="등록하기" onClick={handleSubmit} />
        <OverallAddEditBtn content="등록하기" />
      </div>
    </div>
  );
};

export default PopUpRegister;
