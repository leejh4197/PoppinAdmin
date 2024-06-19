import { SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type OverAllTimeType = {
  startTime: Date | null;
  endTime: Date | null;
  setEndTime: React.Dispatch<SetStateAction<Date | null>>;
  setStartTime: React.Dispatch<SetStateAction<Date | null>>;
};

const OverallTime = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: OverAllTimeType) => {
  const handleStartTimeChange = (date: Date | null) => {
    setStartTime(date);
    if (date && (!endTime || date > endTime)) {
      setEndTime(date);
    }
  };

  const handleEndTimeChange = (date: Date | null) => {
    setEndTime(date);
  };
  const generateTimes = () => {
    const times = [];
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    while (date.getDate() === new Date().getDate()) {
      times.push(new Date(date));
      date.setMinutes(date.getMinutes() + 15);
    }
    return times;
  };

  const times = generateTimes();

  return (
    <div className="flex flex-col mb-10">
      <div className="mb-2 text-[22px]">
        운영 기간 <span className="text-red-500">*</span>
      </div>
      <div className="flex w-full justify-between">
        <DatePicker
          className="datePicker focus:border border-LoginBtn"
          selected={startTime}
          onChange={handleStartTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="운영 시작"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          includeTimes={times}
        />
        <DatePicker
          className="datePicker focus:border border-LoginBtn"
          selected={endTime}
          onChange={handleEndTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="운영 종료"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          includeTimes={times.filter((time) => !startTime || time >= startTime)}
        />
      </div>
    </div>
  );
};

export default OverallTime;
