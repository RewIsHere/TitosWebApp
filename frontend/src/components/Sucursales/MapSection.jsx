import React from "react";

const MapSection = ({ src, isImageLeft }) => {
  const containerClassName = isImageLeft
    ? "right-content col-lg-6 col-md-12 col-sm-12"
    : "col-lg-6 col-md-12 col-sm-12";

  return (
    <div className={containerClassName} align="center">
      <div className="map">
        <iframe
          src={src}
          width="550"
          height="350"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
