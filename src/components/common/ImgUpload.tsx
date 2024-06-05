import React from "react";

type ImgUploadType = {
  title?: string;
  value: string[];
  limit?: string;
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ImgUpload({ value, setValue, onChange, title, limit }: ImgUploadType) {
  const handleDeleteImage = (id: number) => {
    setValue(value.filter((_, index) => index !== id));
  };
  return (
    <div className="mb-10">
      <div className="mb-2 text-[22px]">
        {title}
        <span className="text-red-500">*</span>
      </div>
      {limit && (
        <div className="text-sm text-gray-300">
          최대 {limit}장까지 업로드 가능합니다.
        </div>
      )}
      <div className="flex gap-x-4">
        <label htmlFor="input-file">
          <input
            className="hidden"
            type="file"
            id="input-file"
            accept="image/*"
            multiple
            onChange={onChange}
          />
          <div className="flex justify-center bg-gray-100 w-24 h-24 cursor-pointer">
            <img src="Plus.svg" alt="" />
          </div>
        </label>
        <div className="flex  gap-3">
          {value.map((image, id) => (
            <div className="mr-2 bg-gray-100 rounded-2xl border" key={id}>
              <img
                className="w-24 h-24 rounded-2xl"
                src={image}
                alt={`${image}-${id}`}
              />
              <button
                className="w-full flex justify-center bg-LoginBtn rounded-b-xl text-white font-bold text-sm"
                onClick={() => handleDeleteImage(id)}
              >
                지우기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImgUpload;
