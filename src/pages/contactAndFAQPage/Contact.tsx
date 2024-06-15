import { useNavigate } from "react-router-dom";
import ContactList from "../../components/contactAndFAQ/faqManagement/ContactList";
import TitleText from "../../components/common/TitleText";
import useGetFaqList from "../../queries/faq/useGetFaqList";
import useDeleteFaq from "../../queries/faq/useDeleteFaq";

function Contact() {
  const navigate = useNavigate();
  const { data: faqList } = useGetFaqList();
  const deleteFaqMutation = useDeleteFaq();
  const handleFaqDeleteClick = (faqId: string) => {
    deleteFaqMutation.mutate(faqId);
  };

  return (
    <div className="flexCenter w-4/5">
      <div className="flex justify-between items-center mb-10">
        <TitleText mainTitle="문의하기/FAQ 관리" subTitle="자주 묻는 질문" />
        <div
          onClick={() => navigate("/writeContact")}
          className="cursor-pointer whitespace-nowrap px-14 py-5 rounded-full bg-[#0EB5F9] text-white"
        >
          <button>자주 묻는 질문 추가하기</button>
        </div>
      </div>
      <div>
        {faqList?.map((el) => (
          <ContactList
            key={el.id}
            question={el.question}
            answer={el.answer}
            faqId={String(el.id)}
            onClick={() => handleFaqDeleteClick(String(el.id))}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
