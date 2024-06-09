import { useNavigate } from "react-router-dom";

type RequstListTypes = {
  sub1: string;
  sub2: string;
  title: string;
  write: string;
  date: string;
  path: string;
  className?: string;
  progress?: string;
};

const PostList = ({
  title,
  write,
  date,
  path,
  sub1,
  sub2,
  progress,
}: RequstListTypes) => {
  const navigate = useNavigate();

  const handleBoardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    navigate(`/${path}/${value}`);
  };
  return (
    <button
      className={`flex items-center px-8 py-9 border-b w-full `}
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
            <div>{date}</div>
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