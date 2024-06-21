import { useEffect, useState } from "react";
import TitleText from "../../../components/common/TitleText";
import PopupReportList from "../../../components/reportManagement/popupReport/PopupReportList";
import CustomPagination from "../../../components/common/CustomPagination";
import useGetReviewReportList from "../../../queries/reportManager/useGetReviewReportList";
import { formattedDate } from "../../../components/common/FormUtil";
import Spinner from "../../../components/common/Spinner";

function ReviewReport() {
  const [active, setActive] = useState("미처리");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const { data: reviewReportList } = useGetReviewReportList(
    active === "미처리" ? false : true,
    offset,
    19
  );

  console.log(reviewReportList);
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  const handleProcessClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setActive(name);
  };
  useEffect(() => {
    if (reviewReportList) {
      setTotalPages(reviewReportList.pageInfo.totalPages);
    }
  }, [reviewReportList]);
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
      {reviewReportList?.items.length !== 0 ? (
        reviewReportList?.items.map((el) => (
          <PopupReportList
            path="reviewReport"
            reviewId={el.reportedReviewId}
            title={el.popupName}
            reporter={el.reporter}
            reportTime={formattedDate(el.reportedAt)}
          />
        ))
      ) : (
        <Spinner />
      )}
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default ReviewReport;
