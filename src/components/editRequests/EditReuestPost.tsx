import React from "react";

function EditReuestPost() {
  return (
    <div>
      <div className="font-bold text-xl">팝업1</div>
      <div className="text-sm text-gray-300 mb-2">작성일 : 2024.02.20</div>
      <div className="bg-gray-100 w-full p-4 rounded-lg mb-2">작성내용</div>
      <div className="flex">
        <img
          className="w-32 h-32 object-cover rounded-lg border"
          src="/Logo.png"
          alt=""
        />
        <img
          className="w-32 h-32 object-cover rounded-lg border"
          src="/Logo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default EditReuestPost;
