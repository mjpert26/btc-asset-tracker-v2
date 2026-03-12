"use client";
import { motion } from "framer-motion";
import { Wrench, Clock, CheckCircle, AlertCircle } from "lucide-react";

const repairs = [
  {
    id: "TKT-001",
    asset: "Dell Latitude 5520 (LAP-001)",
    issue: "Screen flickering intermittently",
    status: "In Progress",
    submitted: "2024-01-15",
    technician: "Mike Chen"
  },
  {
    id: "TKT-002",
    asset: "ThinkPad X1 Carbon (LAP-008)",
    issue: "Battery not charging",
    status: "Open",
    submitted: "2024-01-16",
    technician: "Unassigned"
  },
  {
    id: "TKT-003",
    asset: "Dell UltraSharp 27 (MON-004)",
    issue: "Dead pixels in upper right corner",
    status: "Resolved",
    submitted: "2024-01-10",
    technician: "Sarah Johnson"
  },
  {
    id: "TKT-004",
    asset: "MacBook Pro 14 (LAP-003)",
    issue: "Keyboard keys sticking",
    status: "In Progress",
    submitted: "2024-01-14",
    technician: "Mike Chen"
  },
  {
    id: "TKT-005",
    asset: "Logitech MX Master 3 (MSE-002)",
    issue: "Scroll wheel not working",
    status: "Resolved",
    submitted: "2024-01-08",
    technician: "Sarah Johnson"
  },
  {
    id: "TKT-006",
    asset: "HP EliteBook 840 (LAP-006)",
    issue: "Overheating during heavy use",
    status: "Open",
    submitted: "2024-01-17",
    technician: "Unassigned"
  },
  {
    id: "TKT-007",
    asset: "Dell P2722H (MON-007)",
    issue: "No display output",
    status: "In Progress",
    submitted: "2024-01-13",
    technician: "Mike Chen"
  },
  {
    id: "TKT-008",
    asset: "ThinkPad T14 (LAP-009)",
    issue: "WiFi connectivity issues",
    status: "Resolved",
    submitted: "2024-01-09",
    technician: "Sarah Johnson"
  },
  {
    id: "TKT-009",
    asset: "Logitech K380 (KBD-005)",
    issue: "Keys not registering",
    status: "Open",
    submitted: "2024-01-16",
    technician: "Unassigned"
  },
  {
    id: "TKT-010",
    asset: "CalDigit TS3 Plus (DOC-003)",
    issue: "USB ports not functioning",
    status: "In Progress",
    submitted: "2024-01-15",
    technician: "Mike Chen"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "In Progress":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Open":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Resolved":
      return <CheckCircle className="w-4 h-4" />;
    case "In Progress":
      return <Wrench className="w-4 h-4" />;
    case "Open":
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export default function RepairLog() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Repair Log</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Wrench className="w-4 h-4" />
              <span>{repairs.filter(r => r.status !== "Resolved").length} Active Tickets</span>
            </div>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Ticket ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Asset</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Issue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Submitted</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Technician</th>
                  </tr>
                </thead>
                <tbody>
                  {repairs.map((repair, index) => (
                    <motion.tr
                      key={repair.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white">{repair.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{repair.asset}</td>
                      <td className="px-6 py-4 text-sm text-gray-300 max-w-xs">{repair.issue}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(repair.status)}`}>
                          {getStatusIcon(repair.status)}
                          {repair.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{repair.submitted}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{repair.technician}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}