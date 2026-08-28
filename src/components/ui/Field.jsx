// Shared form field components with consistent styling and a11y labels.
export function Field({ label, name, type = 'text', as = 'input', options, required, placeholder, value, onChange, error, rows }) {
  const id = `field-${name}`;
  const baseClass =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500';
  const stateClass = error
    ? 'border-danger focus:border-danger focus:ring-danger/20'
    : 'border-slate-200 dark:border-white/10';

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          className={`${baseClass} ${stateClass} resize-none`}
          aria-invalid={!!error}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseClass} ${stateClass}`}
          aria-invalid={!!error}
        >
          <option value="">Select…</option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClass} ${stateClass}`}
          aria-invalid={!!error}
        />
      )}
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

export default Field;
