import ContactTitle from "../../components/contactAndFAQ/ContactTitle";

function WriteContact() {
  return (
    <div className="flexCenter w-4/5">
      <ContactTitle subTitle="자주 묻는 질문 추가하기" className="mb-10" />
      <div className="w-[1140px] mb-12">
        <div className="mb-4 font-bold text-[27px]">질문 내용</div>
        <textarea
          className="p-5 w-full h-60 resize-none outline-none border rounded-xl"
          placeholder="Q에 해당하는 질문 내용입니다."
        />
      </div>
      <div className="w-[1140px] mb-5">
        <div className="mb-4 font-bold text-[27px]">답변 내용</div>
        <textarea
          className="p-5 w-full h-60 resize-none outline-none border rounded-xl"
          placeholder="A에 해당하는 질문 내용입니다."
        />
      </div>
      <div className="whitespace-nowrap text-gray-400 mb-20">
        •자주 묻는 질문 등록 시 정보의 수정은 불가합니다.
      </div>
      <div className="flex justify-end w-[1140px] mb-24">
        <button className="px-16 py-5 rounded-full text-white font-bold bg-[#0EB5F9]">
          추가하기
        </button>
      </div>
    </div>
  );
}

export default WriteContact;
