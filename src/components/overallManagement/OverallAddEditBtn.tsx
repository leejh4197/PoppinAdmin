import React from "react";

type OverallBtnType = {
  content: string;
  active?: boolean;
  onClick?: () => void;
};

const OverallAddEditBtn = ({ content, onClick }: OverallBtnType) => {
  return (
    <div className="flex">
      <button
        className="bg-LoginBtn px-14 py-3 text-white text-[27px] whitespace-nowrap rounded-full"
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};

export default OverallAddEditBtn;
