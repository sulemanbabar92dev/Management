
'use client';
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {children}
      <Toaster position="top-right" />
    </div>
  );
}
