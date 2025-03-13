import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, ArrowLeft, Eye, EyeOff } from "lucide-react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/welcome")}
        className="mb-8 p-2 -ml-2 text-gray-600 hover:text-gray-900 flex items-center"
      >
        <ArrowLeft size={20} />
        <span className="ml-1">Back</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Sign in to continue with ElektroniCare</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <LockKeyhole
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 pl-12 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-sm text-cyan-600 hover:text-cyan-700">
            Forgot password?
          </button>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
          onClick={() => navigate("/dashboard")}
        >
          Sign In
        </motion.button>

        <p className="text-center text-gray-600 pt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-cyan-600 font-semibold hover:text-cyan-700"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginScreen;

// CSS untuk ditambahkan ke file CSS global Anda
/*
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));
}

.via-cyan-400 {
  --tw-gradient-stops: var(--tw-gradient-from), #22d3ee, var(--tw-gradient-to, rgba(34, 211, 238, 0));
}

.to-indigo-600 {
  --tw-gradient-to: #4f46e5;
}
*/

