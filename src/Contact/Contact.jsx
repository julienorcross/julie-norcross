import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // fetch('https://julienorcross.com/contact.php', { method: 'POST' })
    //   .then(res => res.text())
    //   .then(text => console.log(text));
    setSuccess(true);
    // setError(true);
  }

  if (success) {
    return (
      <div className="Success">
        <h2>Got it!</h2>
        <p>Thanks for your message! I'll get back to you as soon as I can. </p>
      </div>
    );
  } else if (error) {
    return (
      <div className="Error">
        <h2>Something went wrong</h2>
        <p>Please go back and try again.</p>
      </div>
    );
  }
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>I'm all ears.</p>
      <form name="contact" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input type="text" id="name" name="name" placeholder="Name" />
          <div className="underline" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input type="email" id="email" name="email" placeholder="Email" />
          <div className="underline" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="subject">Subject</label> */}
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <div className="underline" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea name="message" cols="30" rows="1" placeholder="Message" />
          <div className="underline" />
        </div>
        <input type="submit" value="Submit" className="button" />
      </form>
    </section>
  );
};

export default Contact;
