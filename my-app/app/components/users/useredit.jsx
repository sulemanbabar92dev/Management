"use client";
import React, { useState, useEffect } from "react";
import Modal from "@/components/ui/page";

const UserEdit = ({
  editModal,
  setEditModal,
  selectUser,
  handleUserUpdated,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    lastName: "",
    contact: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (selectUser) {
      setFormData(selectUser);
    }
  }, [selectUser]);
  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) newError.name = "Name is required";
    if (!formData.email.trim()) newError.email = "Email is required";
    if (!formData.password.trim()) newError.password = "Password is required";
    if (!formData.lastName.trim()) newError.lastName = "LastName is required";
    if (!formData.contact.trim()) newError.contact = "Contact is required";
    if (!formData.confirmPassword.trim()) {
      newError.confirmPassword = "Password does not match";
    } else if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Password does not match";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const updatedUser = { ...formData };
    const user = JSON.parse(localStorage.getItem("user")) || [];
    const updateduser = user.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    localStorage.setItem("user", JSON.stringify(updateduser));

    if (handleUserUpdated) handleUserUpdated(updatedUser);
    setEditModal(false);
  };

  return (
    <div>
      <Modal isOpen={editModal} onClose={() => setEditModal(false)}>
        <div className="flex justify-center items-center flex-col bg-white  px-6 py-6 w-full">
          <h1 className="p-5 text-center text-2xl text-gray-500 font-bold hover:text-gray-600 ">
            Edit User
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px]">
              <label className="text-gray-500 font-semibold text-[17px]">
                Name:
                <input
                  className="border text-[15px] pl-2 py-3 font-light rounded-2xl w-full"
                  type="text"
                  placeholder="enter your name"
                  value={formData.name}
                  onChange={(event) => {
                    setFormData({ ...formData, name: event.target.value });
                    if (errors.name) {
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }
                  }}
                />
                {errors.name && <Message errors={errors.name} />}
              </label>
              <label className="text-gray-500 font-semibold text-[17px]">
                Last Name:
                <input
                  className="border text-[15px] font-light rounded-2xl pl-2 py-3 w-full"
                  type="text"
                  placeholder="enter your fullname"
                  value={formData.lastName}
                  onChange={(event) => {
                    setFormData({ ...formData, lastName: event.target.value });
                    if (errors.lastName) {
                      setErrors((prev) => ({ ...prev, lastName: "" }));
                    }
                  }}
                />
                {errors.lastName && <Message errors={errors.lastName} />}
              </label>
              <label className="text-gray-500 font-semibold text-[17px]">
                Email:
                <input
                  className="border font-light text-[15px] rounded-2xl pl-2 py-3 w-full "
                  type="email"
                  placeholder="enter your email"
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                    if (errors.email) {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                />
                {errors.email && <Message errors={errors.email} />}
              </label>

              <label className="text-gray-500 font-semibold text-[17px]">
                Contact
                <input
                  className="border text-[15px] font-light rounded-2xl w-full pl-2 py-3"
                  type="number"
                  placeholder="enter your name"
                  value={formData.contact}
                  onChange={(event) => {
                    setFormData({ ...formData, contact: event.target.value });
                    if (errors.contact) {
                      setErrors((prev) => ({ ...prev, contact: "" }));
                    }
                  }}
                />
                {errors.contact && <Message errors={errors.contact} />}
              </label>
                    <label className="text-gray-500 font-semibold text-[17px]">
                      Password
                      <input
                        className="border text-[15px] font-light pl-2 py-3 rounded-2xl w-full"
                        type="password"
                        placeholder="enter your password"
                        value={formData.password}
                        onChange={(event) => {
                          setFormData({ ...formData, password: event.target.value });
                          if (errors.password) {
                            setErrors((prev) => ({ ...prev, password: "" }));
                          }
                        }}
                      />
                      {errors.password && <Message errors={errors.password} />}
                    </label>
              <label className="text-gray-500 font-semibold text-[17px] ">
                Confirm Password:
                <input
                  className="border rounded-2xl text-[15px] font-light w-full pl-2 py-3"
                  type="password"
                  placeholder="enter your confirm password"
                  value={formData.confirmPassword}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      confirmPassword: event.target.value,
                    });
                    if (errors.confirmPassword) {
                      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                    }
                  }}
                />
                {errors.confirmPassword && (
                  <Message errors={errors.confirmPassword} />
                )}
              </label>
            </div>
            <div className=" col-span-full text-center mt-[30px]">
              <button
                className="bg-gray-700 text-white px-6 py-2  rounded-lg cursor-pointer font-semibold hover:bg-gray-600 hover:text-white transition"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default UserEdit;

const Message = ({ errors }) => {
  return <p className="text-red-500">{errors}</p>;
};
