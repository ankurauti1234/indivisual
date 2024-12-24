import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "group relative min-h-[300px] cursor-pointer overflow-hidden rounded-xl p-8",
        "bg-background/50 backdrop-blur-sm border border-primary/10",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5 before:opacity-0 before:transition-opacity",
        "hover:before:opacity-100",
        "after:absolute after:inset-0 after:bg-grid-white/[0.02] after:opacity-0 after:transition-opacity",
        "hover:after:opacity-100",
        className
      )}
    >
      {/* Gradient orb effects */}
      <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Card shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rotate-45 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>

      {/* Content container with relative positioning */}
      <div className=" z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Interactive gradient border */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-primary/10 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BounceCard;
