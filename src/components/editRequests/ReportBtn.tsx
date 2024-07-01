type ReportBtnType = {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  textClass?: string;
};

const ReportBtn = ({
  title,
  onClick,
  className,
  textClass,
  disabled,
}: ReportBtnType) => {
  return (
    <div className={`flex justify-end`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-10 py-3 rounded-full font-bold ${
          textClass ? textClass : "text-white"
        } bg-LoginBtn ${className} disabled:bg-gray-300`}
      >
        {title}
      </button>
    </div>
  );
};

export default ReportBtn;
