import { useEffect, useRef, useState } from "react";
import MainLoginBanner from "../../components/login/MainLoginBanner";
import MainLoginBtn from "../../components/login/MainLoginBtn";
import MainLoginInput from "../../components/login/MainLoginInput";
import useLogin from "../../api/useLogin";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../auth/auth";
import Fireworks from "../../components/common/Firworks";
import CustomModal from "../../components/common/CustomModal";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFireworks, setShowFireworks] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const hiddenButtonRef = useRef<HTMLButtonElement>(null);

  const { login, response, success } = useLogin();

  const handleLoginBtnClick = async () => {
    setShowFireworks(true);
    await login(email, password);
  };
  const handleActiveEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email && password) {
      handleLoginBtnClick();
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      alert("이미 로그인 된 상태입니다.");
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    if (success) {
      localStorage.setItem("token", response?.data.data.accessToken);
      localStorage.setItem("refreshToken", response?.data.data.refreshToken);
      setModalActive(true);
    }
  }, [success, response]);
  return (
    <div className="w-full h-screen flex">
      <MainLoginBanner />
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <MainLoginInput
          title="아이디"
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          value={email}
          setValue={setEmail}
          keyDown={handleActiveEnter}
        />
        <MainLoginInput
          title="비밀번호"
          type="password"
          placeholder="영문,숫자,특수문자 8자 이상"
          value={password}
          setValue={setPassword}
          success={success}
          message={response?.data.error?.message}
          keyDown={handleActiveEnter}
        />
        {!success ? (
          <MainLoginBtn
            email={email}
            password={password}
            title="로그인"
            onClick={handleLoginBtnClick}
          />
        ) : (
          <Fireworks
            setShowFireworks={setShowFireworks}
            showFireworks={showFireworks}
          />
        )}
      </div>
      {modalActive && (
        <CustomModal
          setModalActive={setModalActive}
          hiddenButtonRef={hiddenButtonRef}
        />
      )}
    </div>
  );
}

export default Login;
