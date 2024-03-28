import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7goi9dx",
        "template_sicjbk2",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="title">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input
          type="submit"
          value="Send"
          className={isClicked ? "clicked" : "f-butt"}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </form>
    </div>
  );
};
