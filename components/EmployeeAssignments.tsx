"use client";
import { motion } from "framer-motion";
import { Laptop, Monitor, Keyboard, Mouse } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Engineering",
    avatar: "SJ",
    assignments: [
      { type: "Laptop", model: "MacBook Pro 16\" M3", icon: Laptop },
      { type: "Monitor", model: "Dell U2723DE", icon: Monitor },
      { type: "Keyboard", model: "Logitech MX Keys", icon: Keyboard },
      { type: "Mouse", model: "Logitech MX Master 3", icon: Mouse },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Design",
    avatar: "MC",
    assignments: [
      { type: "Laptop", model: "MacBook Pro 14\" M3", icon: Laptop },
      { type: "Monitor", model: "LG UltraFine 27\"", icon: Monitor },
      { type: "Mouse", model: "Apple Magic Mouse", icon: Mouse },
    ],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    department: "Marketing",
    avatar: "ER",
    assignments: [
      { type: "Laptop", model: "Dell XPS 15", icon: Laptop },
      { type: "Monitor", model: "Samsung 32\" 4K", icon: Monitor },
      { type: "Keyboard", model: "Microsoft Ergonomic", icon: Keyboard },
    ],
  },
  {
    id: 4,
    name: "David Park",
    department: "Engineering",
    avatar: "DP",
    assignments: [
      { type: "Laptop", model: "MacBook Air M2", icon: Laptop },
      { type: "Monitor", model: "Dell U2723DE", icon: Monitor },
      { type: "Keyboard", model: "Apple Magic Keyboard", icon: Keyboard },
      { type: "Mouse", model: "Logitech MX Master 3", icon: Mouse },
    ],
  },
  {
    id: 5,
    name: "Jessica Williams",
    department: "Sales",
    avatar: "JW",
    assignments: [
      { type: "Laptop", model: "HP EliteBook 840", icon: Laptop },
      { type: "Mouse", model: "Logitech MX Anywhere 3", icon: Mouse },
    ],
  },
  {
    id: 6,
    name: "Ryan Martinez",
    department: "Engineering",
    avatar: "RM",
    assignments: [
      { type: "Laptop", model: "ThinkPad X1 Carbon", icon: Laptop },
      { type: "Monitor", model: "BenQ PD3220U", icon: Monitor },
      { type: "Keyboard", model: "Keychron K8", icon: Keyboard },
    ],
  },
  {
    id: 7,
    name: "Amanda Taylor",
    department: "HR",
    avatar: "AT",
    assignments: [
      { type: "Laptop", model: "MacBook Air M2", icon: Laptop },
      { type: "Monitor", model: "Dell P2422H", icon: Monitor },
    ],
  },
  {
    id: 8,
    name: "James Anderson",
    department: "Finance",
    avatar: "JA",
    assignments: [
      { type: "Laptop", model: "Dell Latitude 7430", icon: Laptop },
      { type: "Monitor", model: "HP Z27", icon: Monitor },
      { type: "Keyboard", model: "Logitech K380", icon: Keyboard },
      { type: "Mouse", model: "Logitech M720", icon: Mouse },
    ],
  },
];

export default function EmployeeAssignments() {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Employee Assignments</h2>
        <p className="text-gray-400">View equipment assigned to each employee</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#1E40AF]/20 via-[#0F172A] to-[#0F172A] border-2 border-[#1E40AF]/30 rounded-2xl p-6 hover:border-[#3B82F6]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
                {employee.avatar}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{employee.name}</h3>
                <p className="text-gray-400 text-sm">{employee.department}</p>
              </div>
            </div>

            <div className="space-y-3">
              {employee.assignments.map((assignment, i) => {
                const Icon = assignment.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1E40AF]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">{assignment.type}</p>
                      <p className="text-sm text-white truncate">{assignment.model}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 text-center">
                {employee.assignments.length} {employee.assignments.length === 1 ? "item" : "items"} assigned
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}