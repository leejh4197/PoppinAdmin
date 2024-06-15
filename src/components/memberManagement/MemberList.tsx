import React, { useState, useEffect } from "react";
import CustomPagination from "../common/CustomPagination";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hook/useDebounce";
import { User } from "../../types/user";
import useGetFocusUserList from "../../queries/memberManager/useGetFocusUserList";
import useGetUserList from "../../queries/memberManager/useGetUserList";
import useGetUserSearch from "../../queries/memberManager/useGetUserSearch";

const MemberList = () => {
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [focusUserActive, setFocusUserActive] = useState<boolean>(true);
  const [displayData, setDisplayData] = useState<User[]>([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const { data: userSearchData } = useGetUserSearch(searchQuery);
  const { data: userListData } = useGetUserList(offset + 1);
  const { data: focusUserListData } = useGetFocusUserList(offset + 1);

  useEffect(() => {
    if (userListData) {
      setTotalPages(Math.ceil(userListData.userCnt / 44));
    } else if (focusUserListData) {
      setTotalPages(Math.ceil(focusUserListData.userCnt / 44));
    }
  }, [userListData, focusUserListData]);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleMemberDetailClick = (id: string) => {
    navigate(`/memberManager/${id}`, {
      state: { id: id },
    });
  };

  useEffect(() => {
    if (focusUserActive) {
      setDisplayData(userListData?.userList || []);
    } else if (debouncedSearchQuery) {
      setDisplayData(userSearchData?.userList || []);
    } else {
      setDisplayData(focusUserListData?.userList || []);
    }
  }, [
    focusUserActive,
    debouncedSearchQuery,
    userSearchData,
    userListData,
    focusUserListData,
  ]);

  return (
    <div>
      <div className="relative flex items-center w-4/5 mb-12">
        <input
          className="w-full py-4 pl-10 pr-4 rounded-full border border-gray-300"
          type="text"
          placeholder="텍스트를 입력하세요."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img
          className="absolute right-3 w-5 h-5"
          src="/Search.png"
          alt="Search Icon"
        />
      </div>
      <div className="flex justify-between items-center w-4/5 mb-6">
        <button
          onClick={() => setFocusUserActive(!focusUserActive)}
          className={`whitespace-nowrap ${
            !focusUserActive
              ? "border-LoginBtn whitespace-nowrap bg-LoginBtn/20"
              : ""
          } border px-7 py-3 rounded-full`}
        >
          집중 관리 회원
        </button>
        <div className="text-gray-400 whitespace-nowrap">
          총{" "}
          {focusUserActive ? userListData?.userCnt : focusUserListData?.userCnt}
          명
        </div>
      </div>
      <div className="flex flex-col mb-[74px]">
        {displayData?.map((el) => (
          <div key={el.id}>
            <UserList
              handleMemberDetailClick={handleMemberDetailClick}
              userId={el.id}
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
