import React from "react";
import { certificates, commercial } from "@/components/data/experience";
import { motion } from "motion/react";
import Link from "next/link";
import classNames from "classnames";

export const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-[800px]"
      >
        <h2 className="text-2xl pb-2 italic underline underline-offset-4">
          Commercial experience:
        </h2>
        {commercial.map((el, idx) => (
          <div key={idx} className="flex flex-col pb-5">
            <p>Company: {el.label}</p>
            <p>Position: {el.position}</p>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full grid min-w-[70vw]"
      >
        <h2 className="text-2xl pb-2 italic underline underline-offset-4 text-center">
          Education:
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {certificates.map((el, idx) => (
            <div
              key={idx}
              className={classNames(
                "flex flex-col gap-5 h-full justify-between",
                { "md:border-none border-b md:pb-0 pb-5": idx !== 2 },
              )}
            >
              <p>{el.LinkInfo}</p>
              <div className="flex flex-wrap gap-3 items-center">
                {el?.skills?.map((el, idx) => (
                  <div
                    className="text-base border px-1 rounded-md flex items-center bg-main text-black"
                    key={idx}
                  >
                    {el}
                  </div>
                ))}
              </div>
              <Link
                className="flex items-center gap-3"
                href={el.Link}
                target="_blank"
              >
                Certificate link: {el.icon}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
