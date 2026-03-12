"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, Package, Users, Wrench, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Assets", href: "/assets", icon: Package },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Repairs", href: "/repairs", icon: Wrench },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-64 bg-[#0F172A] border-r border-white/10 p-6 flex flex-col"
    >
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-white">
          Big Think <span className="text-blue-500">Capital</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">Asset Tracker</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
            BT
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">admin@bigthink.com</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}