import { useState } from 'react';

import { FiCalendar } from 'react-icons/fi';

import Field from '../ui/Field.jsx';
import Button from '../ui/Button.jsx';

import { useToast } from '../../context/ToastContext.jsx';

import { services } from '../../data/services.js';

import { useTheme } from '../../context/ThemeContext.jsx';

export default function BookForm() {

  const { base_url, site } = useTheme();

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    date: '',
    time: '',
    notes: '',
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
      e.name = 'Required';
    }

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      e.email = 'Valid email required';
    }

    if (!form.phone.trim()) {
      e.phone = 'Required';
    }

    if (!form.service) {
      e.service = 'Select a service';
    }

    if (!form.area) {
      e.area = 'Select an area';
    }

    if (!form.date) {
      e.date = 'Pick a date';
    }

    return e;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {

      setErrors(validationErrors);

      toast.error(
        'Please complete the required fields.'
      );

      return;
    }

    try {

      setLoading(true);

      setErrors({});

      const response = await fetch(`${base_url}/admin/api/booking`, {

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
          data.message || 'Unable to submit booking.'
        );

        return;
      }

      toast.success(
        data.message || 'Booking request received!'
      );

      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        area: '',
        date: '',
        time: '',
        notes: '',
        website: '',
      });

      setErrors({});

    } catch (error) {

      console.error('Booking form error:', error);

      toast.error(
        'Something went wrong. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };

  const timeSlots = [
    '8:00 AM',
    '10:00 AM',
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM'
  ];

  /*
   * Prevent selecting past dates.
   */
  const today = new Date()
    .toISOString()
    .split('T')[0];

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
        <label htmlFor="booking-website">
          Website
        </label>

        <input
          id="booking-website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex="-1"
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
          required
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+971 50 123 4567"
        />

        <Field
          label="Service"
          name="service"
          as="select"
          required
          value={form.service}
          onChange={handleChange}
          error={errors.service}
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

      <div className="grid gap-4 sm:grid-cols-2">

        <Field
          label="Area"
          name="area"
          as="select"
          required
          value={form.area}
          onChange={handleChange}
          error={errors.area}
          options={[
            ...site.areas.map((a) => ({
              value: a,
              label: a
            }))
          ]}
        />

        <Field
          label="Preferred date"
          name="date"
          type="date"
          required
          min={today}
          value={form.date}
          onChange={handleChange}
          error={errors.date}
        />

      </div>

      <Field
        label="Preferred time"
        name="time"
        as="select"
        value={form.time}
        onChange={handleChange}
        error={errors.time}
        options={[
          {
            value: '',
            label: 'Select a time'
          },
          ...timeSlots.map((t) => ({
            value: t,
            label: t
          }))
        ]}
      />

      <Field
        label="Notes (optional)"
        name="notes"
        as="textarea"
        value={form.notes}
        onChange={handleChange}
        error={errors.notes}
        placeholder="Anything we should know?"
      />

      <Button
        type="submit"
        className="w-full sm:w-auto"
        icon={FiCalendar}
        disabled={loading}
      >
        {loading
          ? 'Submitting...'
          : 'Request Booking'
        }
      </Button>

    </form>
  );
}