import "./App.css";
import Footer from "./components/footer/Footer";
import LeftSidebarBottom from "./components/left_sidebar-bottom/LeftSidebarBottom";
import LeftSidebarTop from "./components/left_sidebar-top/LeftSidebarTop";
import RightSidebarBottom from "./components/right_sidebar-bottom/RightSidebarBottom";
import RightSidebarTop from "./components/right_sidebar-top/RightSidebarTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <div className="main">
          <div className="lefSide">
            <Routes>
              <Route path="/" element={<LeftSidebarTop />} />
            </Routes>
            <Routes>
              <Route path="/" element={<LeftSidebarBottom />} />
            </Routes>
          </div>
          <div className="rightSide">
            <Routes>
              <Route path="/" element={<RightSidebarTop />} />
            </Routes>
            <Routes>
              <Route path="/" element={<RightSidebarBottom />} />
            </Routes>
          </div>
        </div>
        <div className="footer_main">
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </div>
        <div className="signup">
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <div className="login">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
