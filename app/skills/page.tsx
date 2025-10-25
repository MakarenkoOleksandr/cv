import SkillsPage from "@/components/pages/skills/SkillsPage";
import React from "react";

const page = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 w-full max-w-6xl mx-auto justify-center items-center h-full py-16">
      <SkillsPage />
    </div>
  );
};

export default page;
