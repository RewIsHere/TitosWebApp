import React from "react";

import PropTypes from "prop-types";

import "../styles/__pagetitle.css";

const PageTitle = (props) => {
  return (
    <div className={`page-title-container ${props.rootClassName} `}>
      <h1 className="page-title-titulo">{props.Titulo}</h1>
      <div className="page-title-container1"></div>
    </div>
  );
};

PageTitle.defaultProps = {
  Titulo: "Heading",
  rootClassName: "",
};

PageTitle.propTypes = {
  Titulo: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default PageTitle;
