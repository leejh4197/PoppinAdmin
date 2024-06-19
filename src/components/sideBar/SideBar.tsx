import { useState } from "react";
import { sideBarContents } from "../../constants/sideBarContent";
import { Outlet, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showReportSubMenu, setShowReportSubMenu] = useState(false);
  const [showPopupReportSubMenu, setShowPopupReportSubMenu] = useState(false);
  const [activeButton, setActiveButton] = useState("관리자");

  const contactButtons = ["문의하기/FAQ 관리", "자주 묻는 질문"];
  const reportsButtons = ["신고 관리", "팝업 신고", "후기 신고"];
  const popupReportsButtons = ["팝업 제보 관리", "운영자 제보", "이용자 제보"];
  const contactIsActive = contactButtons.includes(activeButton);
  const reportsIsActive = reportsButtons.includes(activeButton);
  const popupReportsIsActive = popupReportsButtons.includes(activeButton);

  const handleClick = (name: string, path?: string) => {
    if (name === "문의하기/FAQ 관리") {
      setActiveButton(name);
      setShowContactSubMenu(!showContactSubMenu);
    } else if (name === "신고 관리") {
      setActiveButton(name);
      setShowReportSubMenu(!showReportSubMenu);
    } else if (name === "팝업 제보 관리") {
      setActiveButton(name);
      setShowPopupReportSubMenu(!showPopupReportSubMenu);
    } else {
      setActiveButton(name);
    }
    if (path) {
      navigate(path);
    }
  };
  const handleLogOutClick = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      alert("로그아웃 완료!");
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex flex-col absolute pl-[200px] h-full pt-[160px] z-50">
        <img className="w-8" src="Logo.png" alt="Logo" />
        <div>
          <button
            className={`py-8 text-4xl ${
              activeButton === "관리자" ? "font-bold" : ""
            }`}
            onClick={() => handleClick("관리자", "/home")}
          >
            관리자
          </button>
        </div>
        <div className="border-y">
          {sideBarContents.map((el, index) => (
            <div className="my-5" key={index}>
              {el.name === "문의하기/FAQ 관리" && (
                <button
                  className={`flex items-center ${
                    contactIsActive && showContactSubMenu ? "font-bold" : ""
                  }`}
                  onClick={() => handleClick("문의하기/FAQ 관리")}
                >
                  <span className="mr-2">{el.name}</span>
                  <img
                    src="/arrow.svg"
                    className={`arrowAnimation ${
                      showContactSubMenu ? "-rotate-180" : ""
                    }`}
                    alt="Arrow"
                  />
                </button>
              )}
              {el.name === "자주 묻는 질문" && showContactSubMenu && (
                <button
                  className={` ${
                    activeButton === el.name
                      ? "font-bold text-LoginBtn"
                      : "text-gray-400"
                  } `}
                  onClick={() => handleClick(el.name, el.path)}
                >
                  {el.name}
                </button>
              )}
              {el.name === "신고 관리" && (
                <button
                  className={`flex items-center ${
                    reportsIsActive && showReportSubMenu ? "font-bold" : ""
                  }`}
                  onClick={() => handleClick("신고 관리")}
                >
                  <span className="mr-2">{el.name}</span>
                  <img
                    src="/arrow.svg"
                    className={`arrowAnimation ${
                      showReportSubMenu ? "-rotate-180" : ""
                    }`}
                    alt="Arrow"
                  />
                </button>
              )}
              {(el.name === "팝업 신고" || el.name === "후기 신고") &&
                showReportSubMenu && (
                  <button
                    className={`${
                      activeButton === el.name
                        ? "font-bold text-LoginBtn"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleClick(el.name, el.path)}
                  >
                    {el.name}
                  </button>
                )}
              {el.name === "팝업 제보 관리" && (
                <button
                  className={`flex items-center ${
                    popupReportsIsActive && showPopupReportSubMenu
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => handleClick("팝업 제보 관리")}
                >
                  <span className="mr-2">{el.name}</span>
                  <img
                    src="/arrow.svg"
                    className={`arrowAnimation ${
                      showPopupReportSubMenu ? "-rotate-180" : ""
                    }`}
                    alt="Arrow"
                  />
                </button>
              )}
              {(el.name === "운영자 제보" || el.name === "이용자 제보") &&
                showPopupReportSubMenu && (
                  <button
                    className={`${
                      activeButton === el.name
                        ? "font-bold text-LoginBtn"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleClick(el.name, el.path)}
                  >
                    {el.name}
                  </button>
                )}
              {el.name !== "문의하기/FAQ 관리" &&
                el.name !== "자주 묻는 질문" &&
                el.name !== "신고 관리" &&
                el.name !== "팝업 신고" &&
                el.name !== "후기 신고" &&
                el.name !== "팝업 제보 관리" &&
                el.name !== "운영자 제보" &&
                el.name !== "이용자 제보" && (
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
        <div className="flex flex-col items-start">
          <button className="my-5" onClick={handleLogOutClick}>
            로그아웃
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
