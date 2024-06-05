import React, { useState } from "react";
import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";
import ReviewImgSwiper from "../../../components/reportManagement/reviewReport/ReviewImgSwiper";

const ReviewReportDetail = () => {
  const [isInputVisible, setInputVisible] = useState(false); // State to manage input visibility
  const [reportContent, setReportContent] = useState(""); // State to manage the input content

  const handleButtonClick = () => {
    setInputVisible(true); // Show input when the button is clicked
  };

  const handleInputChange = (event) => {
    setReportContent(event.target.value); // Update state with input content
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="신고관리"
        subTitle="팝업 신고 내역이에요."
        className="mb-10"
      />
      <PopupDetailContent />
      <div className="flex items-center mb-10">
        <ReviewImgSwiper />
        <div className="flex flex-col w-full">
          <div className="text-gray-400 mb-2">작성일시 : 2020.02.02. 18:00</div>
          <div className="bg-[#EDFAFF] rounded-xl p-5 font-semibold">
            팝업에 가면 상품을 무료로 제공하네요! 너무 좋아요 다들 서둘러서
            방문하세요.
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <div className="flex text-gray-400 text-sm mb-2">
          <div>신고자 : 성북구 불주먹</div>
          <div>신고일시 : 2020.2020. 18:00</div>
        </div>
        <div className="bg-gray-100 w-full rounded-lg px-3 py-2">
          관련없는 사진으로 사람들이 오해할 수 있어요.
        </div>
      </div>
      {isInputVisible && (
        <div className="flex flex-col mb-24 border-t">
          <div className="text-gray-700 mt-10 mb-2 text-lg font-bold">
            신고 처리내용
          </div>
          <div className="text-gray-400 mb-2 text-sm ">담당자: 관리자1</div>
          <textarea
            value={reportContent}
            placeholder="신고 처리 내용을 간략히 기재해주세요."
            onChange={handleInputChange}
            className="border resize-none outline-none border-gray-200 rounded-lg px-3 py-3 mt-2"
          />
        </div>
      )}
      {isInputVisible ? (
        <ReportBtn title="확인" />
      ) : (
        <ReportBtn title="후기 가리기" onClick={handleButtonClick} />
      )}
    </div>
  );
};

export default ReviewReportDetail;
