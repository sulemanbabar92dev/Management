"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  }, []);

  return null;
}
