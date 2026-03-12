"use client";
import { motion } from "framer-motion";
import { Search, Laptop, Monitor, Keyboard, Mouse, Dock } from "lucide-react";
import { useState } from "react";

const mockAssets = [
  { id: "BTC-LP-001", type: "Laptop", model: "Dell XPS 15", serial: "DXP15-2024-A1B2", status: "Assigned", assignedTo: "Sarah Johnson", purchaseDate: "2024-01-15" },
  { id: "BTC-LP-002", type: "Laptop", model: "MacBook Pro 16", serial: "MBP16-2024-X9Y8", status: "Available", assignedTo: "-", purchaseDate: "2024-02-20" },
  { id: "BTC-LP-003", type: "Laptop", model: "ThinkPad X1 Carbon", serial: "TPX1-2024-C3D4", status: "Assigned", assignedTo: "Michael Chen", purchaseDate: "2024-01-10" },
  { id: "BTC-MN-001", type: "Monitor", model: "Dell UltraSharp 27", serial: "DUS27-2024-E5F6", status: "Assigned", assignedTo: "Sarah Johnson", purchaseDate: "2024-01-15" },
  { id: "BTC-MN-002", type: "Monitor", model: "LG 32 4K", serial: "LG32-2024-G7H8", status: "Available", assignedTo: "-", purchaseDate: "2024-03-05" },
  { id: "BTC-MN-003", type: "Monitor", model: "Samsung 34 Curved", serial: "SAM34-2024-I9J0", status: "In Repair", assignedTo: "Emily Rodriguez", purchaseDate: "2023-11-20" },
  { id: "BTC-KB-001", type: "Keyboard", model: "Logitech MX Keys", serial: "LMXK-2024-K1L2", status: "Assigned", assignedTo: "David Park", purchaseDate: "2024-02-01" },
  { id: "BTC-KB-002", type: "Keyboard", model: "Apple Magic Keyboard", serial: "AMKB-2024-M3N4", status: "Available", assignedTo: "-", purchaseDate: "2024-02-20" },
  { id: "BTC-MS-001", type: "Mouse", model: "Logitech MX Master 3", serial: "LMX3-2024-O5P6", status: "Assigned", assignedTo: "Michael Chen", purchaseDate: "2024-01-10" },
  { id: "BTC-MS-002", type: "Mouse", model: "Apple Magic Mouse", serial: "AMMS-2024-Q7R8", status: "Available", assignedTo: "-", purchaseDate: "2024-02-20" },
  { id: "BTC-DK-001", type: "Docking Station", model: "Dell WD19TB", serial: "DWD19-2024-S9T0", status: "Assigned", assignedTo: "Sarah Johnson", purchaseDate: "2024-01-15" },
  { id: "BTC-DK-002", type: "Docking Station", model: "CalDigit TS4", serial: "CTS4-2024-U1V2", status: "Available", assignedTo: "-", purchaseDate: "2024-03-01" },
  { id: "BTC-LP-004", type: "Laptop", model: "HP EliteBook 840", serial: "HPE84-2024-W3X4", status: "In Repair", assignedTo: "James Wilson", purchaseDate: "2023-12-10" },
  { id: "BTC-MN-004", type: "Monitor", model: "BenQ PD2700U", serial: "BPD27-2024-Y5Z6", status: "Assigned", assignedTo: "David Park", purchaseDate: "2024-02-01" },
  { id: "BTC-KB-003", type: "Keyboard", model: "Keychron K8", serial: "KCK8-2024-A7B8", status: "Available", assignedTo: "-", purchaseDate: "2024-03-10" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Available": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Assigned": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "In Repair": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Laptop": return <Laptop className="w-4 h-4" />;
    case "Monitor": return <Monitor className="w-4 h-4" />;
    case "Keyboard": return <Keyboard className="w-4 h-4" />;
    case "Mouse": return <Mouse className="w-4 h-4" />;
    case "Docking Station": return <Dock className="w-4 h-4" />;
    default: return <Laptop className="w-4 h-4" />;
  }
};

export default function AssetsTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssets = mockAssets.filter(asset =>
    asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.serial.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search assets by ID, type, model, serial, or assignee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1E293B] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1E293B] border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Asset ID</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Model</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Serial Number</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Assigned To</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, index) => (
                <motion.tr
                  key={asset.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-blue-400 font-mono text-sm">{asset.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      {getTypeIcon(asset.type)}
                      <span className="text-sm">{asset.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white text-sm">{asset.model}</td>
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">{asset.serial}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300 text-sm">{asset.assignedTo}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{asset.purchaseDate}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAssets.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No assets found matching your search.
          </div>
        )}
      </motion.div>
    </div>
  );
}