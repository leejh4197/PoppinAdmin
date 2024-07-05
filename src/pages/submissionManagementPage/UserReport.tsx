import React, { useEffect, useState } from "react";
import TitleText from "../../components/common/TitleText";
import PostList from "../../components/common/PostList";
import CustomPagination from "../../components/common/CustomPagination";
import { reportBtn } from "../../constants/reportBtnDummy";
import useGetUserReportList from "../../queries/submissionManager/useGetUserReportList";
import { formattedDate } from "../../components/common/FormUtil";
import Spinner from "../../components/common/Spinner";

function UserReport() {
  const [operateReportBtn, setOperateReportBtn] = useState({
    name: "미처리",
    value: "NOTEXECUTED",
  });
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const { data: userReportList } = useGetUserReportList(
    offset,
    19,
    operateReportBtn.value
  );
  useEffect(() => {
    if (userReportList) setTotalPages(userReportList?.pageInfo.totalPages);
  }, [userReportList]);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleOperateReportBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { value, name } = e.currentTarget;
    setOperateReportBtn({ name: name, value: value });
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="팝업 제보 관리"
        subTitle="이용자 제보"
        className="mb-10"
      />
      <div className="flex mb-8">
        {reportBtn.map((el, index) => (
          <button
            value={el.value}
            name={el.name}
            onClick={handleOperateReportBtnClick}
            className={`border px-7 py-2 rounded-full ${
              operateReportBtn.name === el.name
                ? "border-LoginBtn bg-LoginBtn/30"
                : ""
            } ${index === 0 || index === 1 ? "mr-5" : ""}`}
            key={index}
          >
            {el.name}
          </button>
        ))}
      </div>
      {userReportList?.items.length !== 0 ? (
        userReportList?.items.map((el) => (
          <PostList
            clickPaging={operateReportBtn}
            key={el.id}
            id={el.id}
            path="userReport"
            sub1="제보자"
            sub2="제보일시"
            title={el.popupName}
            write={el.informerName}
            date={formattedDate(el.informedAt)}
            progress={el.adminName}
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

export default UserReport;
