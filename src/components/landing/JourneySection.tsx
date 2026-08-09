import { motion } from 'framer-motion'
import { TOTAL_DAYS } from '../../data/mockData'
import { SectionHeading } from '../ui/SectionHeading'
import { DayProgressGrid } from '../ui/ProgressBar'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Illustrative only — a new visitor has zero days completed. This preview shows
// what the tracker looks like partway through, so it must be labeled clearly
// as an example and never implied to be the visitor's own or another real
// student's data.
const PREVIEW_COMPLETED = 12
const PREVIEW_CURRENT = 13

export function JourneySection() {
  const reduced = useReducedMotion()

  return (
    <section className="border-y border-border bg-surface/50 page-padding mx-auto max-w-6xl px-4 py-14 sm:px-5">
      <SectionHeading
        eyebrow="The 60-day journey"
        title="Not a sprint. A progression."
        description="Each day is a small build. Miss one? Pick up the next. The goal is consistency, not perfection."
      />
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6"
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-ink-muted">Example tracker · not your data</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
              {PREVIEW_COMPLETED}
              <span className="text-lg font-medium text-ink-muted"> / {TOTAL_DAYS} days</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold tabular-nums text-accent">
              {Math.round((PREVIEW_COMPLETED / TOTAL_DAYS) * 100)}%
            </p>
            <p className="text-xs text-ink-muted">complete</p>
          </div>
        </div>
        <DayProgressGrid completedDays={PREVIEW_COMPLETED} currentDay={PREVIEW_CURRENT} compact />
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-secondary">
          <Legend color="bg-accent" label="Completed" />
          <Legend color="bg-accent ring-2 ring-accent/30" label="Today" />
          <Legend color="bg-border" label="Upcoming" />
          <Legend color="bg-warning/20 border border-warning/30" label="Missed" />
        </div>
        <p className="mt-4 text-xs text-ink-secondary">
          This is a sample of day 12 to show how the tracker fills in. Your own grid starts
          completely blank on day one.
        </p>
      </motion.div>
    </section>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-2.5 w-2.5 rounded-[2px] ${color}`} />
      {label}
    </span>
  )
}
