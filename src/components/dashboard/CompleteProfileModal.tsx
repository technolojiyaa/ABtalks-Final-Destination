import { AnimatePresence, motion } from 'framer-motion'
import { UserRound, X, ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CompleteProfileModalProps {
  onComplete: () => void
  onClose: () => void
}

export function CompleteProfileModal({ onComplete, onClose }: CompleteProfileModalProps) {
  const reduced = useReducedMotion()

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
          aria-labelledby="complete-profile-modal-title"
          className="relative w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-[var(--shadow-elevated)]"
        >
          {/* Warm gradient header band — matches the login modal */}
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
              <UserRound className="h-6 w-6" />
            </motion.div>
            <h2 id="complete-profile-modal-title" className="mt-4 text-xl font-bold tracking-tight">
              Make your builder profile yours.
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/85">
              Recruiters and peers will see this on your proof-of-work profile as you build.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 pb-6 pt-5">
            <p className="text-sm leading-relaxed text-ink-secondary">
              This is a quick mock step for the demo — no real profile data is stored or sent
              anywhere.
            </p>

            <div className="mt-5">
              <button
                type="button"
                onClick={onComplete}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                Complete profile
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full text-center text-xs font-medium text-ink-muted transition-colors hover:text-ink-secondary"
            >
              Maybe later
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
