import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const chime = new Audio("/chime.mp3");
    chime.preload = "auto";
    chime.volume = 0.8;

    const playAudio = async () => {
      try {
        await chime.play();
      } catch (err) {
        console.error("Audio play error:", err);
      }
    };

    playAudio();

    const timer = setTimeout(() => setFadeOut(true), 2300); // start fade at 2300ms
    const completeTimer = setTimeout(() => onComplete(), 2800); // slightly later to match fade

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-black to-[#111] flex flex-col items-center justify-center z-[9999] text-white overflow-x-hidden px-6 xs:px-8 sm:px-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }} // smoother fade out
    >
      <motion.img
        src="/tkmod3.webp"
        alt="TK Logo"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-28 h-auto mb-4"
      />
      <motion.h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-serif uppercase max-w-[85vw] xs:max-w-[90vw] text-center tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <span
          className="glow-text"
          style={{ whiteSpace: "normal", display: "inline-block", maxWidth: "100%" }}
        >
          TITANK ENTERTAINMENT
        </span>
      </motion.h1>
    </motion.div>
  );
};

export default IntroAnimation;
