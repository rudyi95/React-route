import React, { useState } from "react";
import Female from "../Image/female.png";
import Male from "../Image/male.png";
import It from "../Image/it.png";

import "../Contact/style.css";



export default function Contact(props) {
  const { contact } = props;

  return (
    <div className="contact-container">
      {contact.gender ? (
        <img
          src={contact.gender === "female" ? Female : Male}
          width="30px"
          alt="img"
        />
      ) : <img
      src={It}
      width="30px"
      alt="img"
    />}

      <div className="contact-item">{contact.firstName} {contact.lastName}</div>
      <div className="contact-item">{contact.phone}</div>
      
    </div>
  );
}