import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  to?: string
  children: ReactNode
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-sm border border-transparent',
  secondary:
    'bg-surface text-ink border border-border hover:border-border-strong hover:bg-canvas',
  ghost: 'bg-transparent text-ink-secondary hover:text-ink hover:bg-black/[0.03]',
  outline:
    'bg-transparent text-accent border border-accent/30 hover:bg-accent-soft hover:border-accent/50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-4 text-sm gap-2',
  lg: 'h-12 px-5 text-[15px] gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  children,
  fullWidth,
  className = '',
  disabled,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-xl font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'cursor-pointer select-none',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const motionProps = {
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: { duration: 0.12 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className={fullWidth ? 'w-full' : 'inline-flex'}>
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
