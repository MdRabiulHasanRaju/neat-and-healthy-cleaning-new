import { useState } from 'react';
import { FiFileText } from 'react-icons/fi';
import Field from '../ui/Field.jsx';
import Button from '../ui/Button.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { services } from '../../data/services.js';
import { site } from '../../data/site.js';

// Quote request form — more detailed than the booking form, for custom jobs.
export default function QuoteForm() {
  const toast = useToast();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', area: '', propertyType: '', bedrooms: '', frequency: '', notes: '',
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
    toast.success('Quote request sent! We will email a detailed estimate within 24 hours.');
    setForm({ name: '', email: '', phone: '', service: '', area: '', propertyType: '', bedrooms: '', frequency: '', notes: '' });
  };

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
          label="Area" name="area" as="select" value={form.area} onChange={handleChange}
          options={site.areas.map((a) => ({ value: a, label: a }))}
        />
        <Field
          label="Property type" name="propertyType" as="select" value={form.propertyType} onChange={handleChange}
          options={[
            { value: 'apartment', label: 'Apartment' },
            { value: 'villa', label: 'Villa' },
            { value: 'office', label: 'Office' },
            { value: 'retail', label: 'Retail / Shop' },
            { value: 'other', label: 'Other' },
          ]}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Bedrooms / Rooms" name="bedrooms" as="select" value={form.bedrooms} onChange={handleChange}
          options={['Studio', '1', '2', '3', '4', '5+'].map((n) => ({ value: n, label: n }))}
        />
        <Field
          label="Frequency" name="frequency" as="select" value={form.frequency} onChange={handleChange}
          options={[
            { value: 'one-off', label: 'One-off' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'fortnightly', label: 'Fortnightly' },
            { value: 'monthly', label: 'Monthly' },
          ]}
        />
      </div>
      <Field label="Notes" name="notes" as="textarea" value={form.notes} onChange={handleChange} placeholder="Tell us about your space and priorities…" />
      <Button type="submit" className="w-full sm:w-auto" icon={FiFileText}>
        Get My Quote
      </Button>
    </form>
  );
}
