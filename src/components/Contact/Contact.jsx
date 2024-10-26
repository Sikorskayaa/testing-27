import React from "react";
import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.container}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type="button" className={css.btnDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
