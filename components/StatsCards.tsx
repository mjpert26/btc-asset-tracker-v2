"use client";
import { motion } from "framer-motion";
import { Package, Users, Wrench, CheckCircle } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Assets",
      value: "125",
      icon: Package,
      change: "+12%",
      changeType: "increase"
    },
    {
      title: "Active Assignments",
      value: "98",
      icon: Users,
      change: "+8%",
      changeType: "increase"
    },
    {
      title: "In Repair",
      value: "8",
      icon: Wrench,
      change: "-3%",
      changeType: "decrease"
    },
    {
      title: "Available",
      value: "19",
      icon: CheckCircle,
      change: "+5%",
      changeType: "increase"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl shadow-lg shadow-blue-500/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === "increase" 
                    ? "bg-emerald-500/10 text-emerald-400" 
                    : "bg-red-500/10 text-red-400"
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                <p className="text-white text-3xl font-bold tracking-tight">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}