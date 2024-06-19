type OverallPopupBtnType = {
  title: string;
  value: string;
  btnArray?: string[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  boolBtnArray?: { name: string; value: string }[];
};

const OverallPopupBtn = ({
  title,
  value,
  btnArray,
  boolBtnArray,
  onClick,
}: OverallPopupBtnType) => {
  return (
    <div className="w-full mb-12">
      <div className="mb-2 text-[22px]">
        {title}
        <span className="text-red-500">*</span>
      </div>
      {btnArray ? (
        <div className="flex w-full justify-between">
          {btnArray.map((el, index) => (
            <div className="w-full" key={index}>
              <button
                className={`w-[calc(100%-10px)] py-4 border rounded-full ${
                  el === value ? "border border-LoginBtn" : ""
                }`}
                value={el}
                name={title}
                onClick={onClick}
              >
                {el}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex w-full justify-between">
          {boolBtnArray &&
            boolBtnArray.map((el, index) => (
              <div className="w-full" key={index}>
                <button
                  className={`w-[calc(100%-10px)] py-4 border rounded-full ${
                    el.name === value ? "border border-LoginBtn" : ""
                  }`}
                  value={el.name}
                  name={title}
                  onClick={onClick}
                >
                  {el.value}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default OverallPopupBtn;
