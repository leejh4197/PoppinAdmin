import { useEffect, useState } from "react";
import useGetUser from "../../queries/memberManager/useGetUser";

function Home() {
  const { data } = useGetUser();
  const [nickName, setNickName] = useState("");
  useEffect(() => {
    if (data) {
      setNickName(data.nickname);
      localStorage.setItem("nickName", data.nickname);
    }
  }, [data]);

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  return (
    <div className="flexCenter">
      <div className="flex items-center mb-[44px]">
        <img
          className="w-[155px] h-[155px] mr-[35px] rounded-full"
          src={data?.userImageUrl ? data.userImageUrl : "/profile.svg"}
          alt=""
        />
        <div className="font-bold text-2xl">{nickName}</div>
      </div>
      <div className="mb-[70px]">
        <div className="mb-2">아이디</div>
        <input
          className="outline-none bg-gray-200 py-[20px] pl-[33px] rounded-full w-[887px]"
          readOnly
          value={data?.email || ""}
        />
      </div>
      <div>
        <div className="mb-2">닉네임</div>
        <div className="relative inline-block">
          <input
            value={nickName}
            className="outline-none border-gray-300 border py-[20px] pl-[33px] rounded-full w-[887px]"
            onChange={handleNickNameChange}
          />
          <button
            onClick={() => setNickName("")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4"
          >
            <img className="w-6" src="/cancel.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
