import { useState } from "react";
import TitleText from "../../components/common/TitleText";
import usePostFaq from "../../queries/faq/usePostFaq";

function WriteContact() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { mutate } = usePostFaq(question, answer);
  const handleSubmit = () => {
    mutate();
  };

  const handleQnAChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "answer") {
      setAnswer(value);
    } else if (name === "question") {
      setQuestion(value);
    }
  };
  return (
    <div className="flexCenter w-4/5 whitespace-nowrap">
      <TitleText
        mainTitle="문의하기/FAQ 관리"
        subTitle="자주 묻는 질문 추가하기"
        className="mb-10"
      />
      <div className="w-full mb-12">
        <div className="mb-4 font-bold text-[27px]">질문 내용</div>
        <textarea
          className="p-5 w-full h-60 resize-none outline-none border rounded-xl"
          placeholder="Q에 해당하는 질문 내용입니다."
          name="question"
          value={question}
          onChange={handleQnAChange}
        />
      </div>
      <div className="w-full mb-5">
        <div className="mb-4 font-bold text-[27px] ">답변 내용</div>
        <textarea
          className="p-5 w-full h-60 resize-none outline-none border rounded-xl"
          placeholder="A에 해당하는 질문 내용입니다."
          name="answer"
          value={answer}
          onChange={handleQnAChange}
        />
      </div>
      <div className="text-gray-400 mb-20">
        •자주 묻는 질문 등록 시 정보의 수정은 불가합니다.
      </div>
      <div className="flex justify-end w-full mb-24">
        <button
          disabled={question === "" || answer === ""}
          className="px-16 py-5 rounded-full text-white font-bold bg-[#0EB5F9] disabled:bg-gray-200 disabled:text-black/30"
          onClick={handleSubmit}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default WriteContact;
