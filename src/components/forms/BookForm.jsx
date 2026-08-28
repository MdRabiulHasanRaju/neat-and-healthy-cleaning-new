import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import Field from '../ui/Field.jsx';
import Button from '../ui/Button.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { services } from '../../data/services.js';
import { site } from '../../data/site.js';

// Booking form with service, area, date, and time selection.
export default function BookForm() {
  const toast = useToast();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', area: '', date: '', time: '', notes: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.service) e.service = 'Select a service';
    if (!form.area) e.area = 'Select an area';
    if (!form.date) e.date = 'Pick a date';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      toast.error('Please complete the required fields.');
      return;
    }
    toast.success('Booking request received! We will confirm shortly.');
    setForm({ name: '', email: '', phone: '', service: '', area: '', date: '', time: '', notes: '' });
  };

  const timeSlots = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required value={form.name} onChange={handleChange} error={errors.name} placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@email.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+971 50 123 4567" />
        <Field
          label="Service" name="service" as="select" required value={form.service} onChange={handleChange} error={errors.service}
          options={services.map((s) => ({ value: s.slug, label: s.name }))}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Area" name="area" as="select" required value={form.area} onChange={handleChange} error={errors.area}
          options={site.areas.map((a) => ({ value: a, label: a }))}
        />
        <Field label="Preferred date" name="date" type="date" required value={form.date} onChange={handleChange} error={errors.date} />
      </div>
      <Field
        label="Preferred time" name="time" as="select" value={form.time} onChange={handleChange}
        options={timeSlots.map((t) => ({ value: t, label: t }))}
      />
      <Field label="Notes (optional)" name="notes" as="textarea" value={form.notes} onChange={handleChange} placeholder="Anything we should know?" />
      <Button type="submit" className="w-full sm:w-auto" icon={FiCalendar}>
        Request Booking
      </Button>
    </form>
  );
}
