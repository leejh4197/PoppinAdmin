import React from "react";
import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";
import { useParams } from "react-router-dom";
import useGetReportDetail from "../../../queries/reportManager/useGetReportDetail";
import { formattedDate } from "../../../components/common/FormUtil";

const PopupReportDetail = () => {
  const { id } = useParams();
  const { data: popupReportDetail } = useGetReportDetail(id);
  console.log(popupReportDetail);
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="신고관리"
        subTitle="팝업 신고 내역이에요."
        className="mb-10"
      />
      {popupReportDetail && (
        <PopupDetailContent {...popupReportDetail.reportedPopupDetailDto} />
      )}
      <div className="flex flex-col mb-24">
        <div className="flex  text-gray-400 text-sm mb-2">
          <div className="mr-2">
            신고자 : {popupReportDetail?.reportContentDto.reporter}
          </div>
          <div>
            신고일시 :{" "}
            {popupReportDetail?.reportContentDto.reportedAt &&
              formattedDate(popupReportDetail.reportContentDto.reportedAt)}
          </div>
        </div>
        <div className="bg-gray-100 w-full rounded-lg px-3 py-2">
          {popupReportDetail?.reportContentDto.content}
        </div>
      </div>
      <ReportBtn title="팝업 수정하기" />
    </div>
  );
};

export default PopupReportDetail;
