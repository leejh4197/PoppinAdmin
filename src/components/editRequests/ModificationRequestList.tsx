import { useNavigate } from "react-router-dom";

type RequstListTypes = {
  title: string;
  write: string;
  date: string;
  className?: string;
};

const ModificationRequestList = ({ title, write, date }: RequstListTypes) => {
  const navigate = useNavigate();

  const handleBoardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    navigate(`/editRequests/${value}`);
  };
  return (
    <button
      className={`flex flex-col px-8 py-9 border-b w-full `}
      onClick={handleBoardClick}
      value={write}
    >
      <div className="mb-3 whitespace-nowrap">{title}</div>
      <div className="flex text-gray-400">
        <div className="mr-7 flex">
          <div>작성자: </div>
          <div>{write}</div>
        </div>
        <div className="flex">
          <div>작성일: </div>
          <div>{date}</div>
        </div>
      </div>
    </button>
  );
};

export default ModificationRequestList;
