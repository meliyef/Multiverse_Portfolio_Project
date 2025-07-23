import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div style={{ padding: '2rem' ,background: 'linear-gradient(to right, #2e2778, #2b2751, #7777b8)',minHeight: '80vh', color: '#fff'}}>
      <h1>📬 Contact Me</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
