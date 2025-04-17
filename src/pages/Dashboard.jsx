import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { MdOutlinePreview, MdDashboard } from "react-icons/md";
import { FaPlusCircle, FaTicketAlt, FaList } from "react-icons/fa";
import { BiListUl } from "react-icons/bi";
import { IoNotificationsOutline, IoTimeOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const EmptyState = ({ message }) => (
  <div className="text-center py-8">
    <p className="text-gray-500">{message}</p>
  </div>
);

const ActionButton = ({ icon: Icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 p-4 bg-${color}-50 text-${color}-700 rounded-lg hover:bg-${color}-100 transition-colors border border-${color}-200`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const DashboardCard = ({
  title,
  icon: Icon,
  color,
  children,
  viewAllLink,
  navigate,
  fullWidth,
}) => (
  <div
    className={`bg-white rounded-xl shadow-sm p-6 ${fullWidth ? "w-full" : ""}`}
  >
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <Icon className={`text-${color}-600 text-xl`} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <button
        onClick={() => navigate(viewAllLink)}
        className={`text-${color}-600 hover:text-${color}-700 flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer`}
      >
        <span>Alle anzeigen</span>
        <MdOutlinePreview />
      </button>
    </div>
    {children}
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [recentRequests, setRecentRequests] = useState([]);
  const [recentTickets, setRecentTickets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      try {
        const [requestsRes, ticketsRes, notificationsRes] = await Promise.all([
          api.get("/api/request"),
          api.get("/api/tickets/my-tickets"),
          api.get(`/api/notifications/${user._id}`),
        ]);

        const sortedRequests = [...requestsRes.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        const sortedTickets = [...ticketsRes.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        const sortedNotifications = [...notificationsRes.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        setRecentRequests(sortedRequests);
        setRecentTickets(sortedTickets);
        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Dashboard-Datenabruf-Fehler:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Aktuelle Updates */}
      <div>
        <DashboardCard
          title="Aktuelle Updates"
          icon={IoNotificationsOutline}
          color="blue"
          viewAllLink="notifications"
          navigate={navigate}
          fullWidth
        >
          <div className="space-y-3">
            {notifications.length === 0 ? (
              <EmptyState message="Keine aktuellen Updates" />
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification._id}
                  className={`p-4 rounded-lg ${
                    notification.read
                      ? "bg-gray-50"
                      : "bg-blue-50 border-l-4 border-blue-500"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 text-${
                        notification.read ? "gray" : "blue"
                      }-500 flex-shrink-0`}
                    >
                      <IoNotificationsOutline size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 break-words">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                        <IoTimeOutline />
                        <span>{formatDate(notification.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DashboardCard>
      </div>

      <div className="space-y-8">
        {/* Aktuelle Anfragen */}
        <div>
          <DashboardCard
            title="Aktuelle Anfragen"
            icon={BiListUl}
            color="indigo"
            viewAllLink="requests"
            navigate={navigate}
          >
            <div className="space-y-3">
              {recentRequests.length === 0 ? (
                <EmptyState message="Keine aktuellen Anfragen" />
              ) : (
                recentRequests.map((request) => (
                  <div
                    key={request._id}
                    className="p-4 rounded-lg bg-white border border-gray-200 hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-indigo-500 flex-shrink-0">
                        <BiListUl size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 break-words">
                          {request.organization_name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                          <IoTimeOutline />
                          <span>{formatDate(request.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </DashboardCard>
        </div>

        {/* Aktuelle Tickets */}
        <div>
          <DashboardCard
            title="Aktuelle Tickets"
            icon={FaTicketAlt}
            color="green"
            viewAllLink="tickets"
            navigate={navigate}
          >
            <div className="space-y-3">
              {recentTickets.length === 0 ? (
                <EmptyState message="Keine aktuellen Tickets" />
              ) : (
                recentTickets.map((ticket) => (
                  <div
                    key={ticket._id}
                    className="p-4 rounded-lg bg-white border border-gray-200 hover:border-green-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-green-500 flex-shrink-0">
                        <FaTicketAlt size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-medium text-gray-800 break-words">
                            {ticket.subject}
                          </h3>
                          {ticket.status && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                ticket.status === "open"
                                  ? "bg-yellow-50 text-yellow-700"
                                  : ticket.status === "closed"
                                  ? "bg-gray-50 text-gray-700"
                                  : "bg-green-50 text-green-700"
                              }`}
                            >
                              {ticket.status === "open"
                                ? "Offen"
                                : ticket.status === "closed"
                                ? "Geschlossen"
                                : "In Bearbeitung"}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                          <IoTimeOutline />
                          <span>{formatDate(ticket.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
