"use client"
import { useEffect } from "react";
import DashboardLayout from "./pages/layout";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/pages")
    return () => {
      router.push("/pages")
    };
  }, []);
  return (
    <DashboardLayout children={undefined}/>
  );
}
