import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/layout/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrubs";

function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Sabit */}
      <Navbar />

      <Breadcrumbs />

      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer Sabit */}
      <Footer className="mt-auto" />
    </div>
  );
}

export default AdminLayout;
