type ContactTitleType = {
  subTitle?: string;
  className?: string;
};

function ContactTitle({ subTitle, className }: ContactTitleType) {
  return (
    <div className={`flex items-center whitespace-nowrap ${className}`}>
      <h1 className="font-bold text-4xl mr-6">문의하기/FAQ관리</h1>
      <div className="h-6 w-[1px] bg-black mr-6" />
      <div className="text-gray-400">{subTitle}</div>
    </div>
  );
}

export default ContactTitle;
