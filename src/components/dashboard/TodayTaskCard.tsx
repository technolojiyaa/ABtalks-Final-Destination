import { useNavigate } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { day1Challenge, day12Challenge } from '../../data/mockData'
import { Badge } from '../ui/Badge'
import { useAuth } from '../../context/AuthContext'

export function TodayTaskCard() {
  const { student, requireAuth } = useAuth()
  const navigate = useNavigate()
  // Displayed content follows the logged-in state; the route itself always
  // stays /day/12 (see App.tsx) so it remains a valid submission route.
  const challenge = student.isFirstDay ? day1Challenge : day12Challenge

  return (
    <Card className="relative border-accent/20 ring-1 ring-accent/10">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs font-semibold text-accent">
          DAY {String(student.currentDay).padStart(2, '0')}
        </p>
        <Badge variant="accent">
          <Clock className="h-3 w-3" />~{challenge.estimatedMinutes} min
        </Badge>
      </div>
      <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{challenge.title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {challenge.focus.map((item) => (
          <span
            key={item}
            className="rounded-md bg-canvas px-2 py-1 text-xs font-medium text-ink-secondary"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <Button
          fullWidth
          size="lg"
          onClick={() => requireAuth(() => navigate('/day/12'))}
        >
          {student.isFirstDay ? 'Start Day 1' : "Open today's challenge"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
