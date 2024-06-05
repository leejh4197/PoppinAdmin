import React from "react";

type ReportBtnType = {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const ReportBtn = ({ title, disabled, onClick, className }: ReportBtnType) => {
  return (
    <div className="flex justify-end w-full">
      <button
        onClick={onClick}
        className="px-10 py-3 rounded-full font-bold text-white mb-24 bg-LoginBtn"
      >
        {title}
      </button>
    </div>
  );
};

export default ReportBtn;
