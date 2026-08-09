import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const faqs = [
  {
    q: 'Is it actually free?',
    a: 'Yes. No credit card, no trial period, no hidden tier. ABTalks is free.',
  },
  {
    q: 'Do I need to already know how to code?',
    a: 'Some coding experience helps — you should be comfortable writing basic code in at least one language. This isn\u2019t a from-zero course; it\u2019s a daily-build habit for people who already know the fundamentals.',
  },
  {
    q: 'How much time does each day take?',
    a: 'Roughly 1\u20132 hours a day. Some days will run shorter, some longer depending on the build.',
  },
  {
    q: 'What happens if I miss a day?',
    a: 'Your streak resets, but your account and history don\u2019t. Pick up the next day and keep going \u2014 the goal is long-run consistency, not a perfect unbroken record.',
  },
  {
    q: 'What do I actually get out of this?',
    a: 'By day 60 you have 60 real, working builds in a public GitHub history and a 60-day LinkedIn trail showing you shipping consistently \u2014 something a resume line can\u2019t prove on its own.',
  },
]

export function Faq() {
  const reduced = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="page-padding mx-auto max-w-6xl px-4 py-14 sm:px-5">
      <SectionHeading
        eyebrow="Before you start"
        title="Questions you're probably asking"
        description="No sales pitch here — just the practical stuff."
      />
      <div className="mt-8 max-w-2xl space-y-3">
        {faqs.map((item, i) => {
          const open = openIndex === i
          return (
            <motion.div
              key={item.q}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="rounded-xl border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                aria-expanded={open}
              >
                <span className="text-sm font-semibold text-ink">{item.q}</span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-ink-muted transition-transform ${open ? 'rotate-45' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-secondary">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
