import React from "react";

const ProjectCategory = ({ title }) => {
  return (
    <div className="heading-line">
      <h2 className="text-3xl font-extrabold text-center md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default ProjectCategory;
