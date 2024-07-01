type ReportProcessType = {
  admin: string;
  reportContent: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ReportProcessField = ({
  admin,
  reportContent,
  onChange,
}: ReportProcessType) => {
  return (
    <div>
      <div className="flex flex-col mb-24 border-t">
        <div className="text-gray-700 mt-10 mb-2 text-lg font-bold">
          신고 처리내용
        </div>
        <div className="text-gray-400 mb-2 text-sm ">담당자: {admin}</div>
        <textarea
          value={reportContent}
          placeholder="신고 처리 내용을 간략히 기재해주세요."
          onChange={onChange}
          className="border resize-none outline-none border-gray-200 rounded-lg px-3 py-3 mt-2"
        />
      </div>
    </div>
  );
};

export default ReportProcessField;
