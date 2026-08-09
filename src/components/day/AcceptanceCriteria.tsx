import { Card } from '../ui/Card'

interface AcceptanceCriteriaProps {
  criteria: string[]
}

export function AcceptanceCriteria({ criteria }: AcceptanceCriteriaProps) {
  return (
    <Card variant="muted">
      <h2 className="text-base font-semibold text-ink">Done when</h2>
      <ul className="mt-4 space-y-2.5">
        {criteria.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}
