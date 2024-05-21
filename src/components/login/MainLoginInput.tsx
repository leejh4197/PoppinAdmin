import { useState } from "react";

type MainLoginTitleProps = {
  title: string;
  type: string;
  placeholder: string;
};

const MainLoginInput = ({ title, type, placeholder }: MainLoginTitleProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="mb-[27px] font-bold">{title}</div>
      {title === "아이디" ? (
        <input
          type={type}
          className="outline-none border-b w-[514px] mb-[64px]"
          placeholder={placeholder}
        />
      ) : (
        <div className="relative">
          <input
            type={passwordVisible ? "text" : type}
            className="outline-none border-b w-[514px] mb-[64px]"
            placeholder={placeholder}
          />
          <button onClick={handlePasswordVisibleClick}>
            {passwordVisible ? (
              <img className="absolute right-0 top-0" src="/ActiveEye.svg" />
            ) : (
              <img className="absolute right-0 top-0" src="/Eye.svg" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default MainLoginInput;
