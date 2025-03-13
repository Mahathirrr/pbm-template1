import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Wrench, Zap, Cpu, CircuitBoard } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 h-screen flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 w-4 h-4"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -200, null],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Logo container with glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 blur-xl transform scale-150" />
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.8)",
                "0 0 30px rgba(255,255,255,0.4)",
                "0 0 0px rgba(255,255,255,0.8)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-full p-8 shadow-lg relative z-10"
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Rotating circuits animation */}

              {/* CPU icon in the center */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <Cpu size={40} className="text-blue-600" />
              </motion.div>

              {/* Zap icon that pulses */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  x: [0, 15, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute z-10"
              >
                <Zap size={30} className="text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text animations */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ letterSpacing: "0px" }}
            animate={{ letterSpacing: "1px" }}
            transition={{ delay: 1, duration: 1 }}
            className="text-4xl font-bold text-white mb-2 tracking-wide"
          >
            <motion.span
              animate={{
                color: ["#ffffff", "#e0f2fe", "#ffffff"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Elektroni
            </motion.span>
            <motion.span
              animate={{
                color: ["#e0f2fe", "#ffffff", "#e0f2fe"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Care
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-3"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-blue-50 text-lg font-light"
          >
            Expert Electronics Repair
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;

