"use client";
import { motion } from "framer-motion";
import { Package, Users, Wrench, CheckCircle } from "lucide-react";

const stats = [
  {
    label: "Total Assets",
    value: "75",
    icon: Package,
    color: "from-blue-600 to-blue-400"
  },
  {
    label: "Active Assignments",
    value: "52",
    icon: Users,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    label: "In Repair",
    value: "8",
    icon: Wrench,
    color: "from-orange-600 to-orange-400"
  },
  {
    label: "Available",
    value: "15",
    icon: CheckCircle,
    color: "from-green-600 to-green-400"
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br p-6"
            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-90`}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/90 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}