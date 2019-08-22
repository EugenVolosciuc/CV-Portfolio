import React from "react";
import { Link } from "react-router-dom";

import "./CategoryButton.style.css";

function CategoryButton(props) {
  return (
    <Link to={`/${props.categoryName.split(" ").join("-")}`}>
      <div onClick={props.handleCategoryClick} className="CategoryButton">
        <p>{props.categoryName}</p>
      </div>
    </Link>
  );
}

export default CategoryButton;
