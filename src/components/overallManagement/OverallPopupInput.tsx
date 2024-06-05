type OverallPopupInputType = {
  title: string;
  value: string;
  placeholder: string;
  essential: boolean;
  subTitle?: string;
};
const OverallPopupInput = ({
  title,
  value,
  placeholder,
  essential,
  subTitle,
}: OverallPopupInputType) => {
  return (
    <div className="w-full mb-12">
      <div
        className={`mb-2 text-[22px] ${subTitle ? "flex items-center" : ""}`}
      >
        {title}
        {essential && (
          <span className={`text-red-500 ${subTitle ? "mr-2" : ""}`}>*</span>
        )}
        <div className="text-sm">{subTitle}</div>
      </div>
      <input
        className="w-full px-9 py-4 bg-[#F2F4F6] rounded-full outline-LoginBtn"
        value={value}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default OverallPopupInput;
