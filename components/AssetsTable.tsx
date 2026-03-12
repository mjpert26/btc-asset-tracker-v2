"use client";

import { motion } from "framer-motion";
import { Search, Laptop, Monitor, Mouse, Keyboard, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";

const mockAssets = [
  { id: "LPT-001", type: "Laptop", model: "Dell Latitude 5420", serial: "DL5420-78923", status: "Active", assignedTo: "Sarah Johnson", location: "HQ - Floor 3" },
  { id: "LPT-002", type: "Laptop", model: "HP EliteBook 840", serial: "HP840-45612", status: "Active", assignedTo: "Michael Chen", location: "HQ - Floor 2" },
  { id: "LPT-003", type: "Laptop", model: "Lenovo ThinkPad X1", serial: "LN-X1-89234", status: "Maintenance", assignedTo: "Unassigned", location: "IT Storage" },
  { id: "LPT-004", type: "Laptop", model: "Dell XPS 15", serial: "DL-XPS-12345", status: "Active", assignedTo: "Emily Rodriguez", location: "Remote" },
  { id: "LPT-005", type: "Laptop", model: "HP ProBook 450", serial: "HP450-67890", status: "Active", assignedTo: "James Wilson", location: "HQ - Floor 1" },
  { id: "MON-001", type: "Monitor", model: "LG UltraWide 34", serial: "LG34-23456", status: "Active", assignedTo: "Sarah Johnson", location: "HQ - Floor 3" },
  { id: "MON-002", type: "Monitor", model: "Samsung 27 4K", serial: "SM27-78901", status: "Active", assignedTo: "Michael Chen", location: "HQ - Floor 2" },
  { id: "MON-003", type: "Monitor", model: "LG 24 FHD", serial: "LG24-34567", status: "Active", assignedTo: "James Wilson", location: "HQ - Floor 1" },
  { id: "MON-004", type: "Monitor", model: "Samsung Curved 32", serial: "SM32-90123", status: "Inactive", assignedTo: "Unassigned", location: "IT Storage" },
  { id: "MON-005", type: "Monitor", model: "LG 27 QHD", serial: "LG27-45678", status: "Active", assignedTo: "Emily Rodriguez", location: "Remote" },
  { id: "PER-001", type: "Keyboard", model: "Logitech MX Keys", serial: "LG-MX-56789", status: "Active", assignedTo: "Sarah Johnson", location: "HQ - Floor 3" },
  { id: "PER-002", type: "Mouse", model: "Logitech MX Master 3", serial: "LG-MM3-67890", status: "Active", assignedTo: "Michael Chen", location: "HQ - Floor 2" },
  { id: "PER-003", type: "Keyboard", model: "Logitech K380", serial: "LG-K380-78901", status: "Active", assignedTo: "Emily Rodriguez", location: "Remote" },
  { id: "PER-004", type: "Mouse", model: "Logitech MX Anywhere 3", serial: "LG-MA3-89012", status: "Active", assignedTo: "James Wilson", location: "HQ - Floor 1" },
  { id: "LPT-006", type: "Laptop", model: "Lenovo ThinkBook 15", serial: "LN-TB15-90123", status: "Active", assignedTo: "David Martinez", location: "HQ - Floor 2" }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Active":
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case "Maintenance":
      return <Clock className="w-5 h-5 text-yellow-400" />;
    case "Inactive":
      return <AlertCircle className="w-5 h-5 text-red-400" />;
    default:
      return null;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Laptop":
      return <Laptop className="w-5 h-5 text-blue-400" />;
    case "Monitor":
      return <Monitor className="w-5 h-5 text-purple-400" />;
    case "Keyboard":
      return <Keyboard className="w-5 h-5 text-cyan-400" />;
    case "Mouse":
      return <Mouse className="w-5 h-5 text-pink-400" />;
    default:
      return null;
  }
};

export default function AssetsTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssets = mockAssets.filter(asset =>
    Object.values(asset).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <section className="py-24 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Assets Inventory
          </h2>
          <p className="text-gray-400 text-lg">
            Track and manage all company assets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Asset ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Serial Number</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Assigned To</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredAssets.map((asset, index) => (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-blue-400 font-mono">{asset.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(asset.type)}
                        <span className="text-sm text-white">{asset.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{asset.model}</td>
                    <td className="px-6 py-4 text-sm text-gray-400 font-mono">{asset.serial}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(asset.status)}
                        <span className={`text-sm ${
                          asset.status === "Active" ? "text-green-400" :
                          asset.status === "Maintenance" ? "text-yellow-400" :
                          "text-red-400"
                        }`}>
                          {asset.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{asset.assignedTo}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{asset.location}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-between text-sm text-gray-400"
        >
          <p>Showing {filteredAssets.length} of {mockAssets.length} assets</p>
          <p>Total Value: $127,450</p>
        </motion.div>
      </div>
    </section>
  );
}