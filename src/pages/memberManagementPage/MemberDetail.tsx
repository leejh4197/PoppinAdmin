import MemberDetailInput from "../../components/memberManagement/MemberDetailInput";
import { useNavigate } from "react-router-dom";
import useGetUserDetail from "../../queries/memberManager/useGetUserDetail";

type MemberDetailProps = {
  id: string;
};

const MemberDetail = ({ id }: MemberDetailProps) => {
  const navigate = useNavigate();
  const { data: userDetail } = useGetUserDetail(id);
  return (
    <div className="w-4/5 relative">
      <div className="flex items-center">
        <img
          className="w-24 mr-5"
          src={`${
            userDetail?.userImageUrl
              ? userDetail?.userImageUrl
              : "/PoppinSymbol.png"
          }`}
          alt=""
        />
        <div className="text-2xl font-bold mr-5">{userDetail?.nickname}</div>
        {userDetail?.requiresSpecialCare && (
          <div className="px-[14px] bg-[#EF4452] text-white text-sm rounded-full whitespace-nowrap">
            집중관리
          </div>
        )}
      </div>
      <div className="flex flex-col mb-12">
        <MemberDetailInput
          title={"닉네임"}
          value={userDetail?.nickname || ""}
          placeholder="닉네임"
        />
        <MemberDetailInput
          title={"아이디"}
          value={userDetail?.email || ""}
          placeholder="poppin2024@naver.com"
        />
        <MemberDetailInput
          title={"생년월일"}
          value={userDetail?.birthDate || ""}
          placeholder="0000.00.00"
        />
      </div>
      <div className="flex flex-col w-full ">
        <div className="font-semibold mb-5">
          <button
            onClick={() =>
              navigate(`/writeReview/${userDetail?.id}`, {
                state: {
                  nickName: userDetail?.nickname,
                  email: userDetail?.email,
                  image: userDetail?.userImageUrl,
                },
              })
            }
          >
            작성 후기 확인하기
          </button>
        </div>
        <div className="flex items-center mb-5">
          <button className="font-semibold mr-4">숨겨진 후기 갯수</button>
          <div className="text-gray-400 text-sm">
            {userDetail?.hiddenReviewCount}개
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/memberManager")}
        className="absolute whitespace-nowrap right-0 bottom-10 bg-LoginBtn text-white px-10 py-2 rounded-full"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default MemberDetail;
