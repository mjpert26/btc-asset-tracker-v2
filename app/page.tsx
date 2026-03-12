"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import AssetsTable from "@/components/AssetsTable";
import EmployeeAssignments from "@/components/EmployeeAssignments";
import RepairLog from "@/components/RepairLog";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <StatsCards />
          <AssetsTable />
          <EmployeeAssignments />
          <RepairLog />
        </main>
      </div>
    </div>
  );
}