"use client";
import { motion } from "framer-motion";
import { Bell, Search, Settings, User } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E293B]/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40"
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, employees, or serial numbers..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <Bell className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-full text-xs flex items-center justify-center text-white font-semibold">
              3
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <Settings className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </motion.button>

          <div className="w-px h-8 bg-white/10"></div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Sarah Johnson</p>
              <p className="text-xs text-gray-400">IT Manager</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}