import { motion } from 'framer-motion'
import { GitBranch, Share2, Flame, Sparkles } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const trustItems = [
  {
    icon: GitBranch,
    title: 'GitHub commits',
    description: 'Every day ends with code pushed to a public repo. Anyone can check it — including you, later.',
  },
  {
    icon: Share2,
    title: 'LinkedIn progress',
    description: 'Share what you built. Your network sees you shipping — not just saying you will.',
  },
  {
    icon: Flame,
    title: '60-day public streak',
    description: 'A visible, dated record of consistency. Nothing to fake, nothing hidden behind a login.',
  },
]

export function TrustSection() {
  const reduced = useReducedMotion()

  return (
    <section className="page-padding mx-auto max-w-6xl px-4 py-14 sm:px-5">
      <SectionHeading
        eyebrow="Built around proof of work"
        title="Trust isn't a badge. It's a trail."
        description="ABTalks doesn't ask you to trust us. It asks you to show your work — publicly, every single day, on platforms you already control."
        align="center"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <item.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: 0.24, duration: 0.4 }}
        className="mt-4 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent-soft p-5"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
          <Sparkles className="h-4.5 w-4.5" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">We're early — on purpose, that's the pitch</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
            ABTalks just launched. There's no leaderboard of thousands to hide behind yet — which
            means if you start now, you're not student #10,000 lost in a crowd. You're one of the
            first, your streak is one of the first anyone will see, and the habit you build is
            still entirely yours.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
