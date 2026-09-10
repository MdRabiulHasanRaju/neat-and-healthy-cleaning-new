import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Field from '../ui/Field.jsx';
import Button from '../ui/Button.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { services } from '../../data/services.js';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function ContactForm() {
  const {base_url} = useTheme();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {

      setErrors({
        ...errors,
        [e.target.name]: undefined
      });
    }
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = 'Please enter your name.';
    }

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      e.email = 'Enter a valid email address.';
    }

    if (!form.message.trim()) {
      e.message = 'Please enter a message.';
    }

    return e;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {

      setErrors(validationErrors);

      toast.error('Please fix the highlighted fields.');

      return;
    }

    try {

      setLoading(true);

      setErrors({});

      const response = await fetch(`${base_url}/admin/api/contact`, {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },

        body: JSON.stringify(form),

      });

      const data = await response.json();

      if (!response.ok || !data.success) {

        if (data?.data?.errors) {
          setErrors(data.data.errors);
        }

        toast.error(
          data.message || 'Unable to send your message.'
        );

        return;
      }

      toast.success(
        data.message || 'Message sent successfully.'
      );

      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: '',
      });

      setErrors({});

    } catch (error) {

      console.error('Contact form error:', error);

      toast.error(
        'Something went wrong. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
    >

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="contact-website">
          Website
        </label>

        <input
          id="contact-website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="new-password"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none',
          }}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <Field
          label="Full name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Jane Doe"
        />

        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="jane@email.com"
        />

      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+971 50 123 4567"
        />

        <Field
          label="Service"
          name="subject"
          as="select"
          value={form.subject}
          onChange={handleChange}
          error={errors.subject}
          options={[
            {
              value: '',
              label: 'Select a service'
            },
            ...services.map((s) => ({
              value: s.slug,
              label: s.name
            }))
          ]}
        />

      </div>

      <Field
        label="Message"
        name="message"
        as="textarea"
        required
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your space and what you need…"
      />

      <Button
        type="submit"
        className="w-full sm:w-auto"
        icon={FiSend}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

    </form>
  );
}