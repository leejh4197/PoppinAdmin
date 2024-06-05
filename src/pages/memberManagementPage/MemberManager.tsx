import { useLocation } from "react-router-dom";
import MemberList from "../../components/memberManagement/MemberList";
import MemberDetail from "./MemberDetail";
import TitleText from "../../components/common/TitleText";

function MemberManager() {
  const location = useLocation();
  const state = location.state || {};
  const { nickName, focus } = state;
  return (
    <div className="flexCenter">
      <TitleText mainTitle="회원 관리" className="mb-10" />
      {nickName ? (
        <MemberDetail nickName={nickName} focus={focus} />
      ) : (
        <MemberList />
      )}
    </div>
  );
}

export default MemberManager;
