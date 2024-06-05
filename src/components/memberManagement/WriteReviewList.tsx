import React, { useState } from "react";

function WriteReviewList() {
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
            <div className="font-bold">팝업명</div>
            <div className="flex">
              <div className="mr-4">방문일 : 2020.02.02</div>
              <div>작성일 : 2020.02.02</div>
            </div>
          </div>
          <img src="/Security.png" alt="" />
        </div>
        <div className="border rounded-md px-4 py-4 mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          consequatur dolorem error expedita, blanditiis iure quasi architecto
          deleniti nisi quos cumque quibusdam laborum dolorum ut culpa, ab
          consequuntur molestiae similique.
        </div>
        <div className="w-28 h-28 mb-5">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src="/test.png"
            alt=""
            onClick={() => openModal("/test.png")}
          />
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
}

export default WriteReviewList;
