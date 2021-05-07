import React, { useState } from "react";
import { Link } from "react-router-dom";
import CauseCard from "../components/CauseCard";
import Dropdown from "../components/Dropdown";
import ProjectCategory from "../components/ProjectCategory";

const Projects = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All Causes");

  const mostRecent = [...props.causes].sort((a, b) => a.start_date - b.start_date);
  const mostPopular = [...props.causes].sort((a, b) => b.get_vote_count - a.get_vote_count);

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
      <Dropdown selectedCategory={selectedCategory} onSelect={handleDropdownSelect} />
      <div className="py-12">
        <ProjectCategory title={selectedCategory} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {selectedCategory === "Most Recent" &&
            mostRecent.map((cause, index) => (
              <Link to={{ pathname: "/project/" + cause.id }}>
                <CauseCard key={index} cause={cause} />
              </Link>
            ))}
          {selectedCategory === "Most Popular" &&
            mostPopular.map((cause, index) => (
              <Link to={{ pathname: "/project/" + cause.id }}>
                <CauseCard key={index} cause={cause} />
              </Link>
            ))}
          {selectedCategory === "All Causes" &&
            props.causes.map((cause, index) => (
              <Link to={{ pathname: "/project/" + cause.id }}>
                <CauseCard key={index} cause={cause} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
