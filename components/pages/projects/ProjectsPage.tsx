"use client";

import React, { useRef } from "react";
import { projects } from "@/components/data/projects";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./components/ProjectCard";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import SwiperCore from "swiper";
import { motion } from "motion/react";

const ProjectsPage = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore>(null);

  return (
    <motion.div
      initial={{ x: "-200%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 40 }}
    >
      <Swiper
        className="h-full"
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        slidesPerView={1}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide className="w-full" key={idx}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}

        <div
          ref={prevRef}
          className="absolute top-1/2 left-0 z-10 cursor-pointer transition-all hover:scale-110"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiArrowLeftCircle size={50} color="currentColor" />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-0 z-10 cursor-pointer transition-all hover:scale-110"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiArrowRightCircle size={50} color="currentColor" />
        </div>
        <div className="swiper-pagination bottom-6!" />
      </Swiper>
    </motion.div>
  );
};

export default ProjectsPage;
