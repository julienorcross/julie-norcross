import React, { useState } from 'react';

import './Contact.scss';
import sendEmail from './sendEmail';

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState({});

  const handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setMessage({
      ...message,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await sendEmail(message).then(res => {
        setSuccess(res.success);
        if (!res.success) {
          setError(true);
        }
      });
    } catch (e) {
      setError(true);
    }
  };

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
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            cols="30"
            rows="1"
            placeholder="Message"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" className="button" />
      </form>
    </section>
  );
};

export default Contact;
