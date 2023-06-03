import React from "react";

const ContactSection = ({
  title,
  address,
  phoneNumber,
  facebookLink,
  instagramLink,
}) => {
  return (
    <div className={title.toLowerCase()}>
      <article>
        <h1>{title}</h1>
        <p>{address}</p>
        <h4>
          LLAMADA / WHATSAPP: <b>{phoneNumber}</b>
        </h4>
        <br />
        <h3>CONTACTO POR REDES SOCIALES</h3>
        <div className="links">
          <a className="vinculos" href={facebookLink}>
            FACEBOOK TITO´S {title}
          </a>
        </div>
        {instagramLink && (
          <div className="links">
            <a className="vinculos" href={instagramLink}>
              INSTAGRAM TITO´S {title}
            </a>
          </div>
        )}
        <br />
      </article>
    </div>
  );
};

export default ContactSection;
