type MainLogoBtnProps = {
  title: string;
  email?: string;
  password?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const MainLoginBtn = ({
  title,
  email,
  password,
  className,
  onClick,
}: MainLogoBtnProps) => {
  return (
    <button
      className={`bg-LoginBtn w-1/2 h-12 rounded-full mb-5 font-bold text-white disabled:bg-gray-200 disabled:text-black/30 ${className}`}
      disabled={email === "" || password === ""}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MainLoginBtn;
