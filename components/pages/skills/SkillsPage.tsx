"use client";

import { skills } from "@/components/data/skills";
import { motion } from "motion/react";
import React from "react";

const SkillsPage = () => {
  return skills.map(({ category, items }, idx) => (
    <motion.div
      key={category}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.5, duration: 0.5 }}
      className="h-full"
    >
      <h3 className="text-2xl underline underline-offset-4 pb-5">
        {category}:
      </h3>
      <ul>
        {items.map((skill) => (
          <li className="list-disc text-xl ml-4" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  ));
};

export default SkillsPage;
