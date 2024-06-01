import React, { useState } from "react";
import TitleText from "../../components/common/TitleText";
import OverallPopupInput from "../../components/overallManagement/OverallPopupInput";
import OverallPopupBtn from "../../components/overallManagement/OverallPopupBtn";
import OverallAddress from "../../components/overallManagement/OverallAddress";
import OverallDate from "../../components/overallManagement/OverallDate";
import OverallTime from "../../components/overallManagement/OverallTime";
import OverallAddEditBtn from "../../components/overallManagement/OverallAddEditBtn";

const PopUpRegister = () => {
  const [popupName, setPopupName] = useState("");
  const [category, setCategory] = useState("");
  // 팝업 유형 버튼
  const [popupCategory, setPopupcategory] = useState("");
  // 예약 여부 버튼
  const [popupReservation, setPopupReservation] = useState("");
  // 입장료 유무 버튼
  const [admissionFee, setAdmissionFee] = useState("");
  // 주차 가능 여부 버튼
  const [parking, setParking] = useState("");
  const popupCategoryArray = ["소비형", "전시형", "체험형"];
  const reservationArray = ["필수 아님", "예약 필수"];
  const admissionFeeArray = ["없음", "있음"];
  const parkingArray = ["주차불가", "주차가능"];

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget;
    if (name === "팝업 유형") {
      setPopupcategory(value);
    } else if (name === "예약 필수 여부") {
      setPopupReservation(value);
    } else if (name === "입장료 유무") {
      setAdmissionFee(value);
    } else if (name === "주차 가능 여부") {
      setParking(value);
    }
  };

  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="팝업 정보 관리"
        subTitle="팝핀에 등록할 정확한 정보를 입력해주세요."
        className="mb-16"
      />
      <div className="mb-14 font-bold">
        팝팝에 등록하기 위한 정보가 충분한지 확인해주세요!
      </div>
      <div>
        <OverallPopupInput
          title="팝업 이름"
          value={popupName}
          placeholder="팝업 이름"
          essential
        />
        <OverallPopupInput
          title="카테고리"
          value={category}
          placeholder="카테고리"
          essential
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
          value={category}
          placeholder="예외사항"
          essential={false}
        />
        <OverallAddress />
        <OverallPopupInput
          title="공식 사이트 주소"
          value={category}
          placeholder="site@site.com"
          essential
        />
        <div>관련사진</div>
        <OverallPopupInput
          title="소개"
          value={category}
          placeholder="소개"
          essential
        />
        <OverallPopupBtn
          title="예약 필수 여부"
          onClick={handleBtnClick}
          value={popupReservation}
          btnArray={reservationArray}
        />
        <OverallPopupInput
          title="이용 가능 연령"
          value={category}
          placeholder="EX)전연령"
          essential
        />
        <OverallPopupBtn
          title="입장료 유무"
          onClick={handleBtnClick}
          value={admissionFee}
          btnArray={admissionFeeArray}
        />
        <OverallPopupInput
          title="입장료"
          value={category}
          placeholder="입장료"
          essential={false}
        />
        <OverallPopupBtn
          title="주차 가능 여부"
          onClick={handleBtnClick}
          value={parking}
          btnArray={parkingArray}
        />
        <OverallPopupInput
          title="키워드 등록"
          value={category}
          placeholder="키워드"
          essential
          subTitle="키워드는 띄어쓰기 없이 /로 구분해서 작성해 주세요."
        />
      </div>
      <div className="flex justify-end mb-16">
        <OverallAddEditBtn content="등록하기" />
        <OverallAddEditBtn content="등록하기" />
      </div>
    </div>
  );
};

export default PopUpRegister;
