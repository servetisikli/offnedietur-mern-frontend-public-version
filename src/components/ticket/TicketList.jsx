import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
  FiAlertTriangle,
} from "react-icons/fi";
import api from "../../services/api";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openResponses, setOpenResponses] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get("/api/tickets/my-tickets");
        setTickets(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const toggleResponses = (ticketId) => {
    setOpenResponses((prev) => ({
      ...prev,
      [ticketId]: !prev[ticketId],
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-red-50 p-4 rounded-lg">
          <div className="flex">
            <FiAlertTriangle className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pagination calculations
  const sortedTickets = [...tickets].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = sortedTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  const totalPages = Math.ceil(sortedTickets.length / ticketsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Meine Tickets</h2>
          <p className="mt-1 text-sm text-gray-500">
            Verwalten Sie Ihre Support-Tickets
          </p>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-sm font-medium text-gray-900">Keine Tickets</h3>
            <p className="mt-1 text-sm text-gray-500">
              Erstellen Sie ein neues Ticket für Ihre Anfrage
            </p>
            <div className="mt-6">
              <button
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
                onClick={() => navigate("/dashboard/tickets/new")}
              >
                Neues Ticket
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {currentTickets.map((ticket) => (
                <div
                  key={ticket._id}
                  className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Existing ticket content */}
                  <div className="p-6 space-y-6">
                    {/* Header with date and status */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {ticket.subject}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(ticket.createdAt)}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ticket.status === "open"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {ticket.status === "open" ? "Offen" : "Geschlossen"}
                      </span>
                    </div>

                    {/* Message content */}
                    <div className="text-gray-600">{ticket.message}</div>

                    {/* Responses section */}
                    {ticket.responses && ticket.responses.length > 0 && (
                      <div className="border-t border-gray-200 pt-4">
                        <button
                          onClick={() => toggleResponses(ticket._id)}
                          className="flex items-center text-indigo-600 hover:text-indigo-800"
                        >
                          <span className="mr-2">
                            {ticket.responses.length} Antwort
                            {ticket.responses.length !== 1 ? "en" : ""}
                          </span>
                          {openResponses[ticket._id] ? (
                            <FiChevronUp className="w-5 h-5" />
                          ) : (
                            <FiChevronDown className="w-5 h-5" />
                          )}
                        </button>

                        {openResponses[ticket._id] && (
                          <div className="mt-4 space-y-4">
                            {[...ticket.responses]
                              .sort(
                                (a, b) =>
                                  new Date(b.createdAt) - new Date(a.createdAt)
                              )
                              .map((response, index) => (
                                <div
                                  key={index}
                                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500"
                                >
                                  <p className="text-gray-700">
                                    {response.message}
                                  </p>
                                  <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                                    <span>Admin Antwort</span>
                                    <span>
                                      {formatDate(response.createdAt)}
                                    </span>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center space-y-4 pt-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg flex items-center ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === index + 1
                          ? "bg-indigo-600 text-white"
                          : "text-gray-700 hover:bg-indigo-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg flex items-center ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Seite {currentPage} von {totalPages}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TicketList;
