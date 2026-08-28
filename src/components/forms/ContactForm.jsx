import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Field from '../ui/Field.jsx';
import Button from '../ui/Button.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { services } from '../../data/services.js';

// Contact form with client-side validation. On submit, shows a success toast.
export default function ContactForm() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      toast.error('Please fix the highlighted fields.');
      return;
    }
    toast.success('Message sent! We will reply within a few hours.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required value={form.name} onChange={handleChange} error={errors.name} placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@email.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 123 4567" />
        <Field
          label="Service"
          name="subject"
          as="select"
          value={form.subject}
          onChange={handleChange}
          options={services.map((s) => ({ value: s.slug, label: s.name }))}
        />
      </div>
      <Field label="Message" name="message" as="textarea" required value={form.message} onChange={handleChange} error={errors.message} placeholder="Tell us about your space and what you need…" />
      <Button type="submit" className="w-full sm:w-auto" icon={FiSend}>
        Send Message
      </Button>
    </form>
  );
}
