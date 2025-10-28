import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Używamy dedykowanych stylów

const ContactForm = () => {
  // ... cała logika formularza (useState, handleChange, handleSubmit) bez zmian ...
  // ... skopiuj ją z poprzedniej wersji pliku index.js ...
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponse(null);
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Server error occurred.');
        setResponse({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        setResponse({ type: 'error', text: `[TRANSMISSION FAILED]: ${error.message}` });
    } finally {
        setIsSending(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Identyfikator..."
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Kanał zwrotny (email)..."
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Treść wiadomości..."
        value={formData.message}
        onChange={handleChange}
        required
        className={styles.textarea}
      ></textarea>
      <button type="submit" disabled={isSending} className={styles.button}>
        {isSending ? 'WYSYŁANIE...' : 'WYŚLIJ'}
      </button>
      {response && (
        <div className={styles.response}>
          <pre>&gt; {response.text}</pre>
        </div>
      )}
    </form>
  );
};

export default ContactForm;