import { useState } from "react";
import { formattedDate } from "../common/FormUtil";

type WriteReviewListType = {
  popupName: string;
  visitedAt: string;
  createAt: string;
  content: string;
  imageUrl: string[];
  hiddenReview: boolean;
};

const WriteReviewList = ({
  popupName,
  createAt,
  visitedAt,
  content,
  hiddenReview,
  imageUrl,
}: WriteReviewListType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div>
      <div className="border-b mb-10">
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <div className="font-bold">{popupName}</div>
            <div className="flex">
              <div className="mr-4">방문일 : {formattedDate(visitedAt)}</div>
              <div>작성일 : {formattedDate(createAt)}</div>
            </div>
          </div>
          <img
            src={hiddenReview ? "/Security.png" : "/SecurityRelease.png"}
            alt=""
          />
        </div>
        <div className="border rounded-md px-4 py-4 mb-5">{content}</div>
        <div className="w-28 h-28 mb-5 flex ">
          {imageUrl.map((el, idx) => (
            <img
              key={idx}
              className="w-full h-full object-cover cursor-pointer mr-2 rounded-xl"
              src={el}
              alt=""
              onClick={() => openModal(el)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img src={modalImage} alt="" className="max-w-full max-h-full" />
            <button
              className="absolute right-0 text-white bg-black bg-opacity-50 rounded-full"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteReviewList;
