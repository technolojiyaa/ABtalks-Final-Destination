import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

interface RecoveryBannerProps {
  type: 'missed' | 'first-day' | 'empty-profile'
  /** For 'empty-profile': called instead of navigating (opens the complete-profile modal). */
  onAction?: () => void
}

const content = {
  missed: {
    title: 'Yesterday got away from you.',
    description: 'Your progress is still here. Pick up today\'s build.',
    cta: 'Continue challenge',
    to: '/day/12',
  },
  'first-day': {
    title: 'Your journey starts today.',
    description: 'No streak yet — that\'s exactly where every great developer began.',
    cta: 'Start Day 1',
    to: '/day/12',
  },
  'empty-profile': {
    title: 'Make your builder profile yours.',
    description:
      'Add a bit about what you\'re building so recruiters and peers know who\'s behind the work.',
    cta: 'Complete profile',
    to: '/day/12',
  },
}

export function RecoveryBanner({ type, onAction }: RecoveryBannerProps) {
  const { title, description, cta, to } = content[type]

  return (
    <Card variant="muted" className="border-warning/20 bg-warning-soft/50">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{description}</p>
      <div className="mt-4">
        {onAction ? (
          <Button variant="outline" size="sm" onClick={onAction}>
            {cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <Button to={to} variant="outline" size="sm">
            {cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    </Card>
  )
}
