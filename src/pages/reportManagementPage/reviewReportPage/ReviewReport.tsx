import { useState } from "react";
import TitleText from "../../../components/common/TitleText";
import PopupReportList from "../../../components/reportManagement/popupReport/PopupReportList";
import CustomPagination from "../../memberManagementPage/CustomPagination";

function ReviewReport() {
  const [active, setActive] = useState("미처리");
  const [totalPages, setTotalPages] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  const handleProcessClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setActive(name);
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="신고관리"
        subTitle="후기 신고 건이에요."
        className="mb-10"
      />
      <div className="mb-8">
        {["미처리", "처리 완료"].map((el, index) => (
          <button
            key={index}
            name={el}
            className={`border rounded-full px-4 py-2 ${
              index === 0 ? "mr-2" : ""
            } ${active === el ? "border-LoginBtn bg-LoginBtn/20" : ""}`}
            onClick={handleProcessClick}
          >
            {el}
          </button>
        ))}
      </div>
      <PopupReportList
        path="reviewReport"
        title="[팝업1]"
        reporter="성북구불주먹"
        reportTime="2020.20.20. 15:30"
      />
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default ReviewReport;
