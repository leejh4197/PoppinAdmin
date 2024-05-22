import { useState } from "react";
import { sideBarContents } from "../../constants/sideBarContent";
import { Outlet, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showReportSubMenu, setShowReportSubMenu] = useState(false);

  return (
    <>
      <div className="flex flex-col absolute pl-[200px] h-full pt-[160px]">
        <img className="w-8" src="Logo.png" />
        <div>
          <button className="font-bold py-8" onClick={() => navigate("/home")}>
            관리자1
          </button>
        </div>
        <div className="border-y">
          {sideBarContents.map((el, index) => (
            <div className="my-5" key={index}>
              {el.name === "문의하기/FAQ 관리" && (
                <button
                  onClick={() => setShowContactSubMenu(!showContactSubMenu)}
                >
                  {el.name}
                </button>
              )}
              {(el.name === "자주 묻는 질문" || el.name === "1:1 문의") &&
                showContactSubMenu && (
                  <button
                    className="text-gray-400"
                    onClick={() => navigate(el.path as string)}
                  >
                    {el.name}
                  </button>
                )}
              {el.name === "신고 관리" && (
                <button
                  onClick={() => setShowReportSubMenu(!showReportSubMenu)}
                >
                  {el.name}
                </button>
              )}
              {(el.name === "팝업 신고" || el.name === "후기 신고") &&
                showReportSubMenu && (
                  <button
                    className="text-gray-400"
                    onClick={() => navigate(el.path as string)}
                  >
                    {el.name}
                  </button>
                )}
              {el.name !== "문의하기/FAQ 관리" &&
                el.name !== "자주 묻는 질문" &&
                el.name !== "1:1 문의" &&
                el.name !== "신고 관리" &&
                el.name !== "팝업 신고" &&
                el.name !== "후기 신고" && (
                  <button onClick={() => navigate(el.path as string)}>
                    {el.name}
                  </button>
                )}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="my-5">앱 버전</div>
          <div>로그아웃</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
