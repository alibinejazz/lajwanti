import React, { useState } from "react";
import DeleteModal from "../Components/DeleteModal";
import { orgData } from "./OrgData";
import EditOrganizationForm from "../Forms/EditOrgForm"; // Importing the edit form
import QueriesTable from "./QueriesTable"; // Importing the queries table
import { FaFile, FaSearch, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const OrganizationTable = ({ onAddOrganizationClick }) => {
  const [activeFilters, setActiveFilters] = useState({});
  const [filters, setFilters] = useState({
    organizationName: "",
    email: "",
    phoneNumber: "",
    city: "",
    industry: "",
    assignedLimit: "",
  });
  const [globalSearch, setGlobalSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [organizationToDelete, setOrganizationToDelete] = useState(null);
  const [organizations, setOrganizations] = useState(orgData);

  const [showEditForm, setShowEditForm] = useState(false); // Track if edit form is shown
  const [organizationToEdit, setOrganizationToEdit] = useState(null); // Track organization to edit

  const [showQueriesTable, setShowQueriesTable] = useState(false); // Track if queries table is shown
  const [organizationToLog, setOrganizationToLog] = useState(null); // Track organization to log

  const handleFilterChange = (e, column) => {
    setFilters({ ...filters, [column]: e.target.value });
  };

  const handleToggleFilter = (column) => {
    setActiveFilters((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handleSearch = () => {
    return organizations.filter((org) => {
      if (globalSearch) {
        return Object.values(org).some((value) =>
          value.toLowerCase().includes(globalSearch.toLowerCase())
        );
      }
      return Object.keys(filters).every(
        (key) =>
          filters[key] === "" ||
          org[key].toLowerCase().includes(filters[key].toLowerCase())
      );
    });
  };

  const filteredOrganizations = handleSearch();
  const totalPages = Math.ceil(filteredOrganizations.length / itemsPerPage);
  const displayedOrganizations = filteredOrganizations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDeleteClick = (organization) => {
    setShowDeleteModal(true);
    setOrganizationToDelete(organization);
  };

  const handleDeleteConfirm = () => {
    setOrganizations(
      organizations.filter((org) => org !== organizationToDelete)
    );
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setOrganizationToDelete(null);
  };

  const handleEditClick = (organization) => {
    setOrganizationToEdit(organization);
    setShowEditForm(true); // Show the edit form
  };

  const handleLogClick = (organization) => {
    setOrganizationToLog(organization);
    setShowQueriesTable(true); // Show the queries table
  };

  const handleBackToTable = () => {
    setShowEditForm(false);
    setShowQueriesTable(false);
  };

  return (
    <div className="container mx-auto">
      {/* Conditionally render the Edit Form or Queries Table */}
      {showEditForm ? (
        <EditOrganizationForm
          organization={organizationToEdit}
          onBack={handleBackToTable} // Provide back button functionality
        />
      ) : showQueriesTable ? (
        <QueriesTable
          organization={organizationToLog}
          onBack={handleBackToTable} // Provide back button functionality
        />
      ) : (
        <>
          {/* Global Search and Add Organization */}
            <div className="flex justify-between mb-4 items-center max-sm:flex-wrap">
              <input
                type="text"
                className="px-8 py-3 border rounded-full w-full"
                placeholder="Search..."
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
              />

              <button
                className="bg-[#3d7bb5] text-white p-3 rounded-full  ml-2 w-52 max-sm:w-full"
                onClick={onAddOrganizationClick}
              >
                Add Organization
              </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className=" overflow-y-auto ">
              <table className="min-w-full table-fixed">
                <thead className="bg-[#f6fbfe]  top-0 w-28">
                  <tr className="rounded-3xl">
                    {[
                      "organizationName",
                      "email",
                      "phoneNumber",
                      "city",
                      "industry",
                      "assignedLimit",
                    ].map((col) => (
                      <th
                        className="px-4 py-3 w-1/6 border border-[#95a7bd]"
                        key={col}
                      >
                        {activeFilters[col] ? (
                          <div className="flex">
                            <input
                              type="text"
                              className="w-full border"
                              placeholder={`Search ${col}`}
                              value={filters[col]}
                              onChange={(e) => handleFilterChange(e, col)}
                            />
                            <button
                              onClick={() => handleToggleFilter(col)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              X
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <span className="text-sm lg:text-base">
                              {col.charAt(0).toUpperCase() + col.slice(1)}
                            </span>
                            <FaSearch
                              onClick={() => handleToggleFilter(col)}
                              className="cursor-pointer ml-2"
                            >
                              
                            </FaSearch>
                          </div>
                        )}
                      </th>
                    ))}
                    <th className="px-4 py-2 w-1/6 border border-[#95a7bd]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedOrganizations.length > 0 ? (
                    displayedOrganizations.map((org, index) => (
                      <tr key={index} className="border-b h-12">
                        <td className="px-4 py-4 w-1/6 border text-[#626183]">
                          {org.organizationName}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          {org.email}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          {org.phoneNumber}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          {org.city}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          {org.industry}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          {org.assignedLimit}
                        </td>
                        <td className="px-4 w-1/6 border text-[#626183]">
                          <div className="flex">
                            <span
                              className=" cursor-pointer"
                              onClick={() => handleLogClick(org)}
                            >
                              <FaFile />
                            </span>
                            <span
                              className="ml-2 text-yellow-500 hover:text-yellow-700 cursor-pointer"
                              onClick={() => handleEditClick(org)}
                            >
                              <FaPencil />
                            </span>
                            <span
                              className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                              onClick={() => handleDeleteClick(org)}
                            >
                              <FaTrash />
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-4 py-2 text-center">
                        No data found.
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="7" className="px-4 py-2 text-center">
                      <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                        <span className="text-sm">
                          Total Organizations: {filteredOrganizations.length}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                          <span className="text-sm">
                            Page {currentPage} of {totalPages}
                          </span>
                          <button
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
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
          <DeleteModal
            show={showDeleteModal}
            onDeleteConfirm={handleDeleteConfirm}
            onCancel={handleCancelDelete}
            what="organization"
          />
        </>
      )}
    </div>
  );
};

export default OrganizationTable;
