import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const steps = [
  {
    num: '01',
    title: 'Pick a track',
    description: 'Choose what you want to build and learn — web, mobile, backend, or full-stack.',
  },
  {
    num: '02',
    title: 'Ship every day',
    description: 'Complete one practical coding task. Not a quiz. Not a video. A real build.',
  },
  {
    num: '03',
    title: 'Show your work',
    description: 'Submit your GitHub commit and LinkedIn post. Your streak is proof.',
  },
]

export function HowItWorks() {
  const reduced = useReducedMotion()

  return (
    <section
      id="how-it-works"
      className="page-padding mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-5"
    >
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. Sixty days. One habit."
        description="No complicated onboarding. No enterprise dashboards. Just build, submit, repeat."
      />
      <div className="mt-10 space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:gap-5 sm:p-6"
          >
            <span className="font-mono text-2xl font-bold text-accent/40 sm:text-3xl">
              {step.num}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
