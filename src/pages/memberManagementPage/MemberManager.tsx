import { useLocation } from "react-router-dom";
import MemberList from "../../components/memberManagement/MemberList";
import MemberDetail from "./MemberDetail";

function MemberManager() {
  const location = useLocation();
  const state = location.state || {};
  const { nickName, focus } = state;
  return (
    <div className="flexCenter">
      <h1 className="font-bold text-4xl mb-10">회원관리</h1>
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
      {nickName ? (
        <MemberDetail nickName={nickName} focus={focus} />
      ) : (
        <MemberList />
      )}
    </div>
  );
}

export default MemberManager;
