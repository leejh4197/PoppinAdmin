type MemberDetailProps = {
  title: string;
  value: string;
  placeholder: string;
};

function MemberDetailInput({ title, value, placeholder }: MemberDetailProps) {
  return (
    <div className="mt-12 w-full">
      <div className="mb-2 font-semibold">{title}</div>
      <input
        className="pl-6 py-3 w-full bg-gray-100 rounded-full outline-none"
        readOnly
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default MemberDetailInput;
