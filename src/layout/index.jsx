import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="pt-[110px] h-[2000px] pr-5 pl-[250px] text-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
