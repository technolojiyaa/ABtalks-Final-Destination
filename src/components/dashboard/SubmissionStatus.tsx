import { Card } from '../ui/Card'
import { StatusItem } from '../ui/Badge'
import { useAuth } from '../../context/AuthContext'

export function SubmissionStatus() {
  const { student } = useAuth()

  return (
    <Card>
      <h3 className="text-sm font-semibold text-ink">Today's proof</h3>
      <div className="mt-4 space-y-3">
        <StatusItem label="GitHub" done={student.todaySubmitted.github} />
        <StatusItem label="LinkedIn" done={student.todaySubmitted.linkedin} />
      </div>
      {!student.todaySubmitted.github && !student.todaySubmitted.linkedin && (
        <p className="mt-4 text-xs leading-relaxed text-ink-muted">
          Submit both links on today's challenge page to keep your streak alive.
        </p>
      )}
    </Card>
  )
}
