import TitleText from "../../components/common/TitleText";
import EditReuestPost from "../../components/editRequests/EditReuestPost";

function EditRequestsDetail() {
  return (
    <div className="flexCenter w-4/5 relative">
      <TitleText
        mainTitle="정보 수정 요청 관리"
        subTitle="팝핀 이용자의 팝업 정보 수정 요청 건이에요."
        className="mb-10"
      />
      <div className="flex items-center">
        <img className="w-24 mr-5" src="/PoppinSymbol.png" alt="" />
        <div className="flex flex-col">
          <div className="text-2xl font-bold mr-5">성북구불주먹</div>
          <div className="text-sm text-gray-300">test@test.com</div>
        </div>
      </div>
      <EditReuestPost />
      <button className="absolute right-0 bottom-0 px-12 py-3 text-white bg-LoginBtn rounded-full font-bold">
        정보 수정하기
      </button>
    </div>
  );
}

export default EditRequestsDetail;
