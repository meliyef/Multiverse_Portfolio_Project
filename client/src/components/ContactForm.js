import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://multiverse-portfolio-project.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Server error. Try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', height: '100px' }} />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;
