import { useNavigate } from "react-router-dom";
import { formattedDate } from "./FormUtil";

type RequstListTypes = {
  id?: string;
  sub1: string;
  sub2: string;
  title: string;
  write: string;
  date: string;
  path: string;
  className?: string;
  progress?: string | null;
  clickPaging?: { name: string; value: string };
};

const PostList = ({
  id,
  title,
  write,
  date,
  path,
  sub1,
  sub2,
  progress,
  clickPaging,
}: RequstListTypes) => {
  const navigate = useNavigate();

  const handleBoardClick = () => {
    if (clickPaging?.value !== "EXECUTED") {
      navigate(`/${path}/${id}`);
    }
  };
  return (
    <button
      className={`flex items-center px-8 py-9 border-b w-full hover:bg-LoginBtn/10`}
      onClick={handleBoardClick}
      value={write}
    >
      <div className="w-full flex flex-col items-start">
        <div className="mb-3 whitespace-nowrap">{title}</div>
        <div className="flex text-gray-400">
          <div className="mr-7 flex">
            <div>{sub1}: </div>
            <div>{write}</div>
          </div>
          <div className="flex">
            <div>{sub2}: </div>
            <div>{formattedDate(date)}</div>
          </div>
        </div>
      </div>
      {progress && (
        <div className="whitespace-nowrap text-[#C37CD2] font-bold">
          {progress}
        </div>
      )}
    </button>
  );
};

export default PostList;
