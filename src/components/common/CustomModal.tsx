import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ModalType = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  hiddenButtonRef: React.RefObject<HTMLButtonElement>;
};

const CustomModal = ({ setModalActive, hiddenButtonRef }: ModalType) => {
  const navigate = useNavigate();

  useEffect(() => {
    hiddenButtonRef.current?.focus();
  }, [hiddenButtonRef]);

  const handleModalClick = () => {
    navigate("/home");
    setModalActive(false);
  };

  return (
    <div>
      <div className="absolute top-0 right-0 bg-black/10 w-full h-full" />
      <div className="absolute centerPosition flex flex-col border px-20 py-10 bg-white border-gray-300 rounded-lg shadow-lg">
        <div className="text-black font-bold mb-5">로그인이 완료됐습니다!</div>
        <button
          ref={hiddenButtonRef}
          className="bg-[#0EB5F9] text-white font-bold py-2 px-6 rounded-full hover:bg-[#0da0d1] transition duration-300 ease-in-out focus:outline-none"
          onClick={handleModalClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
