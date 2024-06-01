type RequstListTypes = {
  title: string;
  write: string;
  date: string;
  className?: string;
};

const ModificationRequestList = ({ title, write, date }: RequstListTypes) => {
  return (
    <div className={`flex flex-col px-8 py-9 border-b w-full`}>
      <div className="mb-3">{title}</div>
      <div className="flex text-gray-400">
        <div className="mr-7">작성자:{write}</div>
        <div>작성일시:{date}</div>
      </div>
    </div>
  );
};

export default ModificationRequestList;
