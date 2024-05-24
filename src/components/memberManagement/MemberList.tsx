import React, { useState } from "react";
import CustomPagination from "../../pages/memberManagementPage/CustomPagination";
import { userList } from "../../constants/managerDummys";
import UserList from "./UserList";
import CustomDropDown from "./CustomDropDown";

const MemberList = () => {
  const [totalPages, setTotalPages] = useState<number>(userList.length);
  const [offset, setOffset] = useState<number>(0);
  const [filterDropDown, setFilterDropDown] = useState<boolean>(false);
  const [baseDropDown, setBaseDropDown] = useState<string | undefined>(
    "최신순"
  );
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleDropDownClick = () => {
    setFilterDropDown(!filterDropDown);
  };
  const hadleDropDownListClick = (content: string) => {
    setFilterDropDown(false);
    setBaseDropDown(content);
  };
  return (
    <div>
      <div className="relative flex items-center w-4/5 mb-12">
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
      <div className="flex w-4/5 justify-between items-center mb-6">
        <button className="border px-7 py-3 rounded-full">
          집중 관리 회원
        </button>
        <div>
          <div className="flex items-center">
            <button className="mr-2" onClick={handleDropDownClick}>
              <span>{baseDropDown}</span>
            </button>
            <img className="w-3 h-3" src="/updownArrow.png" alt="" />
          </div>
          {filterDropDown && (
            <CustomDropDown handleDropDownClick={hadleDropDownListClick} />
          )}
        </div>
      </div>
      <div className="flex flex-col mb-[74px]">
        {userList.map((el, index) => (
          <div key={index}>
            <UserList
              nickName={el.nickname}
              email={el.email}
              requiresSpecialCare={el.requiresSpecialCare}
            />
          </div>
        ))}
      </div>
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
};

export default MemberList;
