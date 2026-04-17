import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FF]">
      <div className="w-11/12 max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;