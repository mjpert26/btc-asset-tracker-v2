"use client";
import { motion } from "framer-motion";
import { Wrench, Calendar, AlertCircle } from "lucide-react";

interface RepairTicket {
  id: string;
  assetId: string;
  assetName: string;
  issue: string;
  status: "Open" | "In Progress" | "Resolved" | "On Hold";
  date: string;
  priority: "Low" | "Medium" | "High";
}

export default function RepairLog() {
  const repairTickets: RepairTicket[] = [
    {
      id: "TKT-001",
      assetId: "LAP-001",
      assetName: "Dell Latitude 5420",
      issue: "Screen flickering intermittently",
      status: "In Progress",
      date: "2024-01-15",
      priority: "High"
    },
    {
      id: "TKT-002",
      assetId: "MON-003",
      assetName: "LG UltraWide 34WN80C",
      issue: "No display output",
      status: "Open",
      date: "2024-01-14",
      priority: "High"
    },
    {
      id: "TKT-003",
      assetId: "LAP-005",
      assetName: "HP EliteBook 840",
      issue: "Battery not charging",
      status: "Resolved",
      date: "2024-01-12",
      priority: "Medium"
    },
    {
      id: "TKT-004",
      assetId: "KEY-002",
      assetName: "Logitech MX Keys",
      issue: "Some keys not responding",
      status: "In Progress",
      date: "2024-01-10",
      priority: "Low"
    },
    {
      id: "TKT-005",
      assetId: "LAP-008",
      assetName: "Lenovo ThinkPad X1",
      issue: "Overheating during heavy use",
      status: "On Hold",
      date: "2024-01-09",
      priority: "Medium"
    },
    {
      id: "TKT-006",
      assetId: "MOU-004",
      assetName: "Logitech MX Master 3",
      issue: "Scroll wheel malfunction",
      status: "Resolved",
      date: "2024-01-08",
      priority: "Low"
    },
    {
      id: "TKT-007",
      assetId: "MON-007",
      assetName: "Samsung Odyssey G5",
      issue: "Dead pixels on screen",
      status: "Open",
      date: "2024-01-07",
      priority: "Medium"
    },
    {
      id: "TKT-008",
      assetId: "LAP-012",
      assetName: "Dell XPS 15",
      issue: "Touchpad not working",
      status: "In Progress",
      date: "2024-01-05",
      priority: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Resolved":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "On Hold":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-400";
      case "Medium":
        return "text-yellow-400";
      case "Low":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-white">Repair Log</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Track and manage equipment repair tickets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Ticket ID</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Asset</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Issue</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Priority</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Status</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {repairTickets.map((ticket, index) => (
                  <motion.tr
                    key={ticket.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="text-blue-400 font-mono font-semibold">
                        {ticket.id}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-white font-medium">{ticket.assetName}</div>
                        <div className="text-sm text-gray-500 font-mono">{ticket.assetId}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{ticket.issue}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-semibold ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{ticket.date}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}