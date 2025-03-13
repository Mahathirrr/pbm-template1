import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Laptop, Tv, Headphones, 
  Clock, CheckCircle, AlertCircle, 
  Search, Bell, User, Wrench, Zap
} from 'lucide-react';

const DashboardScreen = () => {
  const categories = [
    { icon: Smartphone, name: 'Phones' },
    { icon: Laptop, name: 'Laptops' },
    { icon: Tv, name: 'TVs' },
    { icon: Headphones, name: 'Audio' },
  ];

  const repairs = [
    {
      device: 'iPhone 13',
      issue: 'Screen Replacement',
      status: 'In Progress',
      icon: Clock,
      statusColor: 'text-yellow-500',
    },
    {
      device: 'MacBook Pro',
      issue: 'Battery Service',
      status: 'Completed',
      icon: CheckCircle,
      statusColor: 'text-green-500',
    },
    {
      device: 'Samsung TV',
      issue: 'Power Issue',
      status: 'Pending',
      icon: AlertCircle,
      statusColor: 'text-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-6 pb-24">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <Zap size={20} className="text-cyan-500" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center opacity-20"
              >
                <Wrench size={20} className="text-cyan-500" />
              </motion.div>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">ElektroniCare</h1>
              <p className="text-cyan-50">Welcome back, Alex!</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 text-white">
              <Bell size={24} />
            </button>
            <button className="p-2 text-white">
              <User size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for repair services..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:bg-white/20"
          />
        </div>
      </div>

      <div className="px-6 -mt-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg shadow-cyan-500/10"
        >
          <h2 className="text-lg font-semibold mb-4">Repair Services</h2>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                  {React.createElement(category.icon, { size: 24 })}
                </div>
                <span className="text-sm text-gray-600">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Repairs</h2>
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
                    <h3 className="font-semibold">{repair.device}</h3>
                    <p className="text-sm text-gray-600">{repair.issue}</p>
                  </div>
                  <div className={`flex items-center gap-2 ${repair.statusColor}`}>
                    {React.createElement(repair.icon, { size: 18 })}
                    <span className="text-sm">{repair.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;