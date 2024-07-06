import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute text-3xl font-bold flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <img src="/LogoIcon.svg" className="mb-5 w-20 animate-bounce" />
        <div className="text-5xl mb-3 animate-bounce">404</div>
        <div className="animate-bounce">존재하지 않는 페이지 입니다.</div>
      </div>
      <button
        className="py-5 ml-10 font-bold flex items-center hover:bg-LoginBtn/10"
        onClick={() => navigate(-1)}
      >
        <img className="rotate-90 mr-2" src="/arrow.svg" alt="" />
        <div>뒤로가기</div>
      </button>
    </>
  );
};

export default NotFound;
