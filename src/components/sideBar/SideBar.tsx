import { useState } from "react";
import { sideBarContents } from "../../constants/sideBarContent";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showReportSubMenu, setShowReportSubMenu] = useState(false);

  return (
    <div className="flex flex-col">
      {sideBarContents.map((el, index) => (
        <div key={index}>
          {el.name === "문의하기/FAQ 관리" && (
            <button onClick={() => setShowContactSubMenu(!showContactSubMenu)}>
              {el.name}
            </button>
          )}
          {(el.name === "자주 묻는 질문" || el.name === "1:1 문의  ") &&
            showContactSubMenu && (
              <button onClick={() => navigate(el.path as string)}>
                {el.name}
              </button>
            )}
          {el.name === "신고 관리" && (
            <button onClick={() => setShowReportSubMenu(!showReportSubMenu)}>
              {el.name}
            </button>
          )}
          {(el.name === "팝업 신고" || el.name === "후기 신고") &&
            showReportSubMenu && (
              <button onClick={() => navigate(el.path as string)}>
                {el.name}
              </button>
            )}
          {el.name !== "문의하기/FAQ 관리" &&
            el.name !== "문의하기" &&
            el.name !== "FAQ" &&
            el.name !== "신고 관리" &&
            el.name !== "팝업 신고 관리" &&
            el.name !== "후기 신고 관리" && (
              <button onClick={() => navigate(el.path as string)}>
                {el.name}
              </button>
            )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
