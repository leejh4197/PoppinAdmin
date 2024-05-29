type ContactListType = {
  question: string;
  answer: string;
};

function ContactList({ question, answer }: ContactListType) {
  return (
    <div className="bg-[#FAF4FC] px-6 py-9 w-[1040px] ">
      <div className="mb-9 ">Q .{question}</div>
      <div className="mb-9">A .{answer}</div>
      <div className="flex justify-center text-[#C37CD2]">
        <button>삭제하기</button>
      </div>
    </div>
  );
}

export default ContactList;
