import React, { useState } from "react";
import CustomPagination from "../../pages/memberManagementPage/CustomPagination";
import { userList } from "../../constants/managerDummys";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const MemberList = () => {
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>(userList.length);
  const [offset, setOffset] = useState<number>(0);
  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleMemberDetailClick = (nickName: string, focus: boolean) => {
    navigate(`/memberManager/${nickName}`, {
      state: { nickName: nickName, focus: focus },
    });
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
      <div className="flex justify-between items-center w-4/5 mb-6">
        <button className="border px-7 py-3 rounded-full">
          집중 관리 회원
        </button>
        <div className="text-gray-400">총 000명</div>
      </div>
      <div className="flex flex-col mb-[74px]">
        {userList.map((el, index) => (
          <div key={index}>
            <UserList
              handleMemberDetailClick={handleMemberDetailClick}
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
