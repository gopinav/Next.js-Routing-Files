"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Blog layout rendered");
  return (
    <div>
      <ul>
        <li>
          <Link href="/blog/1">Post 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Post 2</Link>
        </li>
        <li>
          <Link href="/blog/3">Post 3</Link>
        </li>
      </ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
