import React, { useState } from "react";
import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";
import ReviewImgSwiper from "../../../components/reportManagement/reviewReport/ReviewImgSwiper";
import useGetReviewReportDetail from "../../../queries/reportManager/useGetReviewReportDetail";
import { useLocation, useParams } from "react-router-dom";
import Spinner from "../../../components/common/Spinner";
import { formattedDate } from "../../../components/common/FormUtil";
import usePostReviewChange from "../../../queries/reportManager/usePostReviewChange";
import usePostReviewProcessingDetail from "../../../queries/reportManager/usePostReviewProcessingDetail";
import ReportProcessField from "../../../components/common/ReportProcessField";
import ReportProcessComplete from "../../../components/common/ReportProcessComplete";
import useGetReportProcessComplete from "../../../queries/reportManager/useGetReportProcessComplete";

const ReviewReportDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [isInputVisible, setInputVisible] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const { data: reviewReportDetail } = useGetReviewReportDetail(id);
  const { mutate: changeMutate } = usePostReviewChange();
  const { mutate: processingMutate } = usePostReviewProcessingDetail();
  const { data: processComplete } = useGetReportProcessComplete(id);
  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(event.target.value);
  };

  const handleReportChangeClick = () => {
    changeMutate(id);
  };
  const handleReportProcessingClick = () => {
    const payload = {
      content: reportContent,
      reportId: id,
    };
    if (confirm("처리를 완료하시겠습니까?")) {
      processingMutate(payload);
    }
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
        <ReportProcessField
          reportContent={reportContent}
          admin={"관리자1"}
          onChange={handleInputChange}
        />
      )}
      {!state.executed && !processComplete ? (
        isInputVisible ? (
          <ReportBtn
            title="확인"
            disabled={reportContent === "" ? true : false}
            onClick={handleReportProcessingClick}
          />
        ) : (
          <div className="flex justify-end">
            <ReportBtn
              title="변경사항 없음"
              className="bg-white border border-LoginBtn mr-5"
              textClass="text-gray-400"
              onClick={handleReportChangeClick}
            />
            <ReportBtn title="후기 가리기" onClick={handleButtonClick} />
          </div>
        )
      ) : (
        <ReportProcessComplete
          routeUrl={"reviewReport"}
          content={processComplete?.content}
          admin={processComplete?.adminName}
          executedAt={processComplete?.executedAt}
        />
      )}
    </div>
  );
};

export default ReviewReportDetail;
