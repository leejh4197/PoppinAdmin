import { useState } from "react";
import TitleText from "../../components/common/TitleText";
import CustomDropDown from "../../components/memberManagement/CustomDropDown";
import ModificationRequestList from "../../components/common/editRequestManager/ModificationRequestList";
import CustomPagination from "../memberManagementPage/CustomPagination";

function EditRequests() {
  const [baseDropDown, setBaseDropDown] = useState<string | undefined>(
    "최신순"
  );
  const [filterDropDown, setFilterDropDown] = useState<boolean>(false);
  const [process, setProcess] = useState<string>("미처리");
  const [totalPages, setTotalPages] = useState<number>(4);
  const [offset, setOffset] = useState<number>(0);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };
  const handleProcessBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setProcess(value);
  };

  const hadleDropDownListClick = (content: string) => {
    setFilterDropDown(false);
    setBaseDropDown(content);
  };
  const handleDropDownClick = () => {
    setFilterDropDown(!filterDropDown);
  };
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
                className="px-[30px] py-3"
                onClick={handleProcessBtnClick}
              >
                {el}
              </button>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center">
            <button
              className="mr-2 whitespace-nowrap"
              onClick={handleDropDownClick}
            >
              <span>{baseDropDown}</span>
            </button>
            <img className="w-3 h-3" src="/updownArrow.png" alt="" />
          </div>
          {filterDropDown && (
            <CustomDropDown handleDropDownClick={hadleDropDownListClick} />
          )}
        </div>
      </div>
      <div>
        <ModificationRequestList
          title="팝업1"
          write="피타고라스"
          date="2024.02.20.13:14"
          className=""
        />
      </div>
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
}

export default EditRequests;
