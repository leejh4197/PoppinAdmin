type ContactListType = {
  question: string;
  answer: string;
  faqId: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function ContactList({ question, answer, faqId, onClick }: ContactListType) {
  return (
    <div className="bg-[#FAF4FC] px-6 py-9 w-full mb-3">
      <div className="mb-9 ">Q .{question}</div>
      <div className="mb-9">A .{answer}</div>
      <div className="flex justify-center text-[#C37CD2]">
        <button id={faqId} onClick={onClick}>
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default ContactList;
