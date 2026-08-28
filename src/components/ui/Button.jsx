import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers.js';

// Polymorphic button: renders as a <Link> when `to` is provided, otherwise a
// <button>. Supports variants and an optional ripple effect on click.
const variants = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className,
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  type = 'button',
  ...rest
}) {
  const classes = cn(
    variants[variant] || variants.primary,
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'lg' && 'px-7 py-3.5 text-base',
    className,
  );

  const content = (
    <>
      {Icon && <Icon aria-hidden="true" />}
      {children}
      {IconRight && <IconRight aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
