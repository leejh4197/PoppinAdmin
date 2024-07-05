import { useNavigate, useParams } from "react-router-dom";
import TitleText from "../../components/common/TitleText";
import EditReuestPost from "../../components/editRequests/EditReuestPost";
import useGetEditRequestCheck from "../../queries/editRequestManager/useGetEditRequestCheck";

function EditRequestsDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: editCheck } = useGetEditRequestCheck(id);
  return (
    <div className="flexCenter w-4/5 relative">
      <TitleText
        mainTitle="정보 수정 요청 관리"
        subTitle="팝핀 이용자의 팝업 정보 수정 요청 건이에요."
        className="mb-10"
      />
      <div className="flex items-center mb-10">
        <img
          className="w-24 mr-5"
          src={
            editCheck?.userImageUrl
              ? editCheck.userImageUrl
              : "/PoppinSymbol.png"
          }
          alt=""
        />
        <div className="flex flex-col">
          <div className="text-2xl font-bold mr-5">{editCheck?.nickname}</div>
          <div className="text-sm text-gray-300">{editCheck?.email}</div>
        </div>
      </div>
      <EditReuestPost editCheck={editCheck} />
      {!editCheck?.isExecuted && (
        <button
          className="absolute right-0 bottom-0 px-12 py-3 text-white bg-LoginBtn rounded-full font-bold"
          onClick={() => navigate(`/editRequestRegister/${id}`)}
        >
          정보 수정하기
        </button>
      )}
      {editCheck?.isExecuted && (
        <div className="w-full flex justify-center">
          <button
            className="mt-5 text-LoginBtn font-bold"
            onClick={() => navigate(`/editRequests`)}
          >
            목록으로가기
          </button>
        </div>
      )}
    </div>
  );
}

export default EditRequestsDetail;
