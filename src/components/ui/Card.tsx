import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'accent' | 'muted'
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

const variantMap = {
  default: 'bg-surface border-border',
  accent: 'bg-accent-soft border-accent/15',
  muted: 'bg-canvas border-border',
}

export function Card({ children, className = '', padding = 'md', variant = 'default' }: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border shadow-[var(--shadow-card)]',
        paddingMap[padding],
        variantMap[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
