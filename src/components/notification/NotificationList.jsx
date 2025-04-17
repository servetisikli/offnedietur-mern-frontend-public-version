import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { FiBell, FiInfo, FiMessageCircle } from "react-icons/fi";

const UserNotifications = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;

      try {
        const response = await api.get(`/api/notifications/${user._id}`);
        // Sort notifications by date, most recent first
        const sortedNotifications = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNotifications(sortedNotifications);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <FiBell className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Notifications
            </h2>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {notifications.length} Messages
          </span>
        </div>

        {/* Notifications List */}
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {notifications.length === 0 ? (
            <div className="p-6 text-center">
              <FiInfo className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                You don't have any notifications yet.
              </p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification._id}
                className={`p-4 hover:bg-gray-50 transition-colors duration-150 ${
                  notification.read ? "" : "border-l-4 border-indigo-500"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FiMessageCircle
                      className={`h-5 w-5 ${
                        notification.read ? "text-gray-400" : "text-indigo-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm ${
                        notification.read
                          ? "text-gray-600"
                          : "text-gray-900 font-medium"
                      }`}
                    >
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {new Date(notification.createdAt).toLocaleDateString(
                        "de-DE",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNotifications;
