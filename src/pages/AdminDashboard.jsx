import React from "react";
import { FaTicketAlt, FaBell, FaCog, FaInbox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminCard = ({ title, icon: Icon, bgColor, onClick }) => (
  <button
    onClick={onClick}
    className={`${bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 w-full text-left cursor-pointer`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white text-sm font-medium opacity-90">{title}</p>
      </div>
      <div className="bg-white/20 p-3 rounded-lg">
        <Icon className="text-white text-xl" />
      </div>
    </div>
  </button>
);

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg">
              <FaCog className="text-gray-600 text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={() => navigate("/admin/settings")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FaCog />
            <span>Settings</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AdminCard
            title="Tickets"
            icon={FaTicketAlt}
            bgColor="bg-blue-600"
            onClick={() => navigate("/admin/tickets")}
          />
          <AdminCard
            title="Notifications"
            icon={FaBell}
            bgColor="bg-green-600"
            onClick={() => navigate("/admin/notifications")}
          />
          <AdminCard
            title="Requests"
            icon={FaInbox}
            bgColor="bg-purple-600"
            onClick={() => navigate("/admin/requests")}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
