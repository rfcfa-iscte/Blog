import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [showTooltip, setShowTooltip] = useState(false);
  
  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };
  const handleClick = () => {
    return <div className="tooltip">EMAIL SENT</div>;
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ooowgfn",
        "template_c05vs9g",
        form.current,
        "SuS0njJvAR9XJDSyi"
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
          onClick={handleClick}
          onMouseUp={handleMouseUp}
        />
        {/* {showTooltip ? <div className="tooltip">Email sent</div> : ""} */}
      </form>
    </div>
  );
};
