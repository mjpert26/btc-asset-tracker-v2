"use client";
import { motion } from "framer-motion";
import { Search, Filter, Download, ChevronDown, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface Asset {
  id: string;
  type: string;
  model: string;
  serialNumber: string;
  status: "Active" | "Available" | "Repair";
  assignedTo: string;
  purchaseDate: string;
}

const mockAssets: Asset[] = [
  {
    id: "AST-001",
    type: "Laptop",
    model: "MacBook Pro 16\" M3 Max",
    serialNumber: "MBP2024001",
    status: "Active",
    assignedTo: "Sarah Chen",
    purchaseDate: "2024-01-15"
  },
  {
    id: "AST-002",
    type: "Laptop",
    model: "MacBook Pro 14\" M2",
    serialNumber: "MBP2023045",
    status: "Active",
    assignedTo: "James Rodriguez",
    purchaseDate: "2023-11-20"
  },
  {
    id: "AST-003",
    type: "Monitor",
    model: "Dell UltraSharp 27\" 4K",
    serialNumber: "DELL27-4K-892",
    status: "Active",
    assignedTo: "Emily Watson",
    purchaseDate: "2023-08-10"
  },
  {
    id: "AST-004",
    type: "Laptop",
    model: "MacBook Pro 16\" M2 Pro",
    serialNumber: "MBP2023067",
    status: "Repair",
    assignedTo: "Michael Park",
    purchaseDate: "2023-06-05"
  },
  {
    id: "AST-005",
    type: "Phone",
    model: "iPhone 15 Pro Max",
    serialNumber: "IPH15PM-3421",
    status: "Active",
    assignedTo: "Lisa Anderson",
    purchaseDate: "2024-02-28"
  },
  {
    id: "AST-006",
    type: "Monitor",
    model: "Dell 24\" FHD",
    serialNumber: "DELL24-FHD-445",
    status: "Available",
    assignedTo: "-",
    purchaseDate: "2023-09-12"
  },
  {
    id: "AST-007",
    type: "Keyboard",
    model: "Logitech MX Keys",
    serialNumber: "LGT-MXK-8821",
    status: "Active",
    assignedTo: "David Kim",
    purchaseDate: "2024-01-08"
  },
  {
    id: "AST-008",
    type: "Mouse",
    model: "Logitech MX Master 3S",
    serialNumber: "LGT-MXM3S-7732",
    status: "Active",
    assignedTo: "David Kim",
    purchaseDate: "2024-01-08"
  },
  {
    id: "AST-009",
    type: "Laptop",
    model: "MacBook Air 13\" M2",
    serialNumber: "MBA2023112",
    status: "Available",
    assignedTo: "-",
    purchaseDate: "2023-10-15"
  },
  {
    id: "AST-010",
    type: "Phone",
    model: "Samsung Galaxy S24",
    serialNumber: "SGS24-9981",
    status: "Active",
    assignedTo: "Rachel Green",
    purchaseDate: "2024-03-05"
  },
  {
    id: "AST-011",
    type: "Monitor",
    model: "Dell UltraSharp 27\" 4K",
    serialNumber: "DELL27-4K-893",
    status: "Repair",
    assignedTo: "Tom Wilson",
    purchaseDate: "2023-07-22"
  },
  {
    id: "AST-012",
    type: "Keyboard",
    model: "Logitech MX Keys Mini",
    serialNumber: "LGT-MXKM-5543",
    status: "Available",
    assignedTo: "-",
    purchaseDate: "2024-02-14"
  },
  {
    id: "AST-013",
    type: "Laptop",
    model: "MacBook Pro 14\" M3",
    serialNumber: "MBP2024023",
    status: "Active",
    assignedTo: "Anna Martinez",
    purchaseDate: "2024-03-18"
  },
  {
    id: "AST-014",
    type: "Mouse",
    model: "Logitech MX Anywhere 3",
    serialNumber: "LGT-MXA3-2234",
    status: "Active",
    assignedTo: "Chris Taylor",
    purchaseDate: "2023-12-10"
  },
  {
    id: "AST-015",
    type: "Monitor",
    model: "Dell 24\" FHD",
    serialNumber: "DELL24-FHD-446",
    status: "Available",
    assignedTo: "-",
    purchaseDate: "2023-09-12"
  }
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAssets = mockAssets.filter(asset => {
    const matchesSearch = 
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || asset.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Available":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Repair":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Asset Inventory</h2>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-2 text-white focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Available">Available</option>
              <option value="Repair">Repair</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Asset ID</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Type</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Model</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Serial Number</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Status</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Assigned To</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Purchase Date</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Actions</th>
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
                <td className="py-4 px-4 text-sm font-medium text-white">{asset.id}</td>
                <td className="py-4 px-4 text-sm text-gray-300">{asset.type}</td>
                <td className="py-4 px-4 text-sm text-gray-300">{asset.model}</td>
                <td className="py-4 px-4 text-sm text-gray-400 font-mono">{asset.serialNumber}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-300">{asset.assignedTo}</td>
                <td className="py-4 px-4 text-sm text-gray-400">{asset.purchaseDate}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                      <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No assets found matching your criteria.</p>
        </div>
      )}

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
        <p className="text-sm text-gray-400">
          Showing {filteredAssets.length} of {mockAssets.length} assets
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}