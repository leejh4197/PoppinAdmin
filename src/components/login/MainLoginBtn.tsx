type MainLogoBtnProps = {
  title: string;
};

const MainLoginBtn = ({ title }: MainLogoBtnProps) => {
  return (
    <button className={`bg-LoginBtn w-[514px] h-[78px] rounded-full mb-5`}>
      {title}
    </button>
  );
};

export default MainLoginBtn;
