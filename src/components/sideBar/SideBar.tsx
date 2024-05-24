import { useState } from "react";
import { sideBarContents } from "../../constants/sideBarContent";
import { Outlet, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showReportSubMenu, setShowReportSubMenu] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (name: string, path?: string) => {
    setActiveButton(name);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <div className="flex flex-col absolute pl-[200px] h-full pt-[160px]">
        <img className="w-8" src="Logo.png" alt="Logo" />
        <div>
          <button
            className={`font-bold py-8 ${
              activeButton === "관리자1" ? "font-bold" : ""
            }`}
            onClick={() => handleClick("관리자1", "/home")}
          >
            관리자1
          </button>
        </div>
        <div className="border-y">
          {sideBarContents.map((el, index) => (
            <div className="my-5" key={index}>
              {el.name === "문의하기/FAQ 관리" && (
                <button
                  className={`flex items-center ${
                    activeButton === el.name ? "font-bold" : ""
                  }`}
                  onClick={() => setShowContactSubMenu(!showContactSubMenu)}
                >
                  <span className="mr-2">{el.name}</span>
                  <img
                    src="/arrow.svg"
                    className={`arrowAnimation ${
                      showContactSubMenu ? "rotate-180" : ""
                    }`}
                    alt="Arrow"
                  />
                </button>
              )}
              {(el.name === "자주 묻는 질문" || el.name === "1:1 문의") &&
                showContactSubMenu && (
                  <button
                    className={`text-gray-400 ${
                      activeButton === el.name ? "font-bold text-black" : ""
                    }`}
                    onClick={() => handleClick(el.name, el.path)}
                  >
                    {el.name}
                  </button>
                )}
              {el.name === "신고 관리" && (
                <button
                  className={`flex items-center ${
                    activeButton === el.name ? "font-bold" : ""
                  }`}
                  onClick={() => setShowReportSubMenu(!showReportSubMenu)}
                >
                  <span className="mr-2">{el.name}</span>
                  <img
                    src="/arrow.svg"
                    className={`arrowAnimation ${
                      showReportSubMenu ? "rotate-180" : ""
                    }`}
                    alt="Arrow"
                  />
                </button>
              )}
              {(el.name === "팝업 신고" || el.name === "후기 신고") &&
                showReportSubMenu && (
                  <button
                    className={`text-gray-400 ${
                      activeButton === el.name ? "font-bold text-black" : ""
                    }`}
                    onClick={() => handleClick(el.name, el.path)}
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
                  <button
                    className={activeButton === el.name ? "font-bold" : ""}
                    onClick={() => handleClick(el.name, el.path)}
                  >
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
