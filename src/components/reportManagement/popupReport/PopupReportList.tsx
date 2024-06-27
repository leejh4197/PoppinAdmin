import { useNavigate } from "react-router-dom";

type PopupReportType = {
  title: string;
  reporter: string;
  reportTime: string;
  path: string;
  reviewId: number;
};

function PopupReportList({
  title,
  reporter,
  reportTime,
  path,
  reviewId,
}: PopupReportType) {
  const navigate = useNavigate();
  return (
    <button
      className="border-b p-7 flex flex-col"
      value={title}
      onClick={() => navigate(`/${path}/${reviewId}`)}
    >
      <div className="font-bold text-lg mb-3">{title}</div>
      <div className="flex text-gray-400 text-sm">
        <div className="mr-5">신고자 : {reporter}</div>
        <div>신고일시 : {reportTime}</div>
      </div>
    </button>
  );
}

export default PopupReportList;
