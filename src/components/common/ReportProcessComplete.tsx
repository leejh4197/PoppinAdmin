import { useNavigate } from "react-router-dom";
import { formattedDate } from "./FormUtil";

type ReportProcessType = {
  admin: string;
  content: string;
  executedAt: string;
  routeUrl: string;
};

const ReportProcessComplete = ({
  admin,
  content,
  executedAt,
  routeUrl,
}: ReportProcessType) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mb-24 border-t">
        <div className="text-gray-700 mt-10 mb-2 text-lg font-bold">
          신고 처리 내용
        </div>
        <div className="text-gray-400 mb-2 text-sm ">담당자: {admin}</div>
        <div className="text-gray-400 mb-2 text-sm ">
          처리일시: {formattedDate(executedAt)}
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-3 mt-2">
          {content ? content : "처리 내용 없음"}
        </div>
      </div>
      <button
        className="w-full flex justify-center text-LoginBtn font-bold"
        onClick={() => navigate(`/${routeUrl}`)}
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default ReportProcessComplete;
