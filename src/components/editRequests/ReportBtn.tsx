type ReportBtnType = {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const ReportBtn = ({ title, onClick, className }: ReportBtnType) => {
  return (
    <div className={`flex justify-end`}>
      <button
        onClick={onClick}
        className={`px-10 py-3 rounded-full font-bold text-white bg-LoginBtn ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default ReportBtn;
