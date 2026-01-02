// "use client";
// import React, { useState } from "react";
// import { BreadcrumbsProvider } from "@/context/Breadcrumbs";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import Dashboard from "./(dashboard)/dashboard/page";
// import Header from "@/header";

// const Provider = ({ children }) => {
//   const [BreadcrumbsData, setBreadcrumbsData] = useState("User");

//   return (
//     <div>
//       <BreadcrumbsProvider>
//         <div className="min-h-screen flex">
//           <aside className="w-[250px] bg-gray-700 min-h-screen">
//             <Dashboard setBreadcrumbsData={setBreadcrumbsData} />
//           </aside>

//           <main className="w-full h-full bg-white">
//             <Header />
//             <Breadcrumbs BreadcrumbsData={BreadcrumbsData} />
//             {children}
//           </main>
//         </div>
//         <div className="bg-gray-700 rounded-lg">
//           <footer>
//             <h1 className="text-center text-white font-bold text-[25px]">
//               @copyright
//             </h1>
//           </footer>
//         </div>
//       </BreadcrumbsProvider>
//     </div>
//   );
// };

// export default Provider;