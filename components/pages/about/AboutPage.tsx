"use client";

import { aboutText, languages } from "@/components/data/about";
import classNames from "classnames";
import { motion } from "motion/react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {aboutText?.concat(languages).map((el, idx) => (
        <motion.p
          key={idx}
          initial={{ x: "-150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.7 }}
          className={classNames("text-3xl text-center", { "pb-5": idx <= 1 })}
        >
          {el}
        </motion.p>
      ))}
    </div>
  );
};

export default AboutPage;
