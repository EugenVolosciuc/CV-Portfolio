import React from "react";

import "./CategoryList.style.css";
import Category from "./Category/Category.component";

function CategoryList(props) {
  const categories = Object.entries(props.categories).map((category, index) => {
    return <Category key={index} categoryName={category[0]} />;
  });
  return <div className="CategoryList">{categories}</div>;
}

export default CategoryList;
