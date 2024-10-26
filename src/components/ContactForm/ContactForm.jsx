import React from "react";
import css from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>Name</label>
        <Field type="text" name="name" className={css.inputForm} />

        <label>Number</label>
        <Field type="text" name="number" className={css.inputForm} />

        <button type="submit" className={css.btnAdd}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
