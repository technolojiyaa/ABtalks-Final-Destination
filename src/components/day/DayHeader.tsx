import { Clock, BarChart3 } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import type { ChallengeDay } from '../../data/mockData'
import { TOTAL_DAYS } from '../../data/mockData'

interface DayHeaderProps {
  challenge: ChallengeDay
}

export function DayHeader({ challenge }: DayHeaderProps) {
  const progress = ((challenge.day - 1) / TOTAL_DAYS) * 100

  return (
    <div>
      <p className="font-mono text-xs font-semibold tracking-wider text-accent">
        DAY {String(challenge.day).padStart(2, '0')} / {TOTAL_DAYS}
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
        {challenge.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="default">
          <Clock className="h-3 w-3" />
          {challenge.estimatedMinutes} min
        </Badge>
        <Badge variant="default">
          <BarChart3 className="h-3 w-3" />
          {challenge.difficulty}
        </Badge>
        <Badge variant="accent">{challenge.track}</Badge>
      </div>
      <div className="mt-5">
        <ProgressBar value={progress} showLabel animate />
      </div>
    </div>
  )
}
