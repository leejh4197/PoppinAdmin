import React, { SetStateAction } from "react";
import { ageDummy } from "../../constants/ageDummy";

type CategoryType = {
  name: string;
  value: string;
};
type DropDownCategoryType = {
  setCategory?: React.Dispatch<SetStateAction<CategoryType>>;
  setCateActive?: React.Dispatch<SetStateAction<boolean>>;
  setPossibleAge?: React.Dispatch<SetStateAction<CategoryType>>;
  setAgeActive?: React.Dispatch<SetStateAction<boolean>>;
};
const DropDownAge = ({
  setCategory,
  setCateActive,
  setAgeActive,
  setPossibleAge,
}: DropDownCategoryType) => {
  const handleDropDownCateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget;
    if (setCateActive && setCategory) {
      setCategory({
        value: value,
        name: name,
      });
      setCateActive(false);
    } else if (setAgeActive && setPossibleAge) {
      setPossibleAge({
        value: value,
        name: name,
      });
      setAgeActive(false);
    }
  };
  return (
    <div className="w-full border rounded-2xl mt-2 animate-dropdown">
      {ageDummy.map((el, index) => (
        <button
          value={el.value}
          name={el.name}
          onClick={handleDropDownCateClick}
          disabled={index === 0 ? true : false}
          className={`bg-gray-50 px-5 py-2 flex flex-col w-full disabled:text-gray-400 ${
            index === ageDummy.length - 1 ? "rounded-b-2xl" : "border-b "
          } ${
            index === 0
              ? "rounded-t-2xl"
              : "hover:bg-gray-100 hover:text-LoginBtn  cursor-pointer"
          }`}
          key={index}
        >
          {el.value}
        </button>
      ))}
    </div>
  );
};

export default DropDownAge;
