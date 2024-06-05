import { useState } from "react";
import MemberDetailInput from "../../components/memberManagement/MemberDetailInput";
import { useNavigate } from "react-router-dom";

type MemberDetailProps = {
  nickName: string;
  focus: boolean;
};

const MemberDetail = ({ nickName, focus }: MemberDetailProps) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("test");
  const [userBirthDay, setUserBirthDay] = useState("");
  return (
    <div className="w-4/5 relative">
      <div className="flex items-center">
        <img className="w-24 mr-5" src="/PoppinSymbol.png" alt="" />
        <div className="text-2xl font-bold mr-5">{nickName}</div>
        {focus && (
          <div className="px-[14px] bg-[#EF4452] text-white text-sm rounded-full whitespace-nowrap">
            집중관리
          </div>
        )}
      </div>
      <div className="flex flex-col mb-12">
        <MemberDetailInput
          title={"닉네임"}
          value={nickName}
          placeholder="닉네임"
        />
        <MemberDetailInput
          title={"아이디"}
          value={userId}
          placeholder="poppin2024@naver.com"
        />
        <MemberDetailInput
          title={"생년월일"}
          value={userBirthDay}
          placeholder="0000.00.00"
        />
      </div>
      <div className="flex flex-col w-full ">
        <div className="font-semibold mb-5">
          <button onClick={() => navigate(`/writeReview/${userId}`)}>
            작성 후기 확인하기
          </button>
        </div>
        <div className="flex items-center mb-5">
          <button className="font-semibold mr-4">숨겨진 후기 갯수</button>
          <div className="text-gray-400 text-sm">2개</div>
        </div>
      </div>
      <button className="absolute right-0 bottom-10 bg-LoginBtn text-white px-10 py-2 rounded-full">
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default MemberDetail;
