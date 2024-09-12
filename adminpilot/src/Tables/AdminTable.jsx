import React, { useState } from "react";
import { mockData } from "./mockData";
import { FaSearch, FaTimes } from "react-icons/fa";

const DataTable = () => {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    industry: "",
    assignedLimit: "",
    remainingLimit: "",
  });

  const [activeFilters, setActiveFilters] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    industry: false,
    assignedLimit: false,
    remainingLimit: false,
  });

  const [data, setData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (e, key) => {
    const newFilters = { ...searchFilters, [key]: e.target.value };
    setSearchFilters(newFilters);

    const filteredData = mockData.filter((row) => {
      return Object.keys(newFilters).every((filterKey) => {
        if (newFilters[filterKey] === "") return true;
        return row[filterKey]
          .toLowerCase()
          .includes(newFilters[filterKey].toLowerCase());
      });
    });
    setData(filteredData);
    setCurrentPage(1); // Reset to first page when search filter changes
  };

  // Toggle search input visibility for multiple columns
  const toggleFilter = (key) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Render heading with either input or static text based on active filter
  const renderHeading = (key, label) => {
    return activeFilters[key] ? (
      <div className="flex items-center">
        <input
          type="text"
          className="border-b-2 focus:outline-none w-28"
          value={searchFilters[key]}
          onChange={(e) => handleFilterChange(e, key)}
          autoFocus
        />
        <FaTimes
          className="cursor-pointer ml-2 text-red-500"
          onClick={() => toggleFilter(key)} // Close filter
        />
      </div>
    ) : (
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <FaSearch
          className="cursor-pointer ml-2"
          onClick={() => toggleFilter(key)}
        />
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl max-sm:h-screen">
        <table className="min-w-full h-[720px] bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#f6fbfe]">
              <th className="px-4 py-2 border">
                {renderHeading("name", "Organization")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("email", "Email")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("phoneNumber", "Phone Number")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("city", "City")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("industry", "Industry")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("assignedLimit", "Assigned Limit")}
              </th>
              <th className="px-4 py-2 border">
                {renderHeading("remainingLimit", "Remaining Limit")}
              </th>
              <th className="px-4 py-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2 border text-[#626183]">{row.name}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.email}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.phoneNumber}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.city}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.industry}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.assignedLimit}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.remainingLimit}</td>
                  <td className="px-4 py-2 border text-center">
                    <button className="text-blue-500">View Log</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="8" className="text-center py-4">
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="mr-2 px-4">
                      Total Organizations ({data.length})
                    </span>
                    <label>
                      Showing
                      <select
                        className="mx-2 border border-gray-300 p-1"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={12}>12</option>
                        <option value={20}>20</option>
                      </select>
                      Per Page
                    </label>
                  </div>
                  <div>
                    <button
                      className="px-3 py-1 border rounded mr-2"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        className={`px-3 py-1 border rounded mx-1 ${
                          currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 border rounded ml-2"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DataTable;
