import React from "react"
import { Form } from "../../components/contact/Form"
import { Footer } from "../../components/footer/Footer";
import './contact.css'

export const Contact = () => {
  return (
    <><div className="c-form">
      <Form />
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </>
  );
}
