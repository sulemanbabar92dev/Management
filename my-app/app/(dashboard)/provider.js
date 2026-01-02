"use client";
import React, { useState, useEffect } from "react";
import { BreadcrumbsProvider } from "@/context/Breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/header";
import Link from "next/link";
import { link } from "@/data/routes-data";
import { usePathname } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

const DashboardProvider = ({ children }) => {
  const [BreadcrumbsData, setBreadcrumbsData] = useState("User");

  const router = useRouter();

  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path;
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, []);

  return (
    <div>
      <BreadcrumbsProvider>
        <div className="min-h-screen flex">
          <aside className="w-[300px] bg-gray-700 min-h-screen">
            <h1 className="text-2xl text-center pt-4 font-bold text-gray-100">
              Dashboard
            </h1>
            <hr />
            <ul className="p-3 flex flex-col gap-5">
              {link.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setBreadcrumbsData(item.label)}
                    className={`flex gap-2 rounded p-2 font-bold transition duration-300 ease-in-out ${
                      isActive(item.path)
                        ? `bg-white ${item.color || "text-primary"}`
                        : "text-gray-300 hover:bg-white"
                    }`}
                  >
                    <span className="text-[20px]">{item.icons}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li
                className={`rounded p-2 font-bold text-red-600 transition duration-300 ease-in-out ${
                  isActive("/logout")
                    ? "bg-white text-red-600"
                    : "hover:bg-white"
                }`}
              >
                <Link href="/logout" className="flex gap-2">
                  <MdOutlineLogout className="text-[20px]" />
                  Log Out
                </Link>
              </li>
            </ul>
          </aside>

          <main className="w-full h-full bg-white">
            <Header />
            <Breadcrumbs BreadcrumbsData={BreadcrumbsData} />
            {children}
          </main>
        </div>
        <div className="bg-gray-700 rounded-lg">
          <footer>
            <h1 className="text-center text-white font-bold text-[25px]">
              @copyright
            </h1>
          </footer>
        </div>
      </BreadcrumbsProvider>
    </div>
  );
};

export default DashboardProvider;
