import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card } from '../ui/Card'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ChallengeChecklistProps {
  dayId: number
  requirements: string[]
}

export function ChallengeChecklist({ dayId, requirements }: ChallengeChecklistProps) {
  const storageKey = `abtalks-checklist-day-${dayId}`
  const [checked, setChecked] = useLocalStorage<Record<number, boolean>>(
    storageKey,
    {}
  )
  const reduced = useReducedMotion()

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const completedCount = requirements.filter((_, i) => checked[i]).length

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-ink">Your build should include</h2>
        <span className="font-mono text-xs text-ink-muted">
          {completedCount}/{requirements.length}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {requirements.map((req, i) => {
          const isChecked = !!checked[i]
          return (
            <li key={req}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors hover:bg-canvas cursor-pointer"
              >
                <motion.span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                    isChecked
                      ? 'border-success bg-success text-white'
                      : 'border-border-strong bg-surface'
                  }`}
                  animate={reduced ? undefined : { scale: isChecked ? [1, 1.15, 1] : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatePresence>
                    {isChecked && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>
                <span
                  className={`text-sm leading-relaxed ${
                    isChecked ? 'text-ink-muted line-through' : 'text-ink'
                  }`}
                >
                  {req}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
