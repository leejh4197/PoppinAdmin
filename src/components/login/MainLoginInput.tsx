import { useState } from "react";

type MainLoginInputProps = {
  title: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const MainLoginInput = ({
  title,
  type,
  placeholder,
  value,
  setValue,
}: MainLoginInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-1/2">
      <div className="mb-[27px] font-bold">{title}</div>
      <div
        className={`relative ${title === "비밀번호" ? "flex flex-col" : ""}`}
      >
        <input
          type={title === "비밀번호" && passwordVisible ? "text" : type}
          className={`outline-none border-b w-full ${
            title === "아이디" ? "mb-[64px]" : "mb-2"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        {title === "비밀번호" && (
          <div className="mb-[64px] text-[11px] text-red-500 font-semibold">
            x 잘못 된 비밀번호 입니다.
          </div>
        )}
        {title === "비밀번호" && (
          <button onClick={handlePasswordVisibleClick}>
            <img
              className="absolute right-0 top-0 w-6"
              src={`${passwordVisible ? "/ActiveEye.svg" : "/Eye.svg"}`}
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainLoginInput;
