import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Card } from '../ui/Card'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useAuth } from '../../context/AuthContext'

export function StreakCard() {
  const { student } = useAuth()
  const reduced = useReducedMotion()
  const isZero = student.currentStreak === 0

  return (
    <Card variant="accent" className="relative overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent/80">
            Current streak
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <motion.span
              key={student.currentStreak}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tabular-nums text-ink"
            >
              {isZero ? '—' : student.currentStreak}
            </motion.span>
            {!isZero && (
              <span className="text-base font-medium text-ink-secondary">days</span>
            )}
          </div>
          <p className="mt-2 text-sm text-ink-secondary">
            {isZero
              ? 'Complete your first build to start your streak.'
              : 'One more build tonight.'}
          </p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
          <Flame className={`h-7 w-7 ${isZero ? 'text-accent/40' : 'text-accent'}`} />
        </div>
      </div>
      <div className="mt-5 flex gap-6 border-t border-accent/10 pt-4">
        <div>
          <p className="text-xs text-ink-muted">Best streak</p>
          <p className="mt-0.5 text-sm font-semibold tabular-nums">
            {student.bestStreak} days
          </p>
        </div>
        <div>
          <p className="text-xs text-ink-muted">Track</p>
          <p className="mt-0.5 text-sm font-semibold">{student.track}</p>
        </div>
      </div>
    </Card>
  )
}
