import React from "react";

const LeadManagement = () => {
  const leads = [
    { id: 1, name: "Lead 1", email: "lead1@example.com", status: "Pending" },
    { id: 2, name: "Lead 2", email: "lead2@example.com", status: "Completed" },
    { id: 3, name: "Lead 3", email: "lead3@example.com", status: "In Progress" },
  ];

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Leads Management</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {leads.map((lead) => (
          <div key={lead.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">{lead.name}</h3>
            <p>{lead.email}</p>
            <span className={`inline-block mt-2 px-2 py-1 rounded text-sm ${lead.status === "Completed" ? "bg-green-500 text-white" : lead.status === "In Progress" ? "bg-yellow-500 text-white" : "bg-red-500 text-white"}`}>
              {lead.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadManagement;
