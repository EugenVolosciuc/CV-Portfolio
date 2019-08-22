import React from "react";
import './Project.style.css';

function Project(props) {
  return (
    <div className="Project">
      <div className="img-container">
        {props.details.img !== undefined ? (
          <img src={props.details.img[0]} alt={props.details.title} />
        ) : null}
      </div>
      <h3>{props.details.title}</h3>
      <p>{props.details.description}</p>
    </div>
  );
}

export default Project;
