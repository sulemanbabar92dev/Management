"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login2 = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newError.email = "invalid email address";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required";
    } else if (formData.password.length < 6) {
      newError.password = "Password is required";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("please fix the errors");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === formData.email)) {
      toast.error("Email is already registered");
      return;
    }
    //   setErrors({ email: "Email is already registered" });
    //   return;
    // }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    // alert("Sign Up Successful!");
    toast.success("Signup successful 🎉");
    setFormData({ name: "", email: "", password: "" });
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="bg-white rounded-2xl shadow-2xl w-[370px] p-1">
          <h1 className="text-center text-3xl font-bold text-gray-600 pt-3">
            Signup{" "}
          </h1>

          <form
            action=""
            method="get"
            className="flex flex-col items-center gap-5 pt-7 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Enter your Name"
              className="p-2 rounded-lg border border-gray-200 w-[300px] "
              value={formData.name}
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value });
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: "" }));
                }
              }}
            />
            {errors.name && <Message errors={errors.name} />}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="p-2 rounded-lg border border-gray-200  w-[300px]"
              value={formData.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
            />
            {errors.email && <Message errors={errors.email} />}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="p-2 rounded-lg border border-gray-200 w-[300px]"
              value={formData.password}
              onChange={(event) => {
                setFormData({ ...formData, password: event.target.value });
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: "" }));
                }
              }}
            />
            {errors.password && <Message errors={errors.password} />}

            <div className="p-2">
              <button
                type="submit"
                className="bg-gray-700 text-white font-semibold px-32 py-2 rounded  hover:bg-gray-600 transition duration-150 ease-in-out"
              >
                Signup
              </button>
            </div>
            <div className="flex pb-4 font-semibold">
              <h1 className="font-semibold">Already have an account?</h1>
              <div className="text-blue-800 font-semibold hover:text-blue-600 pl-1">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </form>
          {/* <hr className="text-gray-300 p-1" /> */}

          <div className="flex items-center my-4">
            <hr className="grow border-gray-300" />
            <span className="mx-2 text-gray-500 font-semibold">Or</span>
            <hr className="grow border-gray-300" />
          </div>

          <div className="p-4 ">
            <div className=" flex bg-white text-gray-700 border border-gray-400 rounded p-2 mt-2 mb-4 hover:bg-gray-50 ">
              <div>
                <a href="https://www.google.com" target="_blank">
                  <FcGoogle className="text-2xl " />
                </a>
              </div>
              <div className="pl-15">
                <a href="https://www.google.com" target="_blank">
                  <h1 className="font-semibold"> Sign up with Google</h1>
                </a>
              </div>
            </div>

            <div className=" flex bg-blue-500 text-white rounded p-2 mt-2 mb-2 hover:bg-blue-700">
              <div>
                <a href=" https://www.facebook.com" target="_blank">
                  <FaFacebookF className="text-2xl" />
                </a>
              </div>
              <div className=" text-white rounded pl-15 ">
                <a href=" https://www.facebook.com" target="_blank">
                  <h1 className="font-semibold">Sign up with Facebook</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;

const Message = ({ errors }) => {
  return <p className="text-red-500 font-semibold">{errors}</p>;
};
