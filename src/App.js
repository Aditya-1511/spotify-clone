import "./App.css";
import Footer from "./components/footer/Footer";
import LeftSidebarBottom from "./components/left_sidebar-bottom/LeftSidebarBottom";
import LeftSidebarTop from "./components/left_sidebar-top/LeftSidebarTop";
import RightSidebarBottom from "./components/right_sidebar-bottom/RightSidebarBottom";
import RightSidebarTop from "./components/right_sidebar-top/RightSidebarTop";

function App() {
  return (
    <div className="mainWrapper">
      <div className="main">
        <div className="lefSide">
          <LeftSidebarTop />
          <LeftSidebarBottom />
        </div>
        <div className="rightSide">
          <RightSidebarTop />
          <RightSidebarBottom />
        </div>
      </div>
      <div className="footer_main">
        <Footer />
      </div>
    </div>
  );
}

export default App;
