import React, { useState } from "react";
import CauseCard from "../components/CauseCard";
import Dropdown from "../components/Dropdown";
import ProjectCategory from "../components/ProjectCategory";

const Projects = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All Causes");

  const handleDropdownSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="py-8 md:py-12 text-center">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          Categories
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          Please select a category from the dropdown.
        </p>
      </div>
      <Dropdown onSelect={handleDropdownSelect} />
      <div className="py-12">
        <ProjectCategory title={selectedCategory} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {selectedCategory === "Most Popular" && <div>Most Popular!</div>}
          {selectedCategory === "Most Popular" && <div>Most Popular!</div>}
          {selectedCategory === "All Causes" && <div>All Causes!</div>}
          {/* props.causes.map((cause, index) => <CauseCard cause={cause} />) */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
