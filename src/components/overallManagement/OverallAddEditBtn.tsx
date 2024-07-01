type OverallBtnType = {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const OverallAddEditBtn = ({
  content,
  onClick,
  disabled,
  className,
}: OverallBtnType) => {
  return (
    <div className="flex">
      <button
        className={`bg-LoginBtn px-10 py-1 text-[20px] whitespace-nowrap rounded-full disabled:bg-gray-300 ${
          className ? className : "text-white"
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    </div>
  );
};

export default OverallAddEditBtn;
