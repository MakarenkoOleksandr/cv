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
        "grid-cols-[1fr_0.4fr_0.5fr]": project?.imgDesktopSrc,
        "grid-cols-2 justify-items-center": !project?.imgDesktopSrc,
      })}
    >
      {project?.imgDesktopSrc && (
        <div className="h-full flex items-start">
          <Image
            className="w-full "
            src={project?.imgDesktopSrc}
            alt="desktop"
            width={800}
            height={400}
          />
        </div>
      )}
      {project?.imgMobileSrc && (
        <div className="h-full flex items-start">
          <Image
            className="h-full"
            src={project?.imgMobileSrc}
            alt="mobile"
            width={250}
            height={400}
          />
        </div>
      )}

      <div className="h-full flex flex-col gap-5">
        <div>
          <h2 className="text-2xl pb-2 italic">Description:</h2>
          <p className="text-lg">{project?.description}</p>
        </div>
        <div>
          <h2 className="text-2xl pb-2 italic">Technologies:</h2>
          <p className="text-lg">{project?.tech}</p>
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
      </div>
    </div>
  );
};

export default ProjectCard;
