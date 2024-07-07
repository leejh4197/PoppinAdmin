import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { alertState } from "../../atom/alertState";

const CustomModal = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useRecoilState(alertState);

  const handleModalClick = () => {
    navigate(alert.navigateTo);
    setAlert({
      title: "",
      btnTitle: "",
      cancelBtn: "",
      show: false,
      navigateTo: "",
    });
  };
  const handleModalClickCancel = () => {
    setAlert({
      title: "",
      btnTitle: "",
      cancelBtn: "",
      show: false,
      navigateTo: "",
    });
  };

  if (!alert.show) return null;

  return (
    <div>
      <div className="absolute top-0 right-0 bg-black/10 w-full h-full z-40" />
      <div className="absolute centerPosition flex flex-col border px-20 py-10 bg-white border-gray-300 rounded-lg shadow-lg z-50">
        <div className="text-black font-bold mb-5">{alert.title}</div>
        {alert.btnTitle && !alert.cancelBtn && (
          <button
            className="bg-[#0EB5F9] text-white font-bold py-2 px-6 rounded-full hover:bg-LoginBtn/50 transition duration-300 ease-in-out focus:outline-none"
            onClick={handleModalClick}
          >
            {alert.btnTitle}
          </button>
        )}
        {alert.btnTitle && alert.cancelBtn && (
          <div>
            <button
              className="bg-LoginBtn text-white mr-2 font-bold py-2 px-6 rounded-full hover:bg-LoginBtn/50 transition duration-300 ease-in-out focus:outline-none"
              onClick={handleModalClick}
            >
              {alert.btnTitle}
            </button>
            <button
              className="bg-LoginBtn text-white font-bold py-2 px-6 rounded-full hover:bg-LoginBtn/50 transition duration-300 ease-in-out focus:outline-none"
              onClick={handleModalClickCancel}
            >
              {alert.cancelBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomModal;
