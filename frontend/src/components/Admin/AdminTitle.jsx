import React from "react";
import "../../styles/__admintitle.css";
import PropTypes from "prop-types";
import { RiMenu4Line } from "react-icons/ri";

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
  adminIcono: <RiMenu4Line />,
};

AdminTitle.propTypes = {
  adminTitulo: PropTypes.string,
  adminIcono: PropTypes.element,
};

export default AdminTitle;
