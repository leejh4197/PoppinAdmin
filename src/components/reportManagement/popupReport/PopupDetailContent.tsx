import { ReportedPopupDetailDto } from "../../../types/popupReportDetailType";

const PopupDetailContent = ({
  address,
  addressDetail,
  availableAge,
  entranceFee,
  homepageLink,
  parkingAvailable,
  introduce,
  popupName,
  posterUrl,
  resvRequired,
  openDate,
  openTime,
  closeDate,
  closeTime,
}: ReportedPopupDetailDto) => {
  const ensureProtocol = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`; // 프로토콜이 없으면 https로 기본 설정
    }
    return url;
  };
  const handleCopyClipBoard = async (
    address: string,
    subAddress: string | null
  ) => {
    if (address && subAddress) {
      try {
        await navigator.clipboard.writeText(address + subAddress);
        alert("클립보드에 링크가 복사되었어요.");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(address);
        alert("클립보드에 링크가 복사되었어요.");
      } catch (err) {
        console.log(err);
      }
    }
  };

  // 수정된 homepageLink
  const validHomepageLink = ensureProtocol(homepageLink);
  // 클립보드 주소 복사

  return (
    <div className="flex mb-10">
      <div className="w-1/2 mr-5 h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={posterUrl ? posterUrl : "/Logo.png"}
          alt=""
        />
      </div>
      <div className="w-1/2 h-full">
        <div className="border-dashed border-b-4 border-gray-100">
          <div className="text-lg font-bold mb-2">{popupName}</div>
          <div className="text-sm mb-5">{introduce}</div>
          <div className="flex items-center justify-between mb-5">
            <button
              className="flex items-center px-3 py-1 text-LoginBtn border rounded-full border-LoginBtn text-sm"
              onClick={() =>
                window.open(validHomepageLink, "_blank", "noopener noreferrer")
              }
            >
              <img className="w-5 h-5 mr-1" src="/insta.png" />
              <div className="whitespace-nowrap">공식 인스타그램</div>
            </button>
            <div className="flex">
              <button
                className="w-5 h-5 mr-2"
                onClick={() => handleCopyClipBoard(address, addressDetail)}
              >
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
              {openDate} ~ {closeDate}
            </div>
            <div>
              <span className="text-[#C37CD2]">운영시간 : </span>
              {openTime} ~ {closeTime}
            </div>
            <div>
              <span className="text-[#C37CD2]">주소 : </span>
              {address}
              {addressDetail}
            </div>
          </div>
          <div className="text-sm whitespace-nowrap">
            <div>입장료 : {entranceFee}</div>
            <div>이용 가능 연령 : {availableAge}</div>
            <div>주차 안내 : {parkingAvailable ? "주차가능" : "주차불가"}</div>
            <div>
              예약안내 : {resvRequired ? "예약 필수" : "예약 필수 아님"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDetailContent;
