import React from "react";
import { Form } from "../../components/contact/Form";
import { Footer } from "../../components/footer/Footer";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="title">
        <Form />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
