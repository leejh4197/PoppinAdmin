import { useState } from "react";

function Home() {
  const [adminId, setAdminId] = useState("poppin2024@naver.com");
  return (
    <div className="flexCenter">
      <div className="flex items-center mb-[44px]">
        <img
          className="w-[155px] h-[155px] mr-[35px]"
          src="/profile.svg"
          alt=""
        />
        <div className="font-bold text-2xl">관리자1</div>
      </div>
      <div className="mb-[70px]">
        <div className="mb-2">아이디</div>
        <input
          className="outline-none bg-gray-200 py-[20px] pl-[33px] rounded-full w-[887px]"
          readOnly
          value={adminId}
        />
      </div>
      <div>
        <div className="mb-2">닉네임</div>
        <div className="relative inline-block">
          <input className="outline-none border-gray-300 border py-[20px] pl-[33px] rounded-full w-[887px]" />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
            <img className="w-6" src="/cancel.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
