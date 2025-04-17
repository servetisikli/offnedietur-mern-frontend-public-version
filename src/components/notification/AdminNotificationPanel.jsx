import React, { useState } from "react";
import api from "../../services/api";

const AdminNotifications = () => {
  const [formData, setFormData] = useState({
    user: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/notifications", formData);
      setSuccess(true);
      setFormData({ user: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        {success && (
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-700">Notification sent successfully!</p>
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-900">Send Notification</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={(e) =>
                setFormData({ ...formData, user: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {loading ? "Sending..." : "Send Notification"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminNotifications;
