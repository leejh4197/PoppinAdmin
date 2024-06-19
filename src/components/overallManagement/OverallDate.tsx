import React, { SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/customDate.css";
import { ko } from "date-fns/locale";

type OverAllDateType = {
  startDate: Date | null;
  endDate: Date | null;
  setEndDate: React.Dispatch<SetStateAction<Date | null>>;
  setStartDate: React.Dispatch<SetStateAction<Date | null>>;
};

const OverallDate = ({
  startDate,
  endDate,
  setEndDate,
  setStartDate,
}: OverAllDateType) => {
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && (!endDate || date > endDate)) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col mb-10">
      <div className="mb-2 text-[22px]">
        운영 기간 <span className="text-red-500">*</span>
      </div>
      <div className="flex w-full justify-between">
        <DatePicker
          className="datePicker focus:border border-LoginBtn"
          dateFormat="yyyy.MM.dd"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          locale={ko}
        />
        <DatePicker
          className="datePicker focus:border border-LoginBtn"
          dateFormat="yyyy.MM.dd"
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          locale={ko}
        />
      </div>
    </div>
  );
};

export default OverallDate;
