import { SetStateAction } from "react";
import DropDownCategory from "../common/DropDownCategory";
import DropDownAge from "../common/DropDownAge";

type CategoryType = {
  name: string;
  value: string;
};
type OverallPopupInputType = {
  title: string;
  value?: string | null | number;
  placeholder: string;
  essential: boolean;
  subTitle?: string;
  setManagerEmail?: React.Dispatch<SetStateAction<string>>;
  setCompanyName?: React.Dispatch<SetStateAction<string>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setCategory?: React.Dispatch<SetStateAction<CategoryType>>;
  setCateActive?: React.Dispatch<SetStateAction<boolean>>;
  cateActive?: boolean | undefined;
  category?: { name: string; value: string };
  setPossibleAge?: React.Dispatch<SetStateAction<CategoryType>>;
  setAgeActive?: React.Dispatch<SetStateAction<boolean>>;
  ageActive?: boolean | undefined;
  possibleAge?: { name: string; value: string };
};
const OverallPopupInput = ({
  title,
  value,
  placeholder,
  essential,
  subTitle,
  cateActive,
  category,
  ageActive,
  possibleAge,
  onChange,
  onClick,
  setCategory,
  setCateActive,
  setPossibleAge,
  setAgeActive,
}: OverallPopupInputType) => {
  return (
    <div className={`w-full mb-12`}>
      <div
        className={`mb-2 text-[22px] ${subTitle ? "flex items-center" : ""}`}
      >
        {title}
        {essential && (
          <span className={`text-red-500 ${subTitle ? "mr-2" : ""}`}>*</span>
        )}
        <div className="text-sm">{subTitle}</div>
      </div>
      {title === "카테고리" || title === "이용 가능 연령" ? (
        <button
          className={`w-full flex justify-between items-center px-9 py-4 bg-[#F2F4F6] rounded-full outline-LoginBtn`}
          onClick={onClick}
        >
          <div>
            {category && category.value
              ? category.value
              : possibleAge && possibleAge.value
              ? possibleAge.value
              : title}
          </div>
          <img
            className={`w-4 h-4 arrowAnimation ${
              cateActive ? "-rotate-180" : ""
            }`}
            src="/grayArrow.svg"
            alt=""
          />
        </button>
      ) : (
        <input
          className={`w-full px-9 py-4 bg-[#F2F4F6] rounded-full outline-LoginBtn`}
          value={value !== null ? value : ""}
          placeholder={placeholder}
          type="text"
          onChange={onChange}
        />
      )}
      {title === "카테고리" && cateActive && (
        <DropDownCategory
          setCategory={setCategory}
          setCateActive={setCateActive}
        />
      )}
      {title === "이용 가능 연령" && ageActive && (
        <DropDownAge
          setAgeActive={setAgeActive}
          setPossibleAge={setPossibleAge}
        />
      )}
    </div>
  );
};

export default OverallPopupInput;
