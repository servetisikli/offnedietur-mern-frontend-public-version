import React, { useState, useContext } from "react";
import RequestContext from "../../context/RequestContext";

const RequestForm = () => {
  const { createRequest } = useContext(RequestContext);

  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    organization_name: "",
    current_website: "",
    activity_area: "",
    project_goals: "",
    target_audience: "",
    special_requirements: "",
    site_assets: "",
    reference_websites: "",
    design_preferences: "",
    domain_hosting: "",
    extra_notes: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRequest(formData);
      setSuccess(true);
      setFormData({
        contact_name: "",
        contact_email: "",
        organization_name: "",
        current_website: "",
        activity_area: "",
        project_goals: "",
        target_audience: "",
        special_requirements: "",
        site_assets: "",
        reference_websites: "",
        design_preferences: "",
        domain_hosting: "",
        extra_notes: "",
      });
    } catch (error) {
      console.error("Failed to create request:", error);
    }
  };

  const isTextArea = (key) => {
    const textAreaFields = [
      "activity_area",
      "project_goals",
      "target_audience",
      "special_requirements",
      "design_preferences",
      "domain_hosting",
      "extra_notes",
      "site_assets",
    ];
    return textAreaFields.includes(key);
  };

  const labels = {
    contact_name: "Kontaktname",
    contact_email: "Kontakt E-Mail",
    organization_name: "Organisationsname",
    current_website: "Aktuelle Website",
    activity_area: "Aktivitätsbereich",
    project_goals: "Projektziele",
    target_audience: "Zielgruppe",
    special_requirements: "Besondere Anforderungen",
    site_assets: "Site-Grafiken und -Inhalte",
    reference_websites: "Referenzwebsites",
    design_preferences: "Designpräferenzen",
    domain_hosting: "Domain-Hosting",
    extra_notes: "Zusätzliche Notizen",
  };

  const descriptions = {
    grundinformationen:
      "Grundlegende Informationen zum Projekt werden benötigt, um einen ersten Überblick zu erhalten.",
    projektdetails:
      "Genauere Angaben können gemacht werden, um das Projekt besser zu beschreiben.",
    inhalt:
      "Es wird abgefragt, ob Inhalte, Designideen oder eine Domain und Hosting vorhanden sind.",
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto ">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold text-gray-900">
              Grundinformationen
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {descriptions.grundinformationen}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {[
                "contact_name",
                "contact_email",
                "organization_name",
                "current_website",
                "activity_area",
              ].map((key) => (
                <div key={key} className="sm:col-span-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-900"
                  >
                    {labels[key]}{" "}
                    {[
                      "contact_name",
                      "contact_email",
                      "organization_name",
                    ].includes(key) && <span className="text-red-500">*</span>}
                  </label>
                  <div className="mt-2">
                    {isTextArea(key) ? (
                      <textarea
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        rows={3}
                        required={[
                          "contact_name",
                          "contact_email",
                          "organization_name",
                        ].includes(key)}
                        className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    ) : (
                      <input
                        type={key === "contact_email" ? "email" : "text"}
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        required={[
                          "contact_name",
                          "contact_email",
                          "organization_name",
                        ].includes(key)}
                        className="block w-full rounded-md bg-white px-3 py-2 text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold text-gray-900">
              Projektdetails
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {descriptions.projektdetails}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {["project_goals", "target_audience", "special_requirements"].map(
                (key) => (
                  <div key={key} className="sm:col-span-4">
                    <label
                      htmlFor={key}
                      className="block text-sm font-medium text-gray-900"
                    >
                      {labels[key]}
                    </label>
                    <div className="mt-2">
                      {isTextArea(key) ? (
                        <textarea
                          id={key}
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          rows={3}
                          className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      ) : (
                        <input
                          type="text"
                          id={key}
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold text-gray-900">
              Inhalt, Gestaltung und weitere Aspekte
            </h2>
            <p className="mt-1 text-sm text-gray-600">{descriptions.inhalt}</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {[
                "site_assets",
                "reference_websites",
                "design_preferences",
                "domain_hosting",
                "extra_notes",
              ].map((key) => (
                <div key={key} className="sm:col-span-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-900"
                  >
                    {labels[key]}
                  </label>
                  <div className="mt-2">
                    {isTextArea(key) ? (
                      <textarea
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    ) : (
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-2 text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900">
            Abbrechen
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Einreichen
          </button>
        </div>
        {success && (
          <div className="mt-4 p-4 text-green-700 bg-green-100 rounded-md">
            Ihr Antrag wurde erfolgreich eingereicht!
          </div>
        )}
      </form>
    </div>
  );
};

export default RequestForm;
