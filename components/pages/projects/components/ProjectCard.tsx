import { ProjectProps } from "@/components/data/projects";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

interface Props {
  project: ProjectProps;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className={classNames("grid py-10 gap-10 items-center", {
        "xl:grid-cols-[0.6fr_0.2fr_0.5fr] grid-cols-[1fr_0.3fr]":
          project?.imgDesktopSrc,
        "grid-cols-2 justify-items-center": !project?.imgDesktopSrc,
      })}
    >
      {project?.imgDesktopSrc && (
        <div className="flex items-start">
          <Image
            className="w-full"
            src={project?.imgDesktopSrc}
            alt="desktop"
            width={800}
            height={400}
          />
        </div>
      )}
      {project?.imgMobileSrc && (
        <div className="flex items-start">
          <Image
            className="h-full w-full"
            src={project?.imgMobileSrc}
            alt="mobile"
            width={250}
            height={400}
          />
        </div>
      )}

      <div className="h-full w-full items-center flex flex-col gap-5 xl:col-auto col-span-full">
        <div>
          <h2 className="text-xl md:text-2xl pb-2 italic">Description:</h2>
          <p className="text-base md:text-lg">{project?.description}</p>
        </div>

        {project?.linkLive && (
          <Link
            href={project?.linkLive || "#"}
            target="_blank"
            className="mr-4 underline underline-offset-4 flex gap-2 items-center"
          >
            <FaLink size={16} color="currentColor" />
            <p>Visit web</p>
          </Link>
        )}
        <div className="flex flex-wrap gap-5 items-center">
          {project?.tech?.map((el, idx) => (
            <div
              className="text-sm md:text-base border px-2 py-0.5 rounded-md flex items-center bg-main text-black"
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
