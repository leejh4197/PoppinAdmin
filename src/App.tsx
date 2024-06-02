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
import { useEffect } from "react";
import { baseInstance } from "./api/instance";
import WriteContact from "./pages/contactAndFAQPage/WriteContact";
import NoticeManager from "./pages/noticePage/NoticeManager";
import PopUpRegister from "./pages/overallManagementPage/PopUpRegister";
import UserReport from "./pages/submissionManagementPage/UserReport";
import OperatorReprt from "./pages/submissionManagementPage/OperatorReprt";

function App() {
  // useEffect(() => {
  //   baseInstance
  //     .get("/api/v1/user/support/faqs")
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<SideBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/memberManager" element={<MemberManager />} />
          <Route path="/memberManager/:id" element={<MemberManager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/writeContact" element={<WriteContact />} />
          <Route path="/editRequests" element={<EditRequests />} />
          <Route path="/popupReport" element={<PopupReport />} />
          <Route path="/reviewReport" element={<ReviewReport />} />
          <Route path="/operatorReport" element={<OperatorReprt />} />
          <Route path="/userReport" element={<UserReport />} />
          <Route path="/noticeManager" element={<NoticeManager />} />
          <Route path="/overallManager" element={<OverallManger />} />
          <Route path="/popupRegister" element={<PopUpRegister />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
