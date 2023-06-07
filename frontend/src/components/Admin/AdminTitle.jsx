import React from "react";
import "../../styles/__admintitle.css";
import PropTypes from "prop-types";

const AdminTitle = ({ adminTitulo, adminIcono }) => {
  return (
    <>
      <div className="admin-title-container">
        {adminIcono}
        <h1 className="admin-title__text">{adminTitulo}</h1>
      </div>
    </>
  );
};

AdminTitle.defaultProps = {
  adminTitulo: "Heading",
  adminIcono: "",
};

AdminTitle.propTypes = {
  adminTitulo: PropTypes.string,
  adminIcono: PropTypes.element,
};

export default AdminTitle;
