import React, { useState } from "react";
import CustomPagination from "../../components/common/CustomPagination";
import TitleText from "../../components/common/TitleText";
import WriteReviewList from "../../components/memberManagement/WriteReviewList";

function WriteReview() {
  const [totalPages, setTotalPages] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="회원 관리"
        subTitle="작성 후기 확인하기"
        className="mb-10"
      />
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center ">
          <img className="w-24 mr-5" src="/PoppinSymbol.png" alt="" />
          <div className="flex flex-col">
            <div className="font-bold">가느다란물방울</div>
            <div className="text-sm text-gray-400">test@test.com</div>
          </div>
        </div>
        <button className="border whitespace-nowrap px-3 py-2 rounded-full">
          숨거진 후기만 보기
        </button>
      </div>
      <WriteReviewList />
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default WriteReview;
