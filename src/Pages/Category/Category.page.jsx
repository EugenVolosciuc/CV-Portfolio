import React from "react";
import Project from "../../components/CategoryList/CategoryButton/Project/Project.component";

import "./Category.style.css";

function Category(props) {
  const projectsList = props.category[1].map((project, index) => (
    <Project key={index} details={project} />
  ));

  return (
    <div className="Category-page">
      <h2>{`${props.category[0].slice(0, -1)} Designs`}</h2>
      {projectsList}
    </div>
  );
}

export default Category;
