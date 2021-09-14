import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    setMessage(e);
    e.preventDefault();
    emailjs.sendForm('default_service', 'template_xirb94f', e.target, "user_YRxxn5DZix7Ni1pj3DOiB")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} id="myForm">
          <input type="text" placeholder="Email" name="from_email"/>
          <input type="text" placeholder="Name" name="from_name"/>
          <input type="text" placeholder="Contact Number" name="reach_at"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
