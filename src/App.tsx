import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import SideBar from "./components/sideBar/SideBar";
import Login from "./pages/loginPage/Login";
import MemberManager from "./pages/memberManagementPage/MemberManager";
import Contact from "./pages/contactAndFAQPage/Contact";
import EditRequests from "./pages/editRequestsPage/EditRequests";
import PopupReport from "./pages/reportManagementPage/popupReportPage/PopupReport";
import ReviewReport from "./pages/reportManagementPage/reviewReportPage/ReviewReport";
import OverallManger from "./pages/overallManagementPage/OverallManger";
import WriteContact from "./pages/contactAndFAQPage/WriteContact";
import NoticeManager from "./pages/noticePage/NoticeManager";
import PopUpRegister from "./pages/overallManagementPage/PopUpRegister";
import UserReport from "./pages/submissionManagementPage/UserReport";
import OperatorReport from "./pages/submissionManagementPage/OperatorReport";
import WriteReview from "./pages/memberManagementPage/WriteReview";
import EditRequestsDetail from "./pages/editRequestsPage/EditRequestsDetail";
import PopupReportDetail from "./pages/reportManagementPage/popupReportPage/PopupReportDetail";
import ReviewReportDetail from "./pages/reportManagementPage/reviewReportPage/ReviewReportDetail";
import { isAuthenticated } from "./auth/auth";
import { ReactElement } from "react";
import EditRequestRegister from "./pages/editRequestsPage/EditRequestRegister";
import PopUpEdit from "./pages/overallManagementPage/PopupEdit";
import PopupReportEdit from "./pages/reportManagementPage/popupReportPage/PopupReportEdit";
import OperatorReportUpload from "./pages/submissionManagementPage/OperatorReportUpload";
import UserReportUpload from "./pages/submissionManagementPage/UserReportUpload";
import NotFound from "./pages/notFoundPage/NotFound";
import CustomModal from "./components/common/CustomModal";
import { useSetRecoilState } from "recoil";
import { alertState } from "./atom/alertState";

interface PrivateRouteProps {
  element: ReactElement;
}

function App() {
  const setAlert = useSetRecoilState(alertState);
  const PrivateRoute = ({ element }: PrivateRouteProps) => {
    if (!isAuthenticated()) {
      setAlert({
        title: "로그인이 필요합니다.",
        btnTitle: "확인",
        cancelBtn: "",
        show: true,
        navigateTo: "/",
      });
    } else {
      return element;
    }
  };

  return (
    <div className="h-full w-full">
      <CustomModal />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<SideBar />}>
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/memberManager"
            element={<PrivateRoute element={<MemberManager />} />}
          />
          <Route
            path="/memberManager/:id"
            element={<PrivateRoute element={<MemberManager />} />}
          />
          <Route
            path="/writeReview/:id"
            element={<PrivateRoute element={<WriteReview />} />}
          />
          <Route
            path="/contact"
            element={<PrivateRoute element={<Contact />} />}
          />
          <Route
            path="/writeContact"
            element={<PrivateRoute element={<WriteContact />} />}
          />
          <Route
            path="/editRequests"
            element={<PrivateRoute element={<EditRequests />} />}
          />
          <Route
            path="/editRequests/:id"
            element={<PrivateRoute element={<EditRequestsDetail />} />}
          />
          <Route
            path="/editRequestRegister/:id"
            element={<PrivateRoute element={<EditRequestRegister />} />}
          />
          <Route
            path="/popupReport"
            element={<PrivateRoute element={<PopupReport />} />}
          />
          <Route
            path="/popupReport/:id"
            element={<PrivateRoute element={<PopupReportDetail />} />}
          />
          <Route
            path="/popupReportEdit/:id"
            element={<PrivateRoute element={<PopupReportEdit />} />}
          />
          <Route
            path="/reviewReport"
            element={<PrivateRoute element={<ReviewReport />} />}
          />
          <Route
            path="/reviewReport/:id"
            element={<PrivateRoute element={<ReviewReportDetail />} />}
          />
          <Route
            path="/operatorReport"
            element={<PrivateRoute element={<OperatorReport />} />}
          />
          <Route
            path="/operatorReport/:id"
            element={<PrivateRoute element={<OperatorReportUpload />} />}
          />
          <Route
            path="/userReport"
            element={<PrivateRoute element={<UserReport />} />}
          />
          <Route
            path="/userReport/:id"
            element={<PrivateRoute element={<UserReportUpload />} />}
          />
          <Route
            path="/noticeManager"
            element={<PrivateRoute element={<NoticeManager />} />}
          />
          <Route
            path="/overallManager"
            element={<PrivateRoute element={<OverallManger />} />}
          />
          <Route
            path="/popupRegister"
            element={<PrivateRoute element={<PopUpRegister />} />}
          />
          <Route
            path="/popupEdit/:id"
            element={<PrivateRoute element={<PopUpEdit />} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
