// "use client";
// import React,{useEffect} from "react";
// import Link from "next/link";
// import { link } from "@/data/routes-data";
// import { usePathname } from "next/navigation";
// import { MdOutlineLogout } from "react-icons/md";
// import { useRouter } from "next/navigation";

// const Dashboard = ({ setBreadcrumbsData }) => {
// const router=useRouter();

//   const pathname = usePathname();
//   const isActive = (path) => {
//     return pathname === path;
//   };

//     useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (!isLoggedIn) {
//       router.replace("/login");
//     }
//   }, []);

//   return (
//     <div>
//       <div className="flex w-full h-screen">
//         <div className="w-[250px]   bg-gray-700 ">
//           <h1 className="text-2xl text-center pt-4 font-bold text-gray-100">
//             Dashboard
//           </h1>
//           <hr />
//           <ul className="p-3 flex flex-col gap-5">
//             {link.map((item) => (
//               <li key={item.path}>
//                 <Link
//                   href={item.path}
//                   onClick={() => setBreadcrumbsData(item.label)}
//                   className={`flex gap-2 rounded p-2 font-bold transition duration-300 ease-in-out ${
//                     isActive(item.path)
//                       ? `bg-white ${item.color || "text-primary"}`
//                       : "text-gray-300 hover:bg-white"
//                   }`}
//                 >
//                   <span className="text-[20px]">{item.icons}</span>
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//             <li
//               className={`rounded p-2 font-bold text-red-600 transition duration-300 ease-in-out ${
//                 isActive("/logout") ? "bg-white text-red-600" : "hover:bg-white"
//               }`}
//             >
//               <Link href="/logout" className="flex gap-2">
//                 <MdOutlineLogout className="text-[20px]" />
//                 Log Out
//               </Link>
//             </li>
//           </ul>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




