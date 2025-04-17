import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSend, FiCheck, FiX } from "react-icons/fi";
import api from "../../services/api";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/tickets", formData);
      setShowSuccess(true);
      setFormData({ subject: "", message: "" }); // Reset form
      setShowSuccess(true); // Show success message
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        {showSuccess && (
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiCheck className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Ticket erfolgreich erstellt!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Ihr Ticket wurde erfolgreich gesendet.</p>
                  <button
                    onClick={() => navigate("/dashboard/tickets")}
                    className="mt-2 text-green-700 underline hover:text-green-900"
                  >
                    Zurück zu meinen Tickets
                  </button>
                </div>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100"
                  >
                    <span className="sr-only">Schließen</span>
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Neues Ticket</h2>
          <p className="mt-1 text-sm text-gray-500">
            Erstellen Sie ein neues Support-Ticket
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Betreff
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Geben Sie einen Betreff ein"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nachricht
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    maxLength={500}
                    rows={6}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Beschreiben Sie Ihr Anliegen"
                    required
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/tickets")}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Ticket senden
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
