type MemberDetailProps = {
  title: string;
  value: string;
};

function MemberDetailInput({ title, value }: MemberDetailProps) {
  return (
    <div className="mt-12 w-4/5">
      <div className="mb-2 font-semibold">{title}</div>
      <input
        className="pl-6 py-3 w-full bg-gray-100 rounded-full outline-none"
        readOnly
        type="text"
        value={value}
      />
    </div>
  );
}

export default MemberDetailInput;
