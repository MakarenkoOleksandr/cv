import React from "react";
import { certificates, commercial } from "@/components/data/experience";
import { motion } from "motion/react";
import Link from "next/link";

export const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[800px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl pb-2 italic underline underline-offset-4">
          Education:
        </h2>
        {certificates.map((el, idx) => (
          <div key={idx} className="flex gap-5 items-center">
            <p>{el.LinkInfo}</p>
            <Link href={el.Link} target="_blank">
              {el.icon}
            </Link>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl pb-2 italic underline underline-offset-4">
          Commercial experience:
        </h2>
        {commercial.map((el, idx) => (
          <div key={idx} className="flex flex-col pb-5">
            <p>Company: {el.label}</p>
            <p>Duration: {el.duration}</p>
            <p>Employment: {el.desc}</p>
            <div className="flex items-center gap-5">
              <p>Website: </p>
              <Link href={el.link} target="_blank">
                {el.icon}
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
