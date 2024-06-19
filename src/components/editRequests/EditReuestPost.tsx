import React from "react";
import useFormattedDate from "../../hook/useFormattedDate";

function EditReuestPost({ editCheck }) {
  console.log("넘김", editCheck);
  return (
    <div>
      {editCheck && (
        <>
          <div className="font-bold text-xl">팝업1</div>
          <div className="text-sm text-gray-300 mb-2">
            작성일 : {useFormattedDate(editCheck.createdAt)}
          </div>
          <div className="bg-gray-100 w-full p-4 rounded-lg mb-2">
            {editCheck.content}
          </div>
          <div className="flex">
            {editCheck.images.map((el, index) => (
              <img
                key={index}
                className="w-32 h-32 object-cover rounded-lg border"
                src={el}
                alt=""
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EditReuestPost;
