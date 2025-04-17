import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Profile from "./pages/Profile";
import About from "./pages/About";
import ScrollToTop from "./components/common/ScrollToTop";
import EmailVerified from "./components/common/EmailVerified";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/Resetpassword";
import Contact from "./pages/Contact";
import NotificationList from "./components/notification/NotificationList";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import RequestForm from "./components/request/RequestForm";
import RequestList from "./components/request/RequestList";
import TicketList from "./components/ticket/TicketList";
import TicketForm from "./components/ticket/TicketForm";
import AdminTicketPanel from "./components/ticket/AdminTicketPanel";
import Start from "./pages/Start.jsx";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "./router/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminNotifications from "./components/notification/AdminNotificationPanel.jsx";
import AdminRequestPanel from "./components/request/AdminRequestPanel.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="/email-verified" element={<EmailVerified />} />
          <Route path="login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="start" element={<Start />} />
        </Route>

        {/* User Dashboard routes */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="notifications" element={<NotificationList />} />
          <Route path="requests" element={<RequestList />} />
          <Route path="requests/new" element={<RequestForm />} />
          <Route path="tickets" element={<TicketList />} />
          <Route path="tickets/new" element={<TicketForm />} />
        </Route>

        {/* Admin Dashboard routes */}
        <Route
          path="admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="tickets" element={<AdminTicketPanel />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="requests" element={<AdminRequestPanel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
