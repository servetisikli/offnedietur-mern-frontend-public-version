import React, { useState, useEffect } from "react";
import { FaSpinner, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { format } from "date-fns";
import api from "../../services/api";

const AdminRequestPanel = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await api.get("/api/request/all");
        setRequests(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch requests");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center p-8">
        <FaSpinner className="animate-spin text-blue-600 text-2xl" />
      </div>
    );
  if (error)
    return <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>;
  if (requests.length === 0)
    return (
      <div className="p-6 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">Keine Anfragen vorhanden</p>
      </div>
    );

  const RequestField = ({ label, value }) => (
    <div className="mb-2">
      <span className="text-sm font-medium text-gray-500">{label}:</span>
      <span className="ml-2 text-sm text-gray-900">
        {value || "Keine Angabe"}
      </span>
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      <div className="divide-y divide-gray-200">
        {requests.map((request) => (
          <div key={request._id} className="transition-all duration-200">
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
              onClick={() =>
                setExpandedId(expandedId === request._id ? null : request._id)
              }
            >
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-lg text-gray-900">
                    {request.organization_name || "Keine Organisation"}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {format(new Date(request.createdAt), "dd.MM.yyyy HH:mm")}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{request.contact_name || "Kein Name"}</span>
                  <span>•</span>
                  <span>{request.contact_email || "Keine E-Mail"}</span>
                </div>
              </div>
              <div className="ml-4">
                {expandedId === request._id ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>
            </div>

            {expandedId === request._id && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <RequestField
                      label="Kontakt Name"
                      value={request.contact_name}
                    />
                    <RequestField
                      label="Kontakt E-Mail"
                      value={request.contact_email}
                    />
                    <RequestField
                      label="Organisation"
                      value={request.organization_name}
                    />
                    <RequestField
                      label="Aktuelle Website"
                      value={request.current_website}
                    />
                    <RequestField
                      label="Tätigkeitsbereich"
                      value={request.activity_area}
                    />
                    <RequestField
                      label="Projektziele"
                      value={request.project_goals}
                    />
                    <RequestField
                      label="Zielgruppe"
                      value={request.target_audience}
                    />
                    <RequestField
                      label="Besondere Anforderungen"
                      value={request.special_requirements}
                    />
                    <RequestField
                      label="Website Assets"
                      value={request.site_assets}
                    />
                    <RequestField
                      label="Referenz-Websites"
                      value={request.reference_websites}
                    />
                    <RequestField
                      label="Design-Präferenzen"
                      value={request.design_preferences}
                    />
                    <RequestField
                      label="Domain & Hosting"
                      value={request.domain_hosting}
                    />
                    <RequestField
                      label="Zusätzliche Notizen"
                      value={request.extra_notes}
                    />
                    <RequestField
                      label="Erstellt am"
                      value={format(
                        new Date(request.createdAt),
                        "dd.MM.yyyy HH:mm"
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRequestPanel;
