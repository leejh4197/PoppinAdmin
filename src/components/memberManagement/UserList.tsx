type UserListProps = {
  nickName: string;
  email: string;
  requiresSpecialCare: boolean;
  handleMemberDetailClick: (nickName: string, focus: boolean) => void;
};
const UserList = ({
  nickName,
  email,
  requiresSpecialCare,
  handleMemberDetailClick,
}: UserListProps) => {
  return (
    <div className="flex items-center mb-5">
      <div className="text-xl mr-3">
        <button
          value={nickName}
          onClick={(e) =>
            handleMemberDetailClick(e.currentTarget.value, requiresSpecialCare)
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
