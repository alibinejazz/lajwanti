import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { queriesData } from "./queriesData";


// Add more rows as needed...

const QueriesTable = ({onBack}) => {
  const [globalSearch, setGlobalSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(11);

  // Column filters and which filters are active
  const [columnFilters, setColumnFilters] = useState({
    query: "",
    response: "",
    date: "",
  });

  const [activeFilters, setActiveFilters] = useState({
    query: false,
    response: false,
    date: false,
  });

  // Filter data based on column filters, global search, and date
  const filteredData = queriesData.filter((row) => {
    const matchesGlobalSearch =
      row.query.toLowerCase().includes(globalSearch.toLowerCase()) ||
      row.response.toLowerCase().includes(globalSearch.toLowerCase()) ||
      row.date.toLowerCase().includes(globalSearch.toLowerCase());

    const matchesColumnFilters =
      row.query.toLowerCase().includes(columnFilters.query.toLowerCase()) &&
      row.response
        .toLowerCase()
        .includes(columnFilters.response.toLowerCase()) &&
      row.date.toLowerCase().includes(columnFilters.date.toLowerCase());

    const matchesDate = dateFilter === "" || row.date.startsWith(dateFilter);

    return matchesGlobalSearch && matchesColumnFilters && matchesDate;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleColumnFilterChange = (e, column) => {
    setColumnFilters({
      ...columnFilters,
      [column]: e.target.value,
    });
    setCurrentPage(1); // Reset to page 1 on new filter
  };

  // Toggle filter input for columns
  const toggleFilter = (column) => {
    setActiveFilters({
      ...activeFilters,
      [column]: !activeFilters[column],
    });
  };

  return (
    <div className="container mx-auto">
      {/* Global Search */}
      <div className="flex justify-between mb-4 items-center max-sm:flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            className="px-8 py-3 border rounded-full w-full"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
          />
          <FaSearch className="absolute top-4 left-2 text-gray-500" />
          <input
            type="date"
            className="border p-3  ml-2 rounded-full"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl max-sm:h-[600px]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#f6fbfe]">
              <th className="px-4 py-2 border">
                <div className="flex items-center justify-between">
                  {activeFilters.query ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-28 p-1 border-b-2 focus:outline-none"
                        value={columnFilters.query}
                        onChange={(e) => handleColumnFilterChange(e, "query")}
                        placeholder="Search Query"
                        autoFocus
                      />
                      <FaTimes
                        className="cursor-pointer ml-2 text-red-500"
                        onClick={() => toggleFilter("query")} // Close filter
                      />
                    </div>
                  ) : (
                    <>
                      <span>Query</span>
                      <FaSearch
                        className="cursor-pointer ml-2"
                        onClick={() => toggleFilter("query")}
                      />
                    </>
                  )}
                </div>
              </th>

              <th className="px-4 py-2 border">
                <div className="flex items-center justify-between">
                  {activeFilters.response ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-28 p-1 border-b-2 focus:outline-none"
                        value={columnFilters.response}
                        onChange={(e) =>
                          handleColumnFilterChange(e, "response")
                        }
                        placeholder="Search Response"
                        autoFocus
                      />
                      <FaTimes
                        className="cursor-pointer ml-2 text-red-500"
                        onClick={() => toggleFilter("response")} // Close filter
                      />
                    </div>
                  ) : (
                    <>
                      <span>Response</span>
                      <FaSearch
                        className="cursor-pointer ml-2"
                        onClick={() => toggleFilter("response")}
                      />
                    </>
                  )}
                </div>
              </th>

              <th className="px-4 py-2 border">
                <div className="flex items-center justify-between">
                  {activeFilters.date ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-28 p-1 border-b-2 focus:outline-none"
                        value={columnFilters.date}
                        onChange={(e) => handleColumnFilterChange(e, "date")}
                        placeholder="Search Date"
                        autoFocus
                      />
                      <FaTimes
                        className="cursor-pointer ml-2 text-red-500"
                        onClick={() => toggleFilter("date")} // Close filter
                      />
                    </div>
                  ) : (
                    <>
                      <span>Date & Time</span>
                      <FaSearch
                        className="cursor-pointer ml-2"
                        onClick={() => toggleFilter("date")}
                      />
                    </>
                  )}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 border text-[#626183]">{row.query}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.response}</td>
                  <td className="px-4 py-2 border text-[#626183]">{row.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="3" className="text-center py-4">
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="mr-2 px-4">
                      Total Queries ({filteredData.length})
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
                        <option value={11}>11</option>
                        <option value={20}>20</option>
                      </select>
                      Per Page
                    </label>
                  </div>
                  <div className="px-4">
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
      <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={onBack}
            >
              Back to Dashboard
            </button>
      {/* Pagination and Items per Page Controls */}
    </div>
  );
};

export default QueriesTable;
