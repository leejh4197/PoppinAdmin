import React, { useState } from "react";
import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";
import ReviewImgSwiper from "../../../components/reportManagement/reviewReport/ReviewImgSwiper";
import useGetReviewReportDetail from "../../../queries/reportManager/useGetReviewReportDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/common/Spinner";
import { formattedDate } from "../../../components/common/FormUtil";

const ReviewReportDetail = () => {
  const { id } = useParams();
  const [isInputVisible, setInputVisible] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const { data: reviewReportDetail } = useGetReviewReportDetail(id);
  console.log(reviewReportDetail);

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(event.target.value);
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="신고관리"
        subTitle="팝업 신고 내역이에요."
        className="mb-10"
      />
      {reviewReportDetail ? (
        <PopupDetailContent {...reviewReportDetail.reportedPopupDetailDto} />
      ) : (
        <Spinner />
      )}
      <div className="flex items-center mb-10">
        {reviewReportDetail ? (
          <ReviewImgSwiper {...reviewReportDetail.reportedReviewDetailDto} />
        ) : (
          <Spinner />
        )}
        <div className="flex flex-col w-full">
          <div className="text-gray-400 mb-2">
            작성일시 :{" "}
            {reviewReportDetail &&
              formattedDate(
                reviewReportDetail?.reportedReviewDetailDto.reviewCreatedAt
              )}
          </div>
          <div className="bg-[#EDFAFF] rounded-xl p-5 font-semibold">
            {reviewReportDetail?.reportedReviewDetailDto.reviewContent}
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <div className="flex text-gray-400 text-sm mb-2">
          <div className="mr-2">
            신고자 : {reviewReportDetail?.reportContentDto.reporter}
          </div>
          <div>
            신고일시 :{" "}
            {reviewReportDetail &&
              formattedDate(reviewReportDetail.reportContentDto.reportedAt)}
          </div>
        </div>
        <div className="bg-gray-100 w-full rounded-lg px-3 py-2">
          {reviewReportDetail?.reportContentDto.content}
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
