import React from "react";
import TitleText from "../../../components/common/TitleText";
import PopupDetailContent from "../../../components/reportManagement/popupReport/PopupDetailContent";
import ReportBtn from "../../../components/editRequests/ReportBtn";

const PopupReportDetail = () => {
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="신고관리"
        subTitle="팝업 신고 내역이에요."
        className="mb-10"
      />
      <PopupDetailContent />
      <div className="flex flex-col mb-24">
        <div className="flex  text-gray-400 text-sm mb-2">
          <div>신고자 : 성북구 불주먹</div>
          <div>신고일시 : 2020.2020. 18:00</div>
        </div>
        <div className="bg-gray-100 w-full rounded-lg px-3 py-2">
          관련없는 사진으로 사람들이 오해할 수 있어요.
        </div>
      </div>
      <ReportBtn title="팝업 수정하기" />
    </div>
  );
};

export default PopupReportDetail;
