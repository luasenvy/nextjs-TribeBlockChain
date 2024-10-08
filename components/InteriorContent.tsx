"use client";

import { motion } from "framer-motion";

export default function InteriorContent({ children }: React.PropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="py-32 bg-zinc-900/30 backdrop-blur-sm"
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}
