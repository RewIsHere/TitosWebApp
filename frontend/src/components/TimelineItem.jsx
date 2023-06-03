import React from "react";

const TimelineItem = ({ title, imageSrc, description, date }) => {
  return (
    <li>
      <div className="content">
        <h3>{title}</h3>
        <figure>
          <img src={imageSrc} alt="" />
        </figure>
        <p>{description}</p>
      </div>
      <div className="time">
        <h4>{date}</h4>
      </div>
    </li>
  );
};

export default TimelineItem;
