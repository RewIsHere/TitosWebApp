import React from "react";

const ImageSection = ({ src }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12" align="center">
      <div className="foto">
        <img src={src} width="350" alt="Foto" />
      </div>
    </div>
  );
};

export default ImageSection;
