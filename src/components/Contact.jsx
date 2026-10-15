import {useState, useEffect} from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      alert('You need to fill in all fields before submitting the form.');
      return;
    }

    if (!email.includes('@') || !email.endsWith('.com')) {
        alert('Email must contain "@" and end with ".com".');
        return;
    }

    setFormData({ name, email, message });
    alert('Your message has been sent successfully!');
    form.reset();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit" id="submit">Send Message</button>
    </form>
  );
}

export default Contact;