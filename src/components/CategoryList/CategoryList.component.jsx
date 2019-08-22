import React from "react";

import "./CategoryList.style.css";
import CategoryButton from "./CategoryButton/CategoryButton.component";

function CategoryList(props) {
  const categories = Object.entries(props.categories).map((category, index) => {
    return <CategoryButton handleCategoryClick={props.handleCategoryClick} key={index} categoryName={category[0]} />;
  });
  return <div className="CategoryList">{categories}</div>;
}

export default CategoryList;
