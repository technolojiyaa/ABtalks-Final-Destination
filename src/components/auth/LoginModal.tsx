import { AnimatePresence, motion } from 'framer-motion'
import { Flame, X, ArrowRight, User, Mail, Lock, AlertCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface LoginModalProps {
  onLogin: (name: string) => void
  onClose: () => void
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LoginModal({ onLogin, onClose }: LoginModalProps) {
  const reduced = useReducedMotion()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!name.trim()) {
      next.name = 'Enter your name.'
    }
    if (!email.trim()) {
      next.email = 'Enter your email.'
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!password) {
      next.password = 'Enter a password.'
    } else if (password.length < 6) {
      next.password = 'Password must be at least 6 characters.'
    }
    return next
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // Mock auth only: nothing is stored or transmitted — the password never
    // leaves this component and isn't kept in state after submit.
    onLogin(name)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
          className="relative w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-[var(--shadow-elevated)]"
        >
          {/* Warm gradient header band */}
          <div className="relative overflow-hidden bg-gradient-to-br from-accent via-[#ff7a33] to-accent-hover px-6 pb-8 pt-6 text-white">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10"
              animate={reduced ? undefined : { scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-white/10"
              animate={reduced ? undefined : { scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <motion.div
              initial={reduced ? false : { scale: 0.6, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30"
            >
              <Flame className="h-6 w-6" />
            </motion.div>
            <h2 id="login-modal-title" className="mt-4 text-xl font-bold tracking-tight">
              Create your builder account.
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/85">
              Your first build, your first streak day — saved the moment you sign up.
            </p>
          </div>

          {/* Body */}
          <form className="px-6 pb-6 pt-5" onSubmit={handleSubmit} noValidate>
            <div className="space-y-3.5">
              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-1.5 block text-xs font-semibold text-ink-secondary"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                  <input
                    id="signup-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aarav Sharma"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'signup-name-error' : undefined}
                    className={`w-full rounded-xl border bg-surface py-3 pl-10 pr-3.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                      errors.name ? 'border-warning' : 'border-border focus:border-accent'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p
                    id="signup-name-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-warning"
                  >
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1.5 block text-xs font-semibold text-ink-secondary"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                  <input
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'signup-email-error' : undefined}
                    className={`w-full rounded-xl border bg-surface py-3 pl-10 pr-3.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                      errors.email ? 'border-warning' : 'border-border focus:border-accent'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p
                    id="signup-email-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-warning"
                  >
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-1.5 block text-xs font-semibold text-ink-secondary"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                  <input
                    id="signup-password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? 'signup-password-error' : undefined}
                    className={`w-full rounded-xl border bg-surface py-3 pl-10 pr-3.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                      errors.password ? 'border-warning' : 'border-border focus:border-accent'
                    }`}
                  />
                </div>
                {errors.password && (
                  <p
                    id="signup-password-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-warning"
                  >
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Create account & continue
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-ink-muted">
              Demo signup — mock only. Nothing is stored or sent anywhere.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
