import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

export const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

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
        "service_ooowgfn",
        "template_c05vs9g",
        form.current,
        "SuS0njJvAR9XJDSyi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTooltipContent("Email Sent");
          setShowTooltip(true);
          setTimeout(() => {
            setShowTooltip((prevState) => !prevState);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setTooltipContent("Try Again Later");
          setShowTooltip(true);
          setTimeout(() => {
            setShowTooltip((prevState) => !prevState);
          }, 3000);
        }
      );
  };

  return (
    <>
      {showTooltip ? (
        <div className="title">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" id="user_name" name="user_name" />
            <input type="email" id="user_email" name="user_email" />
            <textarea id="message" name="message" />

            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title={tooltipContent}
            >
              <input
                type="submit"
                value="Send"
                className={isClicked ? "clicked" : "f-butt"}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              />
            </Tooltip>
          </form>
        </div>
      ) : (
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
      )}
    </>
  );
};
