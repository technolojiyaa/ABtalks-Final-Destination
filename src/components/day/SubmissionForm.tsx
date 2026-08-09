import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Flame, AlertCircle, Lock } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import {
  isValidGitHubUrl,
  isValidLinkedInUrl,
  isValidLiveUrl,
} from '../../utils/helpers'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useAuth } from '../../context/AuthContext'

interface SubmissionFormProps {
  dayNumber: number
}

type FieldKey = 'github' | 'linkedin' | 'live'

interface FieldState {
  value: string
  touched: boolean
}

export function SubmissionForm({ dayNumber }: SubmissionFormProps) {
  const { student, isLoggedIn, requireAuth } = useAuth()
  const reduced = useReducedMotion()
  const [fields, setFields] = useState<Record<FieldKey, FieldState>>({
    github: { value: '', touched: false },
    linkedin: { value: '', touched: false },
    live: { value: '', touched: false },
  })
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validators: Record<FieldKey, (v: string) => boolean> = {
    github: isValidGitHubUrl,
    linkedin: isValidLinkedInUrl,
    live: isValidLiveUrl,
  }

  const updateField = (key: FieldKey, value: string) => {
    setFields((prev) => ({ ...prev, [key]: { value, touched: true } }))
  }

  const githubValid = isValidGitHubUrl(fields.github.value)
  const linkedinValid = isValidLinkedInUrl(fields.linkedin.value)
  const liveValid = isValidLiveUrl(fields.live.value)

  const githubDone = githubValid
  const linkedinDone = linkedinValid
  const liveDone = liveValid

  const allRequired = githubDone && linkedinDone
  const partial = (githubDone || linkedinDone || liveDone) && !allRequired

  const handleSubmit = () => {
    setFields((prev) => ({
      github: { ...prev.github, touched: true },
      linkedin: { ...prev.linkedin, touched: true },
      live: { ...prev.live, touched: true },
    }))

    if (!allRequired) return

    setSubmitted(true)
    setShowSuccess(true)
  }

  const getFieldError = (key: FieldKey): string | null => {
    const { value, touched } = fields[key]
    if (!touched || !value.trim()) return null
    if (!validators[key](value)) {
      if (key === 'github') return 'Enter a valid GitHub URL'
      if (key === 'linkedin') return 'Enter a valid LinkedIn post URL'
      return 'Enter a valid deployment URL'
    }
    return null
  }

  if (showSuccess) {
    return (
      <Card variant="accent" className="overflow-hidden">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            initial={reduced ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-white"
          >
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </motion.div>
          <h2 className="mt-5 text-xl font-bold text-ink">Day {dayNumber} complete</h2>
          <div className="mt-4 flex justify-center gap-4 font-mono text-sm">
            <span className="text-success">GitHub ✓</span>
            <span className="text-success">LinkedIn ✓</span>
            {liveDone && <span className="text-success">Live ✓</span>}
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-ink-secondary">
            <Flame className="h-4 w-4 text-accent" />
            {student.currentStreak + 1} day streak
          </p>
          <p className="mt-6 text-xs text-ink-muted">
            See you tomorrow for Day {dayNumber + 1}.
          </p>
        </motion.div>
      </Card>
    )
  }

  return (
    <div id="submission" className="scroll-mt-24">
    <Card>
      <h2 className="text-base font-semibold text-ink">Show your work</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
        Your streak is built on proof. Submit both links before finishing today's challenge.
      </p>

      {!isLoggedIn && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-start gap-2 rounded-lg bg-accent-soft px-3 py-2.5 text-sm text-accent"
        >
          <Lock className="mt-0.5 h-4 w-4 shrink-0" />
          <span>Log in to add your GitHub and LinkedIn proof.</span>
        </motion.div>
      )}

      {partial && !submitted && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-start gap-2 rounded-lg bg-warning-soft px-3 py-2.5 text-sm text-warning"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {!linkedinDone && githubDone
              ? "You're almost there — add your LinkedIn post."
              : !githubDone && linkedinDone
                ? "You're almost there — add your GitHub commit."
                : 'Complete GitHub and LinkedIn to submit.'}
          </span>
        </motion.div>
      )}

      <div className="relative mt-5">
        <div className={`space-y-4 ${!isLoggedIn ? 'pointer-events-none select-none opacity-60' : ''}`}>
          <SubmissionField
            id="github"
            label="GitHub repository or commit URL"
            placeholder="github.com/username/repository/commit/…"
            value={fields.github.value}
            onChange={(v) => updateField('github', v)}
            valid={githubDone}
            error={getFieldError('github')}
            required
            disabled={!isLoggedIn}
          />
          <SubmissionField
            id="linkedin"
            label="LinkedIn post URL"
            placeholder="linkedin.com/posts/…"
            value={fields.linkedin.value}
            onChange={(v) => updateField('linkedin', v)}
            valid={linkedinDone}
            error={getFieldError('linkedin')}
            required
            disabled={!isLoggedIn}
          />
          <SubmissionField
            id="live"
            label="Live deployment URL"
            placeholder="https://your-project.vercel.app"
            value={fields.live.value}
            onChange={(v) => updateField('live', v)}
            valid={liveDone}
            error={getFieldError('live')}
            disabled={!isLoggedIn}
          />
        </div>

        {!isLoggedIn && (
          <button
            type="button"
            onClick={() => requireAuth(() => {})}
            aria-label="Log in to add your GitHub and LinkedIn proof"
            className="absolute inset-0 z-10 cursor-pointer rounded-xl"
          />
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <StatusPill label="GitHub" done={githubDone} />
        <StatusPill label="LinkedIn" done={linkedinDone} />
        <StatusPill label="Live" done={liveDone} optional />
      </div>

      <div className="mt-6">
        <Button
          fullWidth
          size="lg"
          onClick={() => requireAuth(handleSubmit)}
          disabled={!allRequired && submitted}
        >
          {isLoggedIn ? "Submit today's proof" : 'Log in to submit'}
        </Button>
      </div>
    </Card>
    </div>
  )
}

function SubmissionField({
  id,
  label,
  placeholder,
  value,
  onChange,
  valid,
  error,
  required,
  disabled,
}: {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  valid: boolean
  error: string | null
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 font-mono text-sm transition-colors placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed ${
            error
              ? 'border-error'
              : valid
                ? 'border-success/50'
                : 'border-border focus:border-accent/40'
          }`}
        />
        <AnimatePresence>
          {valid && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-success"
            >
              <Check className="h-4 w-4" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function StatusPill({
  label,
  done,
  optional,
}: {
  label: string
  done: boolean
  optional?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 font-mono ${
        done ? 'bg-success-soft text-success' : 'bg-canvas text-ink-muted'
      }`}
    >
      {label} {done ? '✓' : '○'}
      {optional && !done && <span className="text-ink-muted/60">(optional)</span>}
    </span>
  )
}
