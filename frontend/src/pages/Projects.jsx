import React from "react";
import CauseCard from "../components/CauseCard";
import Dropdown from "../components/Dropdown";
import ProjectCategory from "../components/ProjectCategory";

const Projects = () => {
  return (
    <div>
      <Dropdown />
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          Categories
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          Please select a category from the dropdown
        </p>
      </div>
      <ProjectCategory title="Most Popular" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <CauseCard />
        <CauseCard />
        <CauseCard />
      </div>
      <ProjectCategory title="Most Recent" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <CauseCard />
        <CauseCard />
        <CauseCard />
      </div>
      <ProjectCategory title="All Causes" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 gap-y-10">
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
        <CauseCard />
      </div>
    </div>
  );
};

export default Projects;
