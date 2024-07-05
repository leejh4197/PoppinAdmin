type UserListProps = {
  nickName: string;
  userId: number;
  email: string;
  requiresSpecialCare: boolean;
  handleMemberDetailClick: (nickName: string, focus: boolean) => void;
};
const UserList = ({
  nickName,
  email,
  userId,
  requiresSpecialCare,
  handleMemberDetailClick,
}: UserListProps) => {
  return (
    <div className="flex items-center mb-5 whitespace-nowrap hover:bg-gray-200">
      <div className="text-xl mr-3">
        <button
          id={String(userId)}
          value={nickName}
          onClick={(e) =>
            handleMemberDetailClick(e.currentTarget.id, requiresSpecialCare)
          }
        >
          {nickName}
        </button>
      </div>
      <div className="text-gray-400 mr-3">{email}</div>
      {requiresSpecialCare && (
        <div className="flex items-center text-sm bg-[#EF4452] text-white rounded-full px-2 h-[18px]">
          집중 관리
        </div>
      )}
    </div>
  );
};

export default UserList;
