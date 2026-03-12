"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";

const chartData = [
  { month: "Jan", assets: 98, repairs: 12, cost: 45000 },
  { month: "Feb", assets: 105, repairs: 8, cost: 38000 },
  { month: "Mar", assets: 112, repairs: 15, cost: 52000 },
  { month: "Apr", assets: 118, repairs: 10, cost: 41000 },
  { month: "May", assets: 121, repairs: 9, cost: 39000 },
  { month: "Jun", assets: 125, repairs: 8, cost: 35000 },
];

const assetsByCategory = [
  { name: "Laptops", count: 45, percentage: 36, color: "bg-blue-500" },
  { name: "Monitors", count: 38, percentage: 30, color: "bg-cyan-500" },
  { name: "Peripherals", count: 25, percentage: 20, color: "bg-indigo-500" },
  { name: "Mobile Devices", count: 17, percentage: 14, color: "bg-purple-500" },
];

const repairTrends = [
  { category: "Hardware", count: 45, change: -12 },
  { category: "Software", count: 23, change: 8 },
  { category: "Network", count: 15, change: -5 },
  { category: "Other", count: 9, change: 3 },
];

export default function Charts() {
  const maxAssets = Math.max(...chartData.map(d => d.assets));
  const maxRepairs = Math.max(...chartData.map(d => d.repairs));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Asset Growth</h3>
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span>+27.5% vs last period</span>
          </div>
        </div>
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between gap-2">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${(data.assets / maxAssets) * 100}%` }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                  {data.assets} assets
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between pt-2 border-t border-white/10 mt-2">
            {chartData.map(data => (
              <span key={data.month} className="text-xs text-gray-400 flex-1 text-center">
                {data.month}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Assets by Category</h3>
          <Activity className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {assetsByCategory.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">{category.name}</span>
                <span className="text-sm font-semibold text-white">{category.count}</span>
              </div>
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${category.percentage}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  className={`absolute inset-y-0 left-0 ${category.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Repair Trends</h3>
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <TrendingDown className="w-4 h-4" />
            <span>-14% repairs</span>
          </div>
        </div>
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between gap-2">
            {chartData.map((data, index) => (
              <motion.div
                key={`repair-${data.month}`}
                initial={{ height: 0 }}
                animate={{ height: `${(data.repairs / maxRepairs) * 100}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-rose-600 to-orange-400 rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                  {data.repairs} repairs
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between pt-2 border-t border-white/10 mt-2">
            {chartData.map(data => (
              <span key={`repair-label-${data.month}`} className="text-xs text-gray-400 flex-1 text-center">
                {data.month}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Repair Categories</h3>
          <DollarSign className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {repairTrends.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
                  {item.count}
                </div>
                <span className="text-white font-medium">{item.category}</span>
              </div>
              <div className={`flex items-center gap-1 text-sm ${item.change < 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.change < 0 ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                <span>{Math.abs(item.change)}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}