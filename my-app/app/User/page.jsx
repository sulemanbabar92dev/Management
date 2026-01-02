"use client";
import React, { useEffect, useState } from "react";
import UserTable from "@/components/users/userTable";
import AddUser from "@/components/users/addUser";
import UserEdit from "@/components/users/useredit";
import DeleteUser from "@/components/users/deleteuser";

const Page = () => {
  const [user, setUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [selectUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user")) || [];
    setUser(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleUserUpdated = (updatedUser) => {
    const updatedUsers = user.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUser(updatedUsers);
    setEditModal(false);
  };

  return (
    <div>
      <div className="flex justify-between p-5">
        <h1 className="text-2xl text-gray-600 font-extrabold mt-5 ">
          User List
        </h1>
        <button
          onClick={() => setModalOpen(true)}
          className=" bg-gray-600 text-white px-4 py-2 border-3 border-gray-700  mt-5 rounded cursor-pointer hover:bg-gray-500"
        >
          Add User
        </button>
      </div>
      <UserTable
        setSelectedUser={setSelectedUser}
        setEditModal={setEditModal}
        user={user}
        setUser={setUser}
        userToDelete={userToDelete}
        setUserToDelete={setUserToDelete}
        setDeleteModal={setDeleteModal}
      />
      <AddUser
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setUser={setUser}
      />
      <UserEdit
        editModal={editModal}
        setEditModal={setEditModal}
        selectUser={selectUser}
        handleUserUpdated={(updatedUser) => {
          setUser((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
          );
        }}
      />
      <DeleteUser
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        userToDelete={userToDelete}
        setUser={setUser}
      />
    </div>
  );
};
export default Page;
