// 'use client'
// import React,{useState} from "react";
// import Link from "next/link";
// import Modal from "@/components/ui/page"


// const Page = () => {
//   const[open,setOpen]=useState(false)
//   return (
//     <div>
//       <Link href="/User">
//        <button 
//        onClick={()=>setOpen(true)} className=" m-3 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500">
//           Back
//         </button>
//         </Link>
//       <Modal open={open} onClose={()=>setOpen(false)}>
//       <div className="  h-screen flex justify-center ">
//         <div className="flex flex-col bg-gray-200 h-[350px] rounded-2xl mt-5 shadow-2xl">
//           <h1 className="p-5 text-center text-2xl font-semibold ">Userly</h1>
//           <div className="flex p-4">
//             <div className="flex flex-col gap-5">
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//             </div>
//             <div className="flex flex-col gap-5 pl-3">
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black  rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//               <p>
//                 Name:
//                 <input
//                   className="border-2 border-black rounded"
//                   type="text"
//                   placeholder="enter your name"
//                 />
//               </p>
//             </div>
//           </div>
//         <p className="text-center"><input className="bg-black text-white p-1 rounded m-3 hover:bg-amber-800 hover:text-black" type="submit" value={"Submit Now"} /></p>
        
//         </div>
//       </div>
//     </Modal>
//     </div>
//   );
// };

// export default Page;












// "use client";
// import React, { useState } from "react";
// import Modal from "@/components/ui/page";

// const UserPage = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-5">
//       <button
//         onClick={() => setOpen(true)}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Open Modal
//       </button>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <h2 className="text-xl font-bold mb-4">User Modal</h2>
//         <p>This is a simple modal popup.</p>
//         <button
//           onClick={() => setOpen(false)}
//           className="mt-4 bg-red-600 text-white px-3 py-1 rounded"
//         >
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default UserPage;
