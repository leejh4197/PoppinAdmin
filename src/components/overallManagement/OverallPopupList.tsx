import { useEffect, useState } from "react";

type OverallPopupListType = {
  title: string;
  date: string;
  name: string;
};
const OverallPopupList = ({ title, date, name }: OverallPopupListType) => {
  // const [customDate, setCustomDate] = useState("");
  // console.log(date);
  // useEffect(() => {
  //   const divideDate = date.split("T");
  //   console.log(divideDate);
  //   console.log(parseInt(divideDate[1]));
  //   setCustomDate(divideDate[0] + String(Math.floor(Number(divideDate[1]))));
  // }, []);

  return (
    <div className="w-full px-8 py-6 border-b">
      <div>[{title}]</div>
      <div className="flex justify-between">
        <div>등록 일시: {date}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default OverallPopupList;
