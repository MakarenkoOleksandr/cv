import AboutPage from "@/components/pages/about/AboutPage";
import React from "react";

export const runtime = "edge";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <AboutPage />
    </div>
  );
};

export default page;
