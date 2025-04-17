import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Sabit */}
      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer Sabit */}
      <Footer className="mt-auto" />
    </div>
  );
}

export default MainLayout;
