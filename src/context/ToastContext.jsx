import { createContext, useCallback, useContext, useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const ToastContext = createContext(null);

let idCounter = 0;

// Lightweight toast system. Call `toast.success('...')` or `toast.error('...')`
// from anywhere inside the provider.
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (message, type = 'success') => {
      const id = ++idCounter;
      setToasts((list) => [...list, { id, message, type }]);
      window.setTimeout(() => remove(id), 4000);
    },
    [remove],
  );

  const toast = {
    success: (message) => push(message, 'success'),
    error: (message) => push(message, 'error'),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex w-full max-w-sm flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10"
              role="status"
            >
              {t.type === 'success' ? (
                <FiCheckCircle className="mt-0.5 shrink-0 text-success" size={20} />
              ) : (
                <FiAlertCircle className="mt-0.5 shrink-0 text-danger" size={20} />
              )}
              <p className="flex-1 text-sm font-medium text-ink dark:text-slate-100">
                {t.message}
              </p>
              <button
                type="button"
                onClick={() => remove(t.id)}
                aria-label="Dismiss notification"
                className="shrink-0 text-gray hover:text-ink dark:hover:text-white"
              >
                <FiX size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

export default ToastContext;
