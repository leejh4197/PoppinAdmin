import React, { useState, useEffect } from "react";
import CustomPagination from "../common/CustomPagination";
import UserList from "./UserList";
import { useDebounce } from "../../hook/useDebounce";
import { User } from "../../types/user";
import useGetUserList from "../../queries/memberManager/useGetUserList";
import useGetUserSearch from "../../queries/memberManager/useGetUserSearch";
import Spinner from "../common/Spinner";

const MemberList = () => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [focusUserActive, setFocusUserActive] = useState<boolean>(false);
  const [displayData, setDisplayData] = useState<User[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data: userSearchData } = useGetUserSearch(debouncedSearchQuery);
  const { data: userListData } = useGetUserList(offset, 44, focusUserActive);

  useEffect(() => {
    if (debouncedSearchQuery && userSearchData) {
      setTotalPages(Math.ceil(userSearchData.userCnt / 44));
    } else if (userListData) {
      setTotalPages(Math.ceil(userListData.userCnt / 44));
    }
  }, [userSearchData, userListData, debouncedSearchQuery, focusUserActive]);

  const handlePageChange = (selected: number) => {
    setOffset(selected);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFocusUserActive(false);
  };

  useEffect(() => {
    if (debouncedSearchQuery && userSearchData) {
      setDisplayData(userSearchData.userList);
      setTotalCount(userSearchData.userCnt);
    } else if (userListData) {
      setDisplayData(userListData.userList);
      setTotalCount(userListData.userCnt);
    }
  }, [focusUserActive, debouncedSearchQuery, userSearchData, userListData]);

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
            focusUserActive
              ? "border-LoginBtn whitespace-nowrap bg-LoginBtn/20"
              : ""
          } border px-7 py-3 rounded-full`}
        >
          집중 관리 회원
        </button>
        <div className="text-gray-400 whitespace-nowrap">총{totalCount}명</div>
      </div>
      {displayData.length === 0 ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mb-[74px]">
          {displayData?.map((el) => (
            <div key={el.id}>
              <UserList
                userId={el.id}
                nickName={el.nickname}
                email={el.email}
                requiresSpecialCare={el.requiresSpecialCare}
              />
            </div>
          ))}
        </div>
      )}
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageChange}
      />
    </div>
  );
};

export default MemberList;
