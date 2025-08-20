// NotFound.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed inset-0 bg-[#101010] flex flex-col items-center justify-center z-[9999] text-white px-6 text-center font-serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.img
        src="/tkmod3.webp"
        alt="TK Logo"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-24 h-auto mb-6"
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl tracking-[0.3em] uppercase mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        <span className="glow-text">404 - Not Found</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-white/90 mb-6 max-w-[85vw]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        Looks like you've hit a dead end. Let’s take you back.
      </motion.p>

      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-red-900 text-black font-semibold rounded-full hover:bg-gray-200 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Go Home
      </motion.button>
    </motion.div>
  );
};

export default NotFound;
