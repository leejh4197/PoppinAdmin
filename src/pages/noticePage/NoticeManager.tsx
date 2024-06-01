import { useRef, useState } from "react";
import TitleText from "../../components/common/TitleText";

const NoticeManager = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadImgUrl, setUploadImgUrl] = useState<string | ArrayBuffer | null>(
    ""
  );

  const handleFileClick = () => {
    fileInputRef.current!.click();
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const uploadFile = files![0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };
  return (
    <div className="flexCenter w-4/5">
      <TitleText
        mainTitle="공지 등록"
        subTitle="공지를 등록해 주세요"
        className="mb-10"
      />
      <div>
        <div
          className="flex items-center justify-center h-[300px] w-[300px] bg-gray-100 rounded-md cursor-pointer mb-14"
          onClick={handleFileClick}
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <div className="flex flex-col items-center">
            <img src="/camera.png" className=" text-4xl w-14 h-14" />
            <div className="text-gray-400">이미지 업로드</div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="font-bold mb-4">제목</div>
          <input
            placeholder="제목을 입력해주세요"
            className="w-full border p-[18px] rounded-2xl "
            type="text"
          />
        </div>
        <div className="mb-20">
          <div className="font-bold mb-4">상세 내용</div>
          <textarea
            placeholder="상세 내용을 입력해주세요"
            className="w-full border resize-none h-56 p-[18px] rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full flex justify-end mb-20">
        <button className="px-32 py-5 bg-[#0EB5F9] rounded-full text-white">
          등록하기
        </button>
      </div>
    </div>
  );
};

export default NoticeManager;
