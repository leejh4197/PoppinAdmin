import { useEffect, useState } from "react";
import TitleText from "../../components/common/TitleText";
import OverallPopupList from "../../components/overallManagement/OverallPopupList";
import { useNavigate } from "react-router-dom";
import { cateBtn } from "../../constants/overAllCateBtn";
import useGetOverAllPopupList from "../../queries/overAllpopupManager/useGetOverAllPopupList";
import CustomPagination from "../../components/common/CustomPagination";

function OverallManger() {
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [time, setTime] = useState("");
  const [offset, setOffset] = useState<number>(0);
  const [operateBtn, setOperateBtn] = useState({
    name: "운영 중",
    state: "OPERATING",
  });
  const { data: overAllList } = useGetOverAllPopupList(
    offset,
    19,
    operateBtn.state
  );

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleOperateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    setOperateBtn({ name: name, state: value });
  };

  useEffect(() => {
    if (overAllList) {
      setTotalPages(overAllList.pageInfo.totalPages);
    }
  }, [overAllList]);
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="전체 팝업 관리"
        subTitle="팝핀에 등록된 전체 팝업 목록이에요."
        className="mb-10"
      />
      <div className="relative flex items-center w-full mb-12">
        <input
          className="w-full py-4 pl-10 pr-4 rounded-full border border-gray-300"
          type="text"
          placeholder="텍스트를 입력하세요."
        />
        <img
          className="absolute right-3 w-5 h-5"
          src="/Search.png"
          alt="Search Icon"
        />
      </div>
      <div className="w-full flex justify-between items-center mb-2 whitespace-nowrap">
        <div className="flex">
          {cateBtn.map((el, index) => (
            <div
              key={index}
              className={`${index === 0 || index === 1 ? "mr-3" : ""} ${
                operateBtn.name === el.title
                  ? "border border-[#0EB5F9] bg-[#0EB5F9] bg-opacity-10"
                  : ""
              } border rounded-full`}
            >
              <button
                name={el.title}
                value={el.state}
                className="px-[30px] py-3"
                onClick={handleOperateClick}
              >
                {el.title}
              </button>
            </div>
          ))}
        </div>
        <div>총{overAllList && overAllList.pageInfo.size}개</div>
      </div>
      <div>
        {overAllList?.items.popups.map((el) => (
          <OverallPopupList
            key={el.id}
            title={el.name}
            date={el.createdAt}
            name={el.adminName}
          />
        ))}
      </div>
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
      <div className="fixed right-[200px] bottom-[67px] bg-[#0EB5F9] rounded-full shadow-gray-300 shadow-md">
        <button
          className="px-20 py-5 text-white"
          onClick={() => navigate("/popupRegister")}
        >
          팝업 등록하기
        </button>
      </div>
    </div>
  );
}

export default OverallManger;
