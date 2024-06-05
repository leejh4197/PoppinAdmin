import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import useLocation from "../../hook/useLocation";

type AddressType = {
  address: string;
  zonecode: string;
};

const OverallAddress = () => {
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailAddress, setDetailAdress] = useState("");
  const location = useLocation(address);
  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data: AddressType) => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = (state: string) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAdress(event.target.value);
  };

  return (
    <div>
      <div className="text-[22px]">
        주소 <span className="text-red-500">*</span>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between w-full mb-5">
            <input
              className="w-2/3 mr-5 py-4 px-9 bg-[#F2F4F6] rounded-full outline-none"
              readOnly
              defaultValue={address}
            />
            <button
              className="bg-[#0EB5F9] text-[22px] px-9 py-4 whitespace-nowrap rounded-full text-white"
              type="button"
              onClick={toggleHandler}
            >
              우편 번호 검색
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="w-full flex pt-5 justify-center border border-[#0EB5F9]">
            <DaumPostcode
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        )}
        <div className="mb-12">
          <div className="text-[22px] mb-2">
            상세주소 <span className="text-red-500">*</span>
          </div>
          <input
            placeholder="상세 주소를 입력해주세요."
            className="py-4 px-9 bg-[#F2F4F6] rounded-full w-full outline-LoginBtn"
            value={detailAddress}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default OverallAddress;
