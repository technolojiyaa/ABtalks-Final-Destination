import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { DayHeader } from '../components/day/DayHeader'
import { ChallengeChecklist } from '../components/day/ChallengeChecklist'
import { AcceptanceCriteria } from '../components/day/AcceptanceCriteria'
import { SubmissionForm } from '../components/day/SubmissionForm'
import { Card } from '../components/ui/Card'
import { day1Challenge, day12Challenge } from '../data/mockData'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAuth } from '../context/AuthContext'

export function DayPage() {
  const reduced = useReducedMotion()
  const { student } = useAuth()
  // Route stays /day/12 either way; content follows login state so a
  // logged-in new participant sees the Day 1 challenge here.
  const challenge = student.isFirstDay ? day1Challenge : day12Challenge

  return (
    <Layout>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="page-padding mx-auto max-w-6xl px-4 py-6 sm:px-5 sm:py-8"
      >
        <DayHeader challenge={challenge} />

        <div className="mt-8 space-y-4 lg:grid lg:grid-cols-[1fr_380px] lg:items-start lg:gap-8 lg:space-y-0">
          <div className="space-y-4">
            <Card>
              <h2 className="text-base font-semibold text-ink">Challenge</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                {challenge.description}
              </p>
              <div className="mt-5 rounded-xl bg-canvas p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  What you'll build
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {challenge.whatYoullBuild}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {challenge.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink-secondary"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Card>

            <ChallengeChecklist
              dayId={challenge.day}
              requirements={challenge.requirements}
            />
            <AcceptanceCriteria criteria={challenge.acceptanceCriteria} />
          </div>

          <div className="lg:sticky lg:top-20">
            <SubmissionForm dayNumber={challenge.day} />
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}
