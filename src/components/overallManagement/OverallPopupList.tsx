import useFormattedDate from "../../hook/useFormattedDate";

type OverallPopupListType = {
  title: string;
  date: string;
  name: string;
};
const OverallPopupList = ({ title, date, name }: OverallPopupListType) => {
  const formattedDate = useFormattedDate(date);

  return (
    <div className="w-full px-8 py-6 border-b">
      <div>[{title}]</div>
      <div className="flex justify-between">
        <div>등록 일시: {formattedDate}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default OverallPopupList;
