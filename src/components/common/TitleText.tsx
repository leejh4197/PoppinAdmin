type ContactTitleType = {
  subTitle?: string;
  className?: string;
  mainTitle: string;
};

function TitleText({ mainTitle, subTitle, className }: ContactTitleType) {
  return (
    <div className={`flex items-center whitespace-nowrap ${className}`}>
      <h1 className="font-bold text-4xl mr-6">{mainTitle}</h1>
      {subTitle && <div className="h-6 w-[1px] bg-black mr-6" />}
      <div className="text-gray-400">{subTitle}</div>
    </div>
  );
}

export default TitleText;
