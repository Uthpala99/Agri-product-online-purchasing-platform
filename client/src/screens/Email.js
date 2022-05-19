import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ev739q",
        "template_q6i5mcx",
        e.target,
        "2s0BjEEs3uc76ssZ6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
