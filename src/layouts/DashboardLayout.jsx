import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/layout/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrubs";
import QuickActions from "../components/notification/QuickActions";

function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Sabit */}
      <Navbar />

      <Breadcrumbs />

      {/* Container with responsive padding */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <QuickActions navigate={navigate} />
        </div>
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer Sabit */}
      <Footer className="mt-auto" />
    </div>
  );
}

export default DashboardLayout;
