import MainLoginBanner from "../../components/login/MainLoginBanner";
import MainLoginBtn from "../../components/login/MainLoginBtn";
import MainLoginInput from "../../components/login/MainLoginInput";

function Login() {
  return (
    <div className="w-full h-screen flex">
      <MainLoginBanner />
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <MainLoginInput
          title={"아이디"}
          type="email"
          placeholder="이메일 주소를 입력해주세요."
        />
        <MainLoginInput
          title={"비밀번호"}
          type="password"
          placeholder="영문,숫자,특수문자 8자 이상"
        />
        <MainLoginBtn title="로그인" />
        <div>
          <button className="border-r px-1 text-gray-400">
            비밀번호 재설정
          </button>
          <button className="px-1 text-gray-400">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
