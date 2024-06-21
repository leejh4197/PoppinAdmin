import { formattedDate } from "../common/FormUtil";

type OverallPopupListType = {
  title: string;
  date: string;
  name: string;
  onClick: () => void;
};
const OverallPopupList = ({
  title,
  date,
  name,
  onClick,
}: OverallPopupListType) => {
  return (
    <div
      className="w-full px-8 py-6 border-b hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <div>[{title}]</div>
      <div className="flex justify-between">
        <div>등록 일시: {formattedDate(date)}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default OverallPopupList;
