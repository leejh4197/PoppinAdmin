import React, { useState } from "react";
import TitleText from "../../components/common/TitleText";
import PostList from "../../components/common/PostList";
import CustomPagination from "../../components/common/CustomPagination";

function OperatorReport() {
  const [operateReportBtn, setOperateReportBtn] = useState("미처리");
  const [totalPages, setTotalPages] = useState<number>(4);
  const [offset, setOffset] = useState<number>(0);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleOperateReportBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { value } = e.currentTarget;
    setOperateReportBtn(value);
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="팝업 제보 관리"
        subTitle="운영자 제보"
        className="mb-10"
      />
      <div className="flex mb-8">
        {["미처리", "처리 중", "처리 완료"].map((el, index) => (
          <button
            value={el}
            onClick={handleOperateReportBtnClick}
            className={`border px-7 py-2 rounded-full ${
              operateReportBtn === el ? "border-LoginBtn bg-LoginBtn/30" : ""
            } ${index === 0 || index === 1 ? "mr-5" : ""}`}
            key={index}
          >
            {el}
          </button>
        ))}
      </div>
      <PostList
        path="operatorReport"
        sub1="제보자"
        sub2="제보일시"
        title="팝업1"
        write="성북구불주먹"
        date="2024.02.20.13:14"
        progress="관리자1"
      />
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default OperatorReport;
