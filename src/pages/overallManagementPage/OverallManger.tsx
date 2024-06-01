import { useState } from "react";
import TitleText from "../../components/common/TitleText";
import OverallPopupList from "../../components/overallManagement/OverallPopupList";
import { useNavigate } from "react-router-dom";

function OverallManger() {
  const navigate = useNavigate();
  const [operateBtn, setOperateBtn] = useState("운영 중");
  const handleOperateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setOperateBtn(value);
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="전체 팝업 관리"
        subTitle="팝핀에 등록된 전체 팝업 목록이에요."
        className="mb-10"
      />
      <div className="relative flex items-center w-full mb-12">
        <input
          className="w-full py-4 pl-10 pr-4 rounded-full border border-gray-300"
          type="text"
          placeholder="텍스트를 입력하세요."
        />
        <img
          className="absolute right-3 w-5 h-5"
          src="/Search.png"
          alt="Search Icon"
        />
      </div>
      <div className="w-full flex justify-between items-center mb-2">
        <div className="flex">
          {["운영 중", "오픈 예정", "운영 종료"].map((el, index) => (
            <div
              key={index}
              className={`${index === 0 || index === 1 ? "mr-3" : ""} ${
                operateBtn === el
                  ? "border border-[#0EB5F9] bg-[#0EB5F9] bg-opacity-10"
                  : ""
              } border rounded-full`}
            >
              <button
                value={el}
                className="px-[30px] py-3"
                onClick={handleOperateClick}
              >
                {el}
              </button>
            </div>
          ))}
        </div>
        <div>총130개</div>
      </div>
      <div>
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
        <OverallPopupList
          title="팝업1"
          date="2020.20.20.13:14"
          name="관리자1"
        />
      </div>
      <div className="fixed right-[200px] bottom-[67px] bg-[#0EB5F9] rounded-full shadow-gray-300 shadow-md">
        <button
          className="px-20 py-5 text-white"
          onClick={() => navigate("/popupRegister")}
        >
          팝업 등록하기
        </button>
      </div>
    </div>
  );
}

export default OverallManger;
