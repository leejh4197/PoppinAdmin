import { useNavigate } from "react-router-dom";
import ContactList from "../../components/contactAndFAQ/faqManagement/ContactList";
import ContactTitle from "../../components/contactAndFAQ/ContactTitle";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="flexCenter w-4/5">
      <div className="flex justify-between items-center mb-10">
        <ContactTitle />
        <div
          onClick={() => navigate("/writeContact")}
          className="cursor-pointer whitespace-nowrap px-14 py-5 rounded-full bg-[#0EB5F9] text-white"
        >
          <button>자주 묻는 질문 추가하기</button>
        </div>
      </div>
      <div>
        <ContactList
          question={"등록되어 있지 않은 새로운 팝업 이벤트를 발견 했어요."}
          answer={
            "'마이페이지'>'팝업 제보기하기'를 통해 이벤트의 정보를 주시면 POPPIN 담당자가 검토 후 등록하겠습니다."
          }
        />
      </div>
    </div>
  );
}

export default Contact;
