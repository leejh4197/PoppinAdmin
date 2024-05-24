type UserListProps = {
  nickName: string;
  email: string;
  requiresSpecialCare: boolean;
};
const UserList = ({ nickName, email, requiresSpecialCare }: UserListProps) => {
  return (
    <div className="flex items-center">
      <div className="text-xl mr-3">{nickName}</div>
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
