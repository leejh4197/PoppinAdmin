import { useParams } from "react-router-dom";
import MemberList from "../../components/memberManagement/MemberList";
import MemberDetail from "./MemberDetail";
import TitleText from "../../components/common/TitleText";

function MemberManager() {
  const { id } = useParams();

  return (
    <div className="flexCenter">
      <TitleText mainTitle="회원 관리" className="mb-10" />
      {id ? <MemberDetail id={id} /> : <MemberList />}
    </div>
  );
}

export default MemberManager;
