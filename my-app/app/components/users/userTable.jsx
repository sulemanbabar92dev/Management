"use client";
import React, { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const UserTable = ({
  setSelectedUser,
  setEditModal,
  user,
  setUserToDelete,
  setDeleteModal,
}) => {
  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditModal(true);
  };
  const handleDelete = (user) => {
    setUserToDelete(user);
    setDeleteModal(true);
  };

  return (
    <div>
      <div className="overflow-auto h-screen w-full flex flex-col rounded-lg p-4 ">
        <div className="bg-gray-100 shadow-lg shadow-gray-400 rounded-lg overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-gray-600 text-gray-200 rounded py-20 sticky border-3 border-gray-700">
              <tr>
                <th className="border py-3">ID</th>
                <th className="border py-3">Name</th>
                <th className="border py-3">Last Name</th>
                <th className="border py-3">Email</th>
                <th className="border py-3">Contact</th>
                <th className="border py-3">Password</th>
                <th className="border py-3">Confirm Password</th>
                <th className="border py-3">Action</th>
              </tr>
            </thead>

            <tbody className="transition-all duration-1000 rounded">
              {user?.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="p-5 text-center bg-gray-100 text-gray-800 font-semibold transition duration-300 ease-in-out  hover:bg-gray-200"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                user.map((users) => (
                  <tr key={users.id} className="hover:bg-gray-200">
                    <td className="py-5">{users.id}</td>
                    <td className="py-5">{users.name}</td>
                    <td className="py-5">{users.lastName}</td>
                    <td className="py-5">{users.email}</td>
                    <td className="py-5">{users.contact}</td>
                    <td className="py-5">{users.password}</td>
                    <td className="py-5">{users.confirmPassword}</td>
                    <td className=" gap-2 p-6 flex justify-end">
                      <MdModeEditOutline
                        onClick={() => handleEdit(users)}
                        className="text-2xl hover:text-gray-500 "
                      />
                      <MdDelete
                        onClick={() => handleDelete(users)}
                        className="text-red-700 text-2xl  hover:text-red-600"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
