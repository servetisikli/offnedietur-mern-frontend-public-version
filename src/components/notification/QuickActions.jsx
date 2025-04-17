import React from "react";
import { FaList, FaPlusCircle, FaTicketAlt } from "react-icons/fa";
import { BiListUl } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

const ActionButton = ({ icon: Icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center justify-center gap-3 p-5 
      bg-white hover:bg-${color}-50 
      text-gray-700 hover:text-${color}-700 
      rounded-xl shadow-sm hover:shadow-md
      transition-all duration-200 ease-in-out
      border border-gray-100 hover:border-${color}-200
      group cursor-pointer
    `}
  >
    <div
      className={`
      p-2 rounded-lg bg-${color}-50 
      group-hover:bg-${color}-100
      transition-colors duration-200
      cursor-pointer
    `}
    >
      <Icon size={22} className={`text-${color}-600`} />
    </div>
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const QuickActions = ({ navigate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            <MdDashboard className="text-gray-600 text-xl" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Schnellzugriff
          </h2>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2 
    transition-all duration-200 ease-in-out cursor-pointer px-3 py-1.5 rounded-lg
    hover:bg-blue-50 border border-transparent hover:border-blue-100"
        >
          Dashboard
          <MdDashboard className="text-lg" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionButton
          icon={BiListUl}
          label="Alle Anfragen"
          onClick={() => navigate("requests")}
          color="indigo"
        />
        <ActionButton
          icon={FaPlusCircle}
          label="Neue Anfrage"
          onClick={() => navigate("requests/new")}
          color="indigo"
        />
        <ActionButton
          icon={FaTicketAlt}
          label="Alle Tickets"
          onClick={() => navigate("tickets")}
          color="green"
        />
        <ActionButton
          icon={FaPlusCircle}
          label="Neues Ticket"
          onClick={() => navigate("tickets/new")}
          color="emerald"
        />
      </div>
    </div>
  );
};

export default QuickActions;
