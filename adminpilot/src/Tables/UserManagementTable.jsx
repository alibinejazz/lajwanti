import React, { useState } from "react";
import DeleteModal from "../Components/DeleteModal"; // Import your DeleteModal
import { userData } from "./UserData"; // Replace with your actual data or import
import EditUserForm from "../Forms/EditUserForm";
import { FaSearch, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const UserManagementTable = ({ onAddUserClick }) => {
  const [activeFilters, setActiveFilters] = useState({});
  const [filters, setFilters] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    role: "",
  });
  const [globalSearch, setGlobalSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [users, setUsers] = useState(userData); // Use your own user data

  const [showEditForm, setShowEditForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

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
    return users.filter((user) => {
      if (globalSearch) {
        return Object.values(user).some((value) =>
          value.toLowerCase().includes(globalSearch.toLowerCase())
        );
      }
      return Object.keys(filters).every(
        (key) =>
          filters[key] === "" ||
          user[key].toLowerCase().includes(filters[key].toLowerCase())
      );
    });
  };

  const filteredUsers = handleSearch();
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDeleteClick = (user) => {
    setShowDeleteModal(true);
    setUserToDelete(user);
  };

  const handleDeleteConfirm = () => {
    setUsers(users.filter((user) => user !== userToDelete));
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleEditClick = (user) => {
    setUserToEdit(user);
    setShowEditForm(true);
  };

  const handleBackToTable = () => {
    setShowEditForm(false);
  };

  return (
    <div className="container mx-auto">

      {showEditForm ? (
        <EditUserForm
          user={userToEdit}
          onBack={handleBackToTable} // Back button functionality
        />
      ) : (
        <>
          <h2 className="text-[#3d7bb5] font-bold mb-4 text-lg">User Management</h2>
          <div className="flex  mb-4">

            {/* Global Search */}
            <input
              type="text"
              className="px-8 py-3 border rounded-full w-full"
              placeholder="Search..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
            />
            <button
              className="bg-[#3d7bb5] text-white p-3 rounded-full ml-2 w-52 max-sm:w-full"
              onClick={onAddUserClick}
            >
              Add User
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
              <thead className="bg-[#f6fbfe]  top-0 w-28">
                <tr>
                  {["username", "phoneNumber", "email", "role"].map((col) => (
                    <th
                      className="px-4 py-3 w-2/2 border border-[#95a7bd]"
                      key={col}
                    >
                      {activeFilters[col] ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="w-full border p-1"
                            placeholder={`Search ${col}`}
                            value={filters[col]}
                            onChange={(e) => handleFilterChange(e, col)}
                          />
                          <button
                            className="ml-2 text-red-500"
                            onClick={() => handleToggleFilter(col)}
                          >
                            X
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <span className="capitalize">
                            {col.charAt(0).toUpperCase() + col.slice(1)}
                          </span>
                          <FaSearch
                            onClick={() => handleToggleFilter(col)}
                            className="ml-2 cursor-pointer"
                          >
                          </FaSearch>
                        </div>
                      )}
                    </th>
                  ))}
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedUsers.length > 0 ? (
                  displayedUsers.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-4 w-1/6 border text-[#626183]">
                        {user.username}
                      </td>
                      <td className="border px-4 py-2">{user.phoneNumber}</td>
                      <td className="border px-4 py-2">{user.email}</td>
                      <td className="border px-4 py-2">{user.role}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="text-yellow-500 mr-2"
                          onClick={() => handleEditClick(user)}
                        >
                          <FaPencil />
                        </button>
                        <button
                          className="text-red-500"
                          onClick={() => handleDeleteClick(user)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No users found.
                    </td>
                  </tr>
                )}
                <tr>
                  <td colSpan="5" className="text-center py-2">
                    <div className="flex justify-between items-center mt-3">
                      <span className="px-2 text-sm">
                        Total Users: {filteredUsers.length}
                      </span>
                      <div className="flex">
                        <button
                          className="px-3 py-1 bg-gray-200"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        <span className="px-4">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          className="px-3 py-1 bg-gray-200"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    </div>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}

          {/* Delete Modal */}
            <DeleteModal
              show={showDeleteModal}
              onDeleteConfirm={handleDeleteConfirm}
              onCancel={handleCancelDelete}
              what="user"
            />
        </>
      )}
    </div>
  );
};

export default UserManagementTable;
