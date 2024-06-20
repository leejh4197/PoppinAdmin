import React, { useState } from "react";
import CustomPagination from "../../components/common/CustomPagination";
import TitleText from "../../components/common/TitleText";
import WriteReviewList from "../../components/memberManagement/WriteReviewList";
import { useLocation, useParams } from "react-router-dom";
import useGetWriteReview from "../../queries/memberManager/useGetWriteReview";

function WriteReview() {
  const [totalPages, setTotalPages] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const { id } = useParams();
  const [hiddenReview, setHiddenReview] = useState(false);
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  const { state } = useLocation();
  const { data: writeReviewList } = useGetWriteReview(
    id,
    offset + 1,
    hiddenReview
  );
  console.log(writeReviewList);
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="회원 관리"
        subTitle="작성 후기 확인하기"
        className="mb-10"
      />
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center ">
          <img
            className="w-24 mr-5"
            src={state.image ? state.image : " /PoppinSymbol.png"}
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-bold">{state.nickName}</div>
            <div className="text-sm text-gray-400">{state.email}</div>
          </div>
        </div>
        <button
          className={`border whitespace-nowrap px-3 py-2 rounded-full ${
            hiddenReview ? "border-LoginBtn bg-LoginBtn/30" : ""
          }`}
          onClick={() => setHiddenReview(!hiddenReview)}
        >
          숨겨진 후기만 보기
        </button>
      </div>
      {writeReviewList?.map((el) => (
        <WriteReviewList
          content={el.content}
          createAt={el.createdAt}
          hiddenReview={el.hiddenReview}
          key={el.reviewId}
          imageUrl={el.imageUrl}
          visitedAt={el.visitedAt}
          popupName={el.popupName}
        />
      ))}
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default WriteReview;
