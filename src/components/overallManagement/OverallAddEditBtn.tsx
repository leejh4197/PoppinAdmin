type OverallBtnType = {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
};

const OverallAddEditBtn = ({ content, onClick, disabled }: OverallBtnType) => {
  return (
    <div className="flex">
      <button
        className="bg-LoginBtn px-10 py-1 text-white text-[20px] whitespace-nowrap rounded-full disabled:bg-gray-300"
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    </div>
  );
};

export default OverallAddEditBtn;
