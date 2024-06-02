type MainLogoBtnProps = {
  title: string;
  email: string;
  password: string;
};

const MainLoginBtn = ({ title, email, password }: MainLogoBtnProps) => {
  return (
    <button
      className={`bg-LoginBtn w-1/2 h-12 rounded-full mb-5 font-bold text-white disabled:bg-gray-200 disabled:text-black/30 `}
      disabled={email === "" || password === ""}
    >
      {title}
    </button>
  );
};

export default MainLoginBtn;
