import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useAuth } from '../../context/AuthContext'

export function CtaSection() {
  const reduced = useReducedMotion()
  const { requireAuth } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="page-padding mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-accent/20 bg-accent-soft px-5 py-10 text-center sm:px-8 sm:py-12"
      >
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Your first build starts today.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-secondary">
          Start building in public. One commit, one post, one day at a time.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <Button
            size="lg"
            onClick={() => requireAuth(() => navigate('/dashboard'))}
          >
            Start the 60-Day Challenge
            <ChevronRight className="h-4 w-4" />
          </Button>
          <p className="text-xs text-ink-muted">Free · No credit card · ~1–2 hrs/day</p>
        </div>
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="page-padding border-t border-border px-4 py-8 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-ink">ABTalks</p>
        <p className="text-xs text-ink-muted">
          60 days. 60 builds. Built for Indian college developers.
        </p>
      </div>
    </footer>
  )
}
