import { filterDropDownList } from "../../constants/managerDummys";

type DropDownProps = {
  handleDropDownClick: (content: string) => void;
};

const CustomDropDown = ({ handleDropDownClick }: DropDownProps) => {
  return (
    <div className="absolute">
      <div className="">
        {filterDropDownList.map((el, index) => (
          <button
            onClick={(e) => handleDropDownClick(e.currentTarget.value)}
            className={`flex justify-center p-3 border w-full bg-white hover:bg-gray-100 cursor-pointer whitespace-nowrap ${
              index === 0 ? "rounded-t-xl" : ""
            } ${index === 3 ? "rounded-b-xl" : ""}`}
            key={index}
            value={el}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomDropDown;
