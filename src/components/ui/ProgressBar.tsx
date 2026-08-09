import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ProgressBarProps {
  value: number
  max?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animate?: boolean
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  className = '',
  animate = true,
}: ProgressBarProps) {
  const reduced = useReducedMotion()
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  const heights = { sm: 'h-1.5', md: 'h-2', lg: 'h-2.5' }

  return (
    <div className={className}>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-ink-secondary">Progress</span>
          <span className="font-semibold tabular-nums">{Math.round(percent)}%</span>
        </div>
      )}
      <div
        className={`overflow-hidden rounded-full bg-border ${heights[size]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <motion.div
          className={`rounded-full bg-accent ${heights[size]}`}
          initial={animate && !reduced ? { width: 0 } : { width: `${percent}%` }}
          whileInView={animate && !reduced ? { width: `${percent}%` } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

interface DayProgressGridProps {
  completedDays: number
  currentDay: number
  totalDays?: number
  compact?: boolean
}

export function DayProgressGrid({
  completedDays,
  currentDay,
  totalDays = 60,
  compact = false,
}: DayProgressGridProps) {
  const reduced = useReducedMotion()
  const cols = compact ? 15 : 10

  return (
    <div
      className={`grid gap-1 ${compact ? 'gap-[3px]' : 'gap-1.5'}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-label={`${completedDays} of ${totalDays} days completed`}
    >
      {Array.from({ length: totalDays }, (_, i) => {
        const day = i + 1
        let state: 'completed' | 'today' | 'upcoming' | 'missed' = 'upcoming'
        if (day <= completedDays) state = 'completed'
        else if (day === currentDay) state = 'today'
        else if (day < currentDay) state = 'missed'

        const colors = {
          completed: 'bg-accent',
          today: 'bg-accent ring-2 ring-accent/30 ring-offset-1',
          upcoming: 'bg-border',
          missed: 'bg-warning/20 border border-warning/30',
        }

        return (
          <motion.div
            key={day}
            className={`aspect-square rounded-[3px] ${colors[state]} ${compact ? 'min-w-0' : ''}`}
            initial={reduced ? false : { opacity: 0, scale: 0.6 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: compact ? i * 0.005 : i * 0.008, duration: 0.2 }}
            title={`Day ${day}`}
          />
        )
      })}
    </div>
  )
}
