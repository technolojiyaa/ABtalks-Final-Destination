import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useAuth } from '../../context/AuthContext'
import reelBuild from '../../assets/reel-build.svg'
import reelProof from '../../assets/reel-proof.svg'
import reelStreak from '../../assets/reel-streak.svg'
import heroArt from '../../assets/hero.png'

export function Hero() {
  const reduced = useReducedMotion()
  const { requireAuth } = useAuth()
  const navigate = useNavigate()

  const scrollToHow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="page-padding mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-5 sm:pt-12 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            60-Day Coding Challenge
          </p>
          <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            60 days.
            <br />
            60 builds.
            <br />
            <span className="text-accent">One developer</span>
            <br />
            you can't ignore.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-secondary">
            ABTalks helps Indian college students ship something every day — with a GitHub commit,
            a LinkedIn post, and a public streak that proves you're building, not just watching
            tutorials.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() => requireAuth(() => navigate('/dashboard'))}
            >
              Start the 60-Day Challenge
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToHow}>
              See how it works
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink-secondary">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Free — no credit card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              ~1–2 hrs/day
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Some coding experience helps
            </span>
          </div>
          <button
            onClick={scrollToHow}
            className="mt-10 flex items-center gap-2 text-sm font-medium text-ink-secondary transition-colors hover:text-accent cursor-pointer"
          >
            See how the challenge works
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <ActivityStreamVisual />
        </motion.div>
      </div>
    </section>
  )
}

function ActivityStreamVisual() {
  const reduced = useReducedMotion()
  const [scene, setScene] = useState(0)

  const scenes = [
    { image: reelBuild, label: 'Build something real', meta: 'DAY 12 · SHIP' },
    { image: reelProof, label: 'Make the work visible', meta: 'GITHUB + LINKEDIN' },
    { image: reelStreak, label: 'Turn effort into a streak', meta: '60 DAYS · 60 BUILDS' },
  ]

  useEffect(() => {
    if (reduced) return
    const timer = window.setInterval(() => {
      setScene((current) => (current + 1) % scenes.length)
    }, 2600)
    return () => window.clearInterval(timer)
  }, [reduced, scenes.length])

  const current = scenes[scene]

  return (
    <div className="relative min-h-[440px] sm:min-h-[500px]">
      <motion.div
        className="absolute -right-1 top-0 z-20 w-[72%] rotate-[3deg] rounded-[1.5rem] border border-border bg-surface p-2 shadow-[var(--shadow-elevated)] sm:-right-5 sm:w-[68%]"
        animate={{ y: [0, -8, 0], rotate: [3, 4.5, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt={current.label}
            initial={{ opacity: 0, scale: 1.04, filter: 'blur(5px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.97, filter: 'blur(5px)' }}
            transition={{ duration: 0.5 }}
            className="aspect-[1.4] w-full rounded-[1.1rem] object-cover"
          />
        </AnimatePresence>
        <div className="flex items-center justify-between gap-2 px-2 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">{current.meta}</p>
            <p className="mt-1 text-sm font-bold text-ink">{current.label}</p>
          </div>
          <span className="font-mono text-[10px] text-ink-muted">{scene + 1}/3</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-0 z-10 w-[68%] overflow-hidden rounded-[1.5rem] border border-border bg-[#171717] p-3 shadow-[var(--shadow-elevated)] sm:bottom-0 sm:w-[62%]"
        animate={{ y: [0, 10, 0], rotate: [-4, -2.5, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative flex aspect-[1.08] items-center justify-center overflow-hidden rounded-[1.1rem] bg-[#242424]">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:22px_22px]" />
          <img src={heroArt} alt="" className="relative w-1/2 opacity-90" />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#e65100] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
            keep going
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-14 right-0 z-30 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-card)]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{ opacity: { duration: 0.5, delay: 0.4 }, y: { duration: 4, repeat: Infinity } }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">sample streak</p>
            <p className="text-lg font-black tabular-nums text-ink">11 days</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-[7%] top-[30%] h-3 w-3 rounded-full bg-accent" />
      <div className="absolute right-[8%] top-[45%] h-2 w-2 rounded-full bg-ink/20" />
      <div className="absolute left-[45%] bottom-[4%] h-5 w-5 rounded-full border-2 border-accent/40" />
    </div>
  )
}
