"use client";
import { motion } from "framer-motion";
import { User, Laptop, Monitor, Keyboard } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Engineering",
    email: "sarah.j@company.com",
    assignments: [
      { type: "Laptop", model: "Dell XPS 15", serial: "DL-1001" },
      { type: "Monitor", model: "LG 27UK850", serial: "LG-2001" },
      { type: "Keyboard", model: "Logitech MX Keys", serial: "LT-3001" }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Design",
    email: "michael.c@company.com",
    assignments: [
      { type: "Laptop", model: "HP ZBook Studio", serial: "HP-1005" },
      { type: "Monitor", model: "Samsung Odyssey G7", serial: "SM-2004" },
      { type: "Mouse", model: "Logitech MX Master 3", serial: "LT-3006" }
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    department: "Marketing",
    email: "emily.r@company.com",
    assignments: [
      { type: "Laptop", model: "Lenovo ThinkPad X1", serial: "LN-1007" },
      { type: "Monitor", model: "LG UltraWide 34", serial: "LG-2007" }
    ]
  },
  {
    id: 4,
    name: "James Wilson",
    department: "Sales",
    email: "james.w@company.com",
    assignments: [
      { type: "Laptop", model: "Dell Latitude 7420", serial: "DL-1010" },
      { type: "Monitor", model: "Samsung 24 Basic", serial: "SM-2010" },
      { type: "Headset", model: "Logitech Zone Wireless", serial: "LT-3010" }
    ]
  },
  {
    id: 5,
    name: "Lisa Park",
    department: "HR",
    email: "lisa.p@company.com",
    assignments: [
      { type: "Laptop", model: "HP EliteBook 840", serial: "HP-1012" },
      { type: "Monitor", model: "LG 24MK430H", serial: "LG-2012" }
    ]
  },
  {
    id: 6,
    name: "David Kim",
    department: "Engineering",
    email: "david.k@company.com",
    assignments: [
      { type: "Laptop", model: "Lenovo ThinkPad P15", serial: "LN-1014" },
      { type: "Monitor", model: "Samsung Odyssey G5", serial: "SM-2014" },
      { type: "Keyboard", model: "Logitech K380", serial: "LT-3014" }
    ]
  }
];

const getIconForType = (type: string) => {
  switch (type.toLowerCase()) {
    case "laptop":
      return <Laptop className="w-4 h-4" />;
    case "monitor":
      return <Monitor className="w-4 h-4" />;
    case "keyboard":
    case "mouse":
    case "headset":
      return <Keyboard className="w-4 h-4" />;
    default:
      return <Laptop className="w-4 h-4" />;
  }
};

export default function EmployeeAssignments() {
  return (
    <section className="py-16 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Employee Assignments</h2>
          <p className="text-gray-400 text-lg">View equipment assigned to each employee</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-1">{employee.name}</h3>
                  <p className="text-sm text-[#3B82F6] mb-1">{employee.department}</p>
                  <p className="text-xs text-gray-400 truncate">{employee.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Assigned Equipment</span>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                    {employee.assignments.length} items
                  </span>
                </div>
                {employee.assignments.map((assignment, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#1E40AF]/30 transition-colors"
                  >
                    <div className="text-[#3B82F6]">
                      {getIconForType(assignment.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{assignment.model}</p>
                      <p className="text-xs text-gray-400">{assignment.serial}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}