import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FiAlertTriangle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/api/request");
        setRequests(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const toggleSection = (requestId, section) => {
    setOpenSections((prev) => ({
      ...prev,
      [requestId]: {
        ...prev[requestId],
        [section]: !prev[requestId]?.[section],
      },
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

  const getStatusBadge = (status) => {
    const badges = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return badges[status] || badges.pending;
  };

  const sortedRequests = [...requests].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const handleNewRequest = () => {
    navigate("/dashboard/requests/new");
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Request Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your website requests
          </p>
        </div>

        {sortedRequests.length === 0 ? (
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-sm font-medium text-gray-900">No requests</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new request
            </p>
            <div className="mt-6">
              <button
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
                onClick={handleNewRequest}
              >
                New Request
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {sortedRequests.map((request) => (
              <div
                key={request._id}
                className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 space-y-6">
                  {/* Header with date and status */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {request.organization_name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(request.createdAt)}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                        request.status
                      )}`}
                    >
                      {request.status || "Pending"}
                    </span>
                  </div>

                  {/* Content Sections */}
                  <dl className="space-y-6 divide-y divide-gray-200">
                    {/* Grundinformationen - Always visible */}
                    <div className="pt-6 first:pt-0">
                      <div className="text-sm font-medium text-indigo-600 mb-3">
                        Grundinformationen
                      </div>
                      <div className="space-y-4">
                        {[
                          ["Kontaktname", request.contact_name],
                          ["Kontakt E-Mail", request.contact_email],
                          ["Organisationsname", request.organization_name],
                          ["Aktuelle Website", request.current_website],
                          ["Aktivitätsbereich", request.activity_area],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <dt className="text-sm font-medium text-gray-500">
                              {label}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projektdetails - Collapsible */}
                    <div className="pt-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() =>
                          toggleSection(request._id, "projektdetails")
                        }
                      >
                        <div className="text-sm font-medium text-indigo-600">
                          Projektdetails
                        </div>
                        {openSections[request._id]?.projektdetails ? (
                          <FiChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <FiChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <div
                        className={`space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${
                          openSections[request._id]?.projektdetails
                            ? "max-h-96 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {[
                          ["Projektziele", request.project_goals],
                          ["Zielgruppe", request.target_audience],
                          [
                            "Besondere Anforderungen",
                            request.special_requirements,
                          ],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <dt className="text-sm font-medium text-gray-500">
                              {label}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inhalt, Gestaltung und weitere Aspekte - Collapsible */}
                    <div className="pt-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection(request._id, "inhalt")}
                      >
                        <div className="text-sm font-medium text-indigo-600">
                          Inhalt, Gestaltung und weitere Aspekte
                        </div>
                        {openSections[request._id]?.inhalt ? (
                          <FiChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <FiChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <div
                        className={`space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${
                          openSections[request._id]?.inhalt
                            ? "max-h-96 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {[
                          ["Site-Grafiken und -Inhalte", request.site_assets],
                          ["Referenzwebsites", request.reference_websites],
                          ["Designpräferenzen", request.design_preferences],
                          ["Domain-Hosting", request.domain_hosting],
                          ["Zusätzliche Notizen", request.extra_notes],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <dt className="text-sm font-medium text-gray-500">
                              {label}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestList;
