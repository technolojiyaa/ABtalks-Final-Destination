import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Card } from '../ui/Card'
import type { ProofEntry } from '../../data/mockData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ProofTimelineProps {
  entries: ProofEntry[]
  title?: string
}

export function ProofTimeline({ entries, title = 'Proof of work timeline' }: ProofTimelineProps) {
  const reduced = useReducedMotion()

  return (
    <Card>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-xs text-ink-muted">
        Your public record of consistency — a portfolio built one day at a time.
      </p>
      {entries.length === 0 ? (
        <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-dashed border-border bg-canvas px-3.5 py-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-ink-secondary">
            Your proof-of-work story starts with your first build.
          </span>
        </div>
      ) : (
      <div className="mt-5 space-y-0">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.day}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative flex gap-4 pb-5 last:pb-0"
          >
            {i < entries.length - 1 && (
              <span className="absolute left-[7px] top-5 h-[calc(100%-8px)] w-px bg-border" />
            )}
            <span className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-surface" />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs font-medium text-accent">
                DAY {String(entry.day).padStart(2, '0')}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{entry.title}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <ProofTag label="GitHub" done={entry.github} />
                <ProofTag label="LinkedIn" done={entry.linkedin} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      )}
    </Card>
  )
}

function ProofTag({ label, done }: { label: string; done: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono text-[11px] ${
        done ? 'text-success' : 'text-ink-muted'
      }`}
    >
      {done && <Check className="h-3 w-3" strokeWidth={2.5} />}
      {label} {done ? '✓' : '○'}
    </span>
  )
}
