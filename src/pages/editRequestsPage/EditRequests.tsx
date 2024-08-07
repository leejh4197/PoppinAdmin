import { useEffect, useState } from "react";
import TitleText from "../../components/common/TitleText";
import CustomPagination from "../../components/common/CustomPagination";
import PostList from "../../components/common/PostList";
import useGetEditRequestList from "../../queries/editRequestManager/useGetEditRequestList";
import Spinner from "../../components/common/Spinner";

function EditRequests() {
  const [process, setProcess] = useState<string>("미처리");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  const handleProcessBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setProcess(value);
  };
  const { data: editRequestList } = useGetEditRequestList(
    process === "미처리" ? false : true,
    offset,
    19
  );
  useEffect(() => {
    if (editRequestList) {
      setTotalPages(editRequestList.pageInfo.totalPages);
    }
  }, [editRequestList]);

  return (
    <div className="flexCenter w-4/5">
      <TitleText mainTitle="정보 수정 요청 관리" className="mb-10" />
      <div className="flex justify-between items-center mb-8">
        <div className="flex">
          {["미처리", "처리완료"].map((el, index) => (
            <div
              className={`${index === 0 ? "mr-5" : ""} ${
                process === el
                  ? "border-[#0EB5F9] bg-[#0EB5F9] bg-opacity-10"
                  : ""
              } flex whitespace-nowrap border rounded-full`}
              key={index}
            >
              <button
                value={el}
                className="px-7 py-2"
                onClick={handleProcessBtnClick}
              >
                {el}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {editRequestList?.items.length !== 0 ? (
          editRequestList?.items.map((el) => (
            <PostList
              id={el.id}
              key={el.id}
              path="editRequests"
              sub1="작성자"
              sub2="작성일"
              title={el.popupName}
              write={el.informerName}
              date={el.informedAt}
              className=""
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default EditRequests;
