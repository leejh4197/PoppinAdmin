import { useNavigate } from "react-router-dom";

type UserListProps = {
  nickName: string;
  userId: number;
  email: string;
  requiresSpecialCare: boolean;
};
const UserList = ({
  nickName,
  email,
  userId,
  requiresSpecialCare,
}: UserListProps) => {
  const navigate = useNavigate();
  const handleMemberDetailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    navigate(`/memberManager/${id}`);
  };
  return (
    <button
      className="flex w-full py-2 items-center whitespace-nowrap hover:bg-LoginBtn/10"
      id={String(userId)}
      onClick={handleMemberDetailClick}
    >
      <div className="text-xl mr-3">
        <div>{nickName}</div>
      </div>
      <div className="text-gray-400 mr-3">{email}</div>
      {requiresSpecialCare && (
        <div className="flex items-center text-sm bg-[#EF4452] text-white rounded-full px-2 h-[18px]">
          집중 관리
        </div>
      )}
    </button>
  );
};

export default UserList;
