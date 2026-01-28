import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Risk {
  id: string;
  description: string;
  status:
    | "Under Mitigation"
    | "Threat"
    | "Opportunity"
    | "Pending Mitigation"
    | "New"
    | "Mitigated";
  type: "Threat" | "Opportunity";
  phase: string;
  department: string;
  inherentImpact: number;
  inherentWealth: number;
}

const riskData: Risk[] = [
  {
    id: "ERM-0310",
    description: "Integration of AI for predictive maintena...",
    status: "Under Mitigation",
    type: "Threat",
    phase: "Warranty",
    department: "Products: Projects",
    inherentImpact: 1,
    inherentWealth: 4,
  },
  {
    id: "ERM-0309",
    description: "Risk of loss from inadequate or failed str...",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Transit",
    department: "Commercial",
    inherentImpact: 3,
    inherentWealth: 1,
  },
  {
    id: "ERM-0308",
    description: "Development of offshore wind farms in...",
    status: "Under Mitigation",
    type: "Threat",
    phase: "Testing",
    department: "Mfg: Assembly",
    inherentImpact: 4,
    inherentWealth: 3,
  },
  {
    id: "ERM-0307",
    description: "Investment in research for advanced tur...",
    status: "Pending Mitigation",
    type: "Threat",
    phase: "Retention",
    department: "CS&QA: QA",
    inherentImpact: 5,
    inherentWealth: 5,
  },
  {
    id: "ERM-0306",
    description: "Adoption of hybrid energy systems com...",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Staffing",
    department: "CS&QA: QA-DBO",
    inherentImpact: 3,
    inherentWealth: 3,
  },
  {
    id: "ERM-0305",
    description: "Regulatory changes promoting renewab...",
    status: "New",
    type: "Threat",
    phase: "Retention",
    department: "Procurement",
    inherentImpact: 3,
    inherentWealth: 2,
  },
  {
    id: "ERM-0304",
    description: "Expansion of energy storage solutions f...",
    status: "Under Mitigation",
    type: "Threat",
    phase: "Staffing",
    department: "Finance",
    inherentImpact: 2,
    inherentWealth: 2,
  },
  {
    id: "ERM-0303",
    description: "Increased demand for sustainable eners...",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Warranty",
    department: "SCM: UBO",
    inherentImpact: 1,
    inherentWealth: 1,
  },
  {
    id: "ERM-0302",
    description: "Collaboration between governments an...",
    status: "Pending Mitigation",
    type: "Threat",
    phase: "Warranty",
    department: "Finance",
    inherentImpact: 5,
    inherentWealth: 5,
  },
  {
    id: "ERM-0301",
    description: "Growth in turbine efficiency through tur...",
    status: "Mitigated",
    type: "Opportunity",
    phase: "Staffing",
    department: "HR",
    inherentImpact: 2,
    inherentWealth: 2,
  },
  {
    id: "ERM-0300",
    description: "Emergence of smart grid technologies t...",
    status: "New",
    type: "Opportunity",
    phase: "Staffing",
    department: "Mfg: Subcontracting",
    inherentImpact: 2,
    inherentWealth: 1,
  },
  {
    id: "ERM-0299",
    description: "Focus on cybersecurity based renewabl...",
    status: "Under Mitigation",
    type: "Threat",
    phase: "Warranty",
    department: "Finance",
    inherentImpact: 1,
    inherentWealth: 1,
  },
  {
    id: "ERM-0298",
    description: "Integration of artificial intelligence in en...",
    status: "New",
    type: "Threat",
    phase: "Warranty",
    department: "HR",
    inherentImpact: 4,
    inherentWealth: 1,
  },
  {
    id: "ERM-0297",
    description: "Research into offshore floating tur...",
    status: "New",
    type: "Opportunity",
    phase: "Warranty",
    department: "Finance",
    inherentImpact: 4,
    inherentWealth: 4,
  },
  {
    id: "ERM-0296",
    description: "Partnerships with local communities for...",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Warranty",
    department: "HR",
    inherentImpact: 1,
    inherentWealth: 4,
  },
];

const getStatusBadgeColor = (status: string): string => {
  switch (status) {
    case "Under Mitigation":
      return "bg-blue-500/10 text-blue-400 border border-blue-500/30";
    case "Threat":
      return "bg-blue-500/10 text-blue-400 border border-blue-500/30";
    case "Pending Mitigation":
      return "bg-orange-500/10 text-orange-400 border border-orange-500/30";
    case "New":
      return "bg-purple-500/10 text-purple-400 border border-purple-500/30";
    case "Mitigated":
      return "bg-red-500/10 text-red-400 border border-red-500/30";
    default:
      return "bg-gray-500/10 text-gray-400 border border-gray-500/30";
  }
};

const getTypeBadgeColor = (type: string): string => {
  switch (type) {
    case "Threat":
      return "bg-orange-500/10 text-orange-400";
    case "Opportunity":
      return "bg-green-500/10 text-green-400";
    default:
      return "bg-gray-500/10 text-gray-400";
  }
};

export function RisksTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalItems = riskData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = riskData.slice(startIndex, endIndex);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Find..."
              className="bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none w-40"
            />
          </div>
          <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </button>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2 whitespace-nowrap">
          <span>+</span>
          <span className="hidden sm:inline">Create</span>
        </button>
      </div>

      {/* Tabs and filters */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-6 overflow-x-auto">
        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-orange-500 border-b-2 border-orange-500 pb-2">
            All
          </button>
          <span className="text-xs text-gray-600">213</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            New
          </button>
          <span className="text-xs text-gray-600">8</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Under Mitigation
          </button>
          <span className="text-xs text-gray-600">12</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Closed
          </button>
          <span className="text-xs text-gray-600">2</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full border-collapse min-w-max">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr>
              <th className="px-8 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Record ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Risk Activity Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Phase
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">
                Department
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">
                Inherent Impact
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">
                Inherent Wealth
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((risk) => (
              <tr
                key={risk.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-8 py-3 text-sm text-gray-900 font-mono whitespace-nowrap">
                  {risk.id}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 max-w-md">
                  {risk.description}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(risk.status)}`}
                  >
                    {risk.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-2 w-fit ${getTypeBadgeColor(risk.type)}`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-current"></span>
                    {risk.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                  {risk.phase}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {risk.department}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                  {risk.inherentImpact}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                  {risk.inherentWealth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {endIndex} of {totalItems} items
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  pageNum === currentPage
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          {totalPages > 5 && (
            <>
              <span className="text-gray-600">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  totalPages === currentPage
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
