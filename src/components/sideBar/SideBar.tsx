import { useEffect, useState } from "react";
import { sideBarContents } from "../../constants/sideBarContent";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../common/Spinner";
import useSpeech from "../../hook/useSpeech";
const navigationMap: { [key: string]: string } = {
  홈으로가줘: "/home",
  공지사항으로가줘: "/noticeManager",
  회원관리로가줘: "/memberManager",
  문의하기로가줘: "/contact",
  정보수정관리로가줘: "/editRequests",
  팝업신고로가줘: "/popupReport",
  후기신고로가줘: "/reviewReport",
  운영자제보로가줘: "/operatorReport",
  이용자제보로가줘: "/userReport",
  전체팝업관리로가줘: "/overallManager",
};

const SideBar = () => {
  const navigate = useNavigate();
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showReportSubMenu, setShowReportSubMenu] = useState(false);
  const [showPopupReportSubMenu, setShowPopupReportSubMenu] = useState(false);
  const [activeButton, setActiveButton] = useState("관리자");
  const [result, startListening] = useSpeech();

  useEffect(() => {
    const savedActiveButton = sessionStorage.getItem("activeButton");
    const savedShowContactSubMenu =
      sessionStorage.getItem("showContactSubMenu");
    const savedShowReportSubMenu = sessionStorage.getItem("showReportSubMenu");
    const savedShowPopupReportSubMenu = sessionStorage.getItem(
      "showPopupReportSubMenu"
    );

    if (savedActiveButton) {
      setActiveButton(savedActiveButton);
    }
    if (savedShowContactSubMenu) {
      setShowContactSubMenu(savedShowContactSubMenu === "true");
    }
    if (savedShowReportSubMenu) {
      setShowReportSubMenu(savedShowReportSubMenu === "true");
    }
    if (savedShowPopupReportSubMenu) {
      setShowPopupReportSubMenu(savedShowPopupReportSubMenu === "true");
    }
  }, []);

  useEffect(() => {
    const destination = navigationMap[result.text.split(" ").join("")];
    if (destination) {
      navigate(destination);
    }
  }, [navigate, result]);

  useEffect(() => {
    sessionStorage.setItem("activeButton", activeButton);
    sessionStorage.setItem("showContactSubMenu", showContactSubMenu.toString());
    sessionStorage.setItem("showReportSubMenu", showReportSubMenu.toString());
    sessionStorage.setItem(
      "showPopupReportSubMenu",
      showPopupReportSubMenu.toString()
    );
  }, [
    activeButton,
    showContactSubMenu,
    showReportSubMenu,
    showPopupReportSubMenu,
  ]);

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
      sessionStorage.removeItem("showContactSubMenu");
      sessionStorage.removeItem("activeButton");
      sessionStorage.removeItem("showPopupReportSubMenu");
      sessionStorage.removeItem("showReportSubMenu");
      alert("로그아웃 완료!");
      navigate("/");
    }
  };

  return (
    <>
      <div className="absolute items-center justify-center flex flex-col top-0 right-0">
        <div className="bg-LoginBtn text-white rounded-2xl px-5 mr-2">
          {result.text.split(" ").join("")}
        </div>
        <button className="cursor-pointer" onClick={startListening}>
          {result.state ? (
            <Spinner />
          ) : (
            <img className="w-10 h-10" src="/speech.png" alt="" />
          )}
        </button>
        <div className="grid grid-cols-1 max-2xl:hidden gap-4 mt-4">
          {Object.keys(navigationMap).map((command, index) => (
            <div
              key={index}
              className="command-box bg-gray-100 p-4 rounded shadow"
            >
              {command}
            </div>
          ))}
        </div>
      </div>
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
