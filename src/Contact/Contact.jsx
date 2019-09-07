import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p>I'm all ears.</p>
    <form name="contact" method="POST" data-netlify="true">
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
        <input type="text" id="subject" name="subject" placeholder="Subject" />
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

export default Contact;
