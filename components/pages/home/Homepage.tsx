"use client";

import React, { useState } from "react";
import { homeData } from "@/components/data/home";
import { motion } from "motion/react";
import classNames from "classnames";

const Homepage = () => {
  const [activeLine, setActiveLine] = useState<number>(0);

  return homeData.map((line, i) => {
    const isActive = activeLine === i;

    if (i > activeLine) return null;

    return (
      <motion.p
        key={i}
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        transition={{
          duration: line.length * 0.04,
          ease: "linear",
          onComplete: () => {
            if (isActive) setActiveLine(i + 1);
          },
        }}
        className={classNames("pr-2 whitespace-nowrap", {
          "border-r-4 border-main": activeLine === i,
          "overflow-hidden": activeLine === i,
          block: activeLine >= i,
          hidden: activeLine < i,
        })}
      >
        {line}
      </motion.p>
    );
  });
};

export default Homepage;
