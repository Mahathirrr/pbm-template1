import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Bell,
  User,
} from "lucide-react";
import { Logo } from "../components/Logo";

const DashboardScreen = () => {
  const categories = [
    { icon: Smartphone, name: "Phones" },
    { icon: Laptop, name: "Laptops" },
    { icon: Tv, name: "TVs" },
    { icon: Headphones, name: "Audio" },
  ];

  const repairs = [
    {
      device: "iPhone 13",
      issue: "Screen Replacement",
      status: "In Progress",
      icon: Clock,
      badgeClass: "status-badge status-badge-progress",
    },
    {
      device: "MacBook Pro",
      issue: "Battery Service",
      status: "Completed",
      icon: CheckCircle,
      badgeClass: "status-badge status-badge-completed",
    },
    {
      device: "Samsung TV",
      issue: "Power Issue",
      status: "Pending",
      icon: AlertCircle,
      badgeClass: "status-badge status-badge-pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-violet-600 p-6 pb-24">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Logo size={24} className="text-violet-600" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">ElektroniCare</h1>
              <p className="text-violet-100">Welcome back, Alex!</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 text-white hover:bg-violet-500 rounded-lg transition-colors">
              <Bell size={24} />
            </button>
            <button className="p-2 text-white hover:bg-violet-500 rounded-lg transition-colors">
              <User size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for repair services..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-violet-200 border border-violet-400/20 focus:outline-none focus:bg-white/20"
          />
        </div>
      </div>

      <div className="px-6 -mt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Repair Services
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                  {React.createElement(category.icon, { size: 24 })}
                </div>
                <span className="text-sm text-gray-600">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Recent Repairs
          </h2>
          <div className="space-y-4">
            {repairs.map((repair, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {repair.device}
                    </h3>
                    <p className="text-sm text-gray-600">{repair.issue}</p>
                  </div>
                  <div className={repair.badgeClass}>
                    <span className="flex items-center gap-1.5">
                      {React.createElement(repair.icon, { size: 16 })}
                      {repair.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
