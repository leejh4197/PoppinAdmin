import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetReportDetail from "../../../queries/reportManager/useGetReportDetail";
import { formattedDate } from "../../../components/common/FormUtil";
import useDeletePopup from "../../../queries/reportManager/useDeletePopup";
import ReportProcessField from "../../../components/common/ReportProcessField";
import { useState } from "react";
import usePostPopupProcessingDetail from "../../../queries/reportManager/usePostPopupProcessingDetail";
import ReportProcessComplete from "../../../components/common/ReportProcessComplete";
import useGetPopupProcessComplete from "../../../queries/reportManager/useGetPopupProcessComplete";

const PopupReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { executed } = location.state || {};
  const searchParams = new URLSearchParams(location.search);
  const isSuccess = searchParams.get("isSuccess") === "true";
  const [reportContent, setReportContent] = useState("");
  const { data: popupReportDetail } = useGetReportDetail(id);

  const { mutate } = useDeletePopup();
  const { mutate: processingMutate } = usePostPopupProcessingDetail();
  const { data } = useGetPopupProcessComplete(id);
  console.log("처리데이터", data);
  const handleEditClick = () => {
    navigate(`/popupReportEdit/${id}`, {
      state: { popupId: popupReportDetail?.reportedPopupDetailDto.popupId },
    });
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

  console.log(popupReportDetail);
  const handleDeleteClick = () => {
    if (confirm("삭제하시겠어요?")) {
      mutate(popupReportDetail?.reportedPopupDetailDto.popupId);
    }
  };
  console.log(popupReportDetail?.reportedPopupDetailDto.popupId);

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
      {executed === true ? (
        <ReportProcessComplete routeUrl={"popupReport"} />
      ) : isSuccess ? (
        <div>
          <ReportProcessField
            reportContent={reportContent}
            admin={"관리자1"}
            onChange={handleInputChange}
          />
          <ReportBtn
            title="확인"
            disabled={reportContent === "" ? true : false}
            onClick={handleReportProcessingClick}
          />
        </div>
      ) : (
        <div className="flex justify-end w-full items-center">
          <ReportBtn
            title="삭제하기"
            className="mr-2 bg-gray-300 text-gray-500"
            onClick={handleDeleteClick}
          />
          <ReportBtn title="팝업 수정하기" onClick={handleEditClick} />
        </div>
      )}
    </div>
  );
};

export default PopupReportDetail;
