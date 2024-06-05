import React from "react";

const PopupDetailContent = () => {
  return (
    <div className="flex mb-10">
      <div className="w-1/2 mr-5 h-[500px] bg-gray-100">이미지</div>
      <div className="w-1/2 h-full">
        <div className="border-dashed border-b-4 border-gray-100">
          <div className="text-lg font-bold mb-2">팝업1</div>
          <div className="text-sm mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ab
            eos architecto iusto vero fugiat, earum nostrum eveniet facere
            tenetur ex! Expedita libero quod facilis ducimus ipsam ipsum
            exercitationem illo!
          </div>
          <div className="flex items-center justify-between mb-5">
            <button className="flex items-center px-3 py-1 text-LoginBtn border rounded-full border-LoginBtn text-sm">
              <img className="w-5 h-5 mr-1" src="/insta.png" />
              <div className="whitespace-nowrap">공식 인스타그램</div>
            </button>
            <div className="flex">
              <button className="w-5 h-5 mr-2">
                <img className="w-full h-full" src="/map.svg" alt="" />
              </button>
              <button className="w-5 h-5 mr-2">
                <img className="w-full h-full" src="/Star.svg" alt="" />
              </button>
              <button className="w-5 h-5 mr-2">
                <img className="w-full h-full" src="/Share.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[#C37CD2] my-5 font-bold text-lg">상세 정보</div>
          <div className="mb-2 text-sm">
            <div>
              <span className="text-[#C37CD2]">기간 : </span>
              2020.20.02 ~ 2020.02.02
            </div>
            <div>
              <span className="text-[#C37CD2]">운영시간 : </span>
              2020.20.02 ~ 2020.02.02
            </div>
            <div>
              <span className="text-[#C37CD2]">주소 : </span>
              2020.20.02 ~ 2020.02.02
            </div>
          </div>
          <div className="text-sm whitespace-nowrap">
            <div>입장료 : 성인 13,000원 / 청소년 9,000</div>
            <div>이용 가능 연령 : 만 7세 이상</div>
            <div>주차 안내 : 티켓 소지 시 2시간 1000원 (주차공간 협소)</div>
            <div>예약안내 : 예약 필수</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDetailContent;
