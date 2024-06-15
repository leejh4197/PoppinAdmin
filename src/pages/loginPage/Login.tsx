import { useEffect, useState } from "react";
import MainLoginBanner from "../../components/login/MainLoginBanner";
import MainLoginBtn from "../../components/login/MainLoginBtn";
import MainLoginInput from "../../components/login/MainLoginInput";
import useLogin from "../../api/useLogin";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../auth/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, response, success } = useLogin();

  const handleLoginBtnClick = async () => {
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
  }, [navigate]);

  useEffect(() => {
    if (success) {
      localStorage.setItem("token", response?.data.data.accessToken);
      localStorage.setItem("refreshToken", response?.data.data.refreshToken);
      alert("로그인이 완료 됐습니다.");
      navigate("/home");
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
        {!loading ? (
          <MainLoginBtn
            email={email}
            password={password}
            title="로그인"
            onClick={handleLoginBtnClick}
          />
        ) : (
          <MainLoginBtn
            className="bg-gray-400 animate-bounce"
            title="로그인 중 ..."
          />
        )}
      </div>
    </div>
  );
}

export default Login;
