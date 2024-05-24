import { useParams } from "react-router-dom";
import MemberList from "../../components/memberManagement/MemberList";

function MemberManager() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flexCenter">
      <h1 className="font-bold text-4xl mb-10">회원관리</h1>
      {!id && <MemberList />}
    </div>
  );
}

export default MemberManager;
