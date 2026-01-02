// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa";

// const practice = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Mock authentication
//     if (email === "admin@example.com" && password === "123456") {
//       localStorage.setItem("user", JSON.stringify({ email }));
//       router.push("/user"); // Redirect to dashboard
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <div className="w-full h-screen  flex ">
//         <div className="bg-primary  w-1/2 h-screen flex justify-center items-center p-25 flex-col text-white">
//           <h1 className="text-3xl mb-5">Come join Us!</h1>
//           <p className="text-xl">
//             We are so excited to have you here.If you have not already an
//             account to get access to exclusive offer,rewards and discount.{" "}
//           </p>

//           <button className="bg-gray-700 px-15 py-2 rounded-full mt-5 hover:bg-gray-800">
//             <h1>Already have an account? Sign in </h1>
//           </button>
//         </div>
//         <div className="flex justify-center pt-30  w-1/2 bg-gray-100">
//           <div className="flex flex-col">
//             <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//             <form onSubmit={handleLogin} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gray-600 text-white py-2 rounded-2xl hover:bg-gray-700 transition"
//               >
//                 Login
//               </button>
//             </form>
//             <div className="flex items-center my-4">
//               <hr className="grow border-gray-300" />
//               <span className="mx-2 text-gray-500 font-semibold">Or</span>
//               <hr className="grow border-gray-300" />
//             </div>

//             <div className="p-4 ">
//               <div className=" flex bg-blue-50 text-gray-700 border border-gray-400 rounded-2xl p-2 mt-2 mb-4 hover:bg-gray-50 ">
//                 <div>
//                   <a href="https://www.google.com" target="_blank">
//                     <FcGoogle className="text-2xl " />
//                   </a>
//                 </div>
//                 <div className="pl-15">
//                   <a href="https://www.google.com" target="_blank">
//                     <h1 className="font-semibold"> Login with Google</h1>
//                   </a>
//                 </div>
//               </div>

//               <div className=" flex bg-blue-500 text-white rounded-2xl p-2 mt-2 mb-2 hover:bg-blue-700">
//                 <div>
//                   <a href=" https://www.facebook.com" target="_blank">
//                     <FaFacebookF className="text-2xl" />
//                   </a>
//                 </div>
//                 <div className=" text-white rounded pl-15 ">
//                   <a href=" https://www.facebook.com" target="_blank">
//                     <h1 className="font-semibold">Login with Facebook</h1>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default practice;













// "use client";
// import { useState } from "react";

// export default function ToggleExample() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={() => setIsOn(!isOn)}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         {isOn ? "ON" : "OFF"}
//       </button>

//       <p className="mt-2">
//         Status: {isOn ? "Enabled ✅" : "Disabled ❌"}
//       </p>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white px-4 py-2"
      >
        ☰ Menu
      </button>

      {open && (
        <div className="mt-4 bg-gray-200 p-4">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
    </div>
  );
}
