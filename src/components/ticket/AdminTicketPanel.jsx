import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import api from "../../services/api";

const AdminTicketPanel = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responseTexts, setResponseTexts] = useState({}); // Change to object
  const [activeTicket, setActiveTicket] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get("/api/tickets/all");
        setTickets(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleResponse = async (ticketId) => {
    try {
      await api.post(`/api/tickets/${ticketId}/respond`, {
        message: responseTexts[ticketId],
      });
      // Clear only the specific ticket's response text
      setResponseTexts((prev) => ({
        ...prev,
        [ticketId]: "",
      }));
      // Refresh tickets
      const response = await api.get("/api/tickets/all");
      setTickets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Support Tickets</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and respond to customer support tickets
          </p>
        </div>

        <div className="space-y-6">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{ticket.subject}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(ticket.createdAt).toLocaleString("de-DE")}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    ticket.status === "open"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {ticket.status === "open" ? "Offen" : "Geschlossen"}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">{ticket.message}</p>
                {ticket.responses && ticket.responses.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {ticket.responses.map((response, index) => (
                      <div
                        key={index}
                        className="pl-4 border-l-2 border-indigo-200 bg-gray-50 p-4 rounded-r-lg"
                      >
                        <p className="text-sm text-gray-600">
                          {response.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(response.createdAt).toLocaleString("de-DE")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {ticket.status === "open" && (
                <div className="mt-6">
                  <textarea
                    value={responseTexts[ticket._id] || ""}
                    onChange={(e) =>
                      setResponseTexts((prev) => ({
                        ...prev,
                        [ticket._id]: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ihre Antwort..."
                    rows={4}
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => handleResponse(ticket._id)}
                      disabled={!responseTexts[ticket._id]}
                      className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiSend className="mr-2" />
                      Antwort senden
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTicketPanel;
