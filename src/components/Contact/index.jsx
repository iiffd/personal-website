import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <h5 className="section-title">Contact</h5>
      <p className="contact-text">
        The best email to reach me at is:{' '}
        <a href="mailto:sml.hng@gmail.com">sml.hng@gmail.com</a>
        <br />
        The best number to reach me at is: (916) 730-6087
      </p>
    </section>
  );
};

export default Contact;
