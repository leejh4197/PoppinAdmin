import { useState } from "react";

type MainLoginInputProps = {
  title: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  success?: boolean | null;
  message?: string | null;
};

const MainLoginInput = ({
  title,
  type,
  placeholder,
  value,
  success,
  message,
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
          } ${success ? "mb-[64px]" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        {title === "비밀번호" && !success && (
          <div className="mb-[64px] text-[11px] text-red-500 font-semibold">
            <div>{message}</div>
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
