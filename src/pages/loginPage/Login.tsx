import { useState } from "react";
import MainLoginBanner from "../../components/login/MainLoginBanner";
import MainLoginBtn from "../../components/login/MainLoginBtn";
import MainLoginInput from "../../components/login/MainLoginInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        />
        <MainLoginInput
          title="비밀번호"
          type="password"
          placeholder="영문,숫자,특수문자 8자 이상"
          value={password}
          setValue={setPassword}
        />
        <MainLoginBtn email={email} password={password} title="로그인" />
      </div>
    </div>
  );
}

export default Login;
