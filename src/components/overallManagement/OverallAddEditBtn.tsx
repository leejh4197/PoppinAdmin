import React from "react";

type OverallBtnType = {
  content: string;
  active?: boolean;
};

const OverallAddEditBtn = ({ content }: OverallBtnType) => {
  return (
    <div className="flex">
      <button className="bg-LoginBtn px-14 py-3 text-white text-[27px] whitespace-nowrap rounded-full">
        {content}
      </button>
    </div>
  );
};

export default OverallAddEditBtn;
