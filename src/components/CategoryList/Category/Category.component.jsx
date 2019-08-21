import React from "react";
import { Link } from "react-router-dom";

import "./Category.style.css";

function Category(props) {
  return (
    <Link to={`/${props.categoryName.split(" ").join("-")}`}>
      <div className="Category">
        <p>{props.categoryName}</p>
      </div>
    </Link>
  );
}

export default Category;
