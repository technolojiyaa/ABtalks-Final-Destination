import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface IntroSequenceProps {
  onComplete: () => void
}

type Phase = 'hi' | 'hello' | 'mark' | 'blocks' | 'scatter' | 'done'

interface BlockConfig {
  id: number
  top: number // %
  left: number // %
  width: number // px
  height: number // px
  rotate: number // deg, resting rotation
  fallRotate: number // deg, starting rotation before it settles
  delay: number
  variant: 'glass' | 'accent' | 'ink'
  scatterX: number
  scatterY: number
}

function buildBlocks(): BlockConfig[] {
  const cols = 7
  const rows = 4
  const blocks: BlockConfig[] = []
  let id = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // skip a few cells so the field reads as scattered, not a grid
      if ((r + c) % 5 === 0) continue

      const jitterX = (Math.sin(id * 12.9) * 0.5 + 0.5) * 6 - 3
      const jitterY = (Math.cos(id * 7.3) * 0.5 + 0.5) * 6 - 3
      const sizeSeed = Math.sin(id * 3.1) * 0.5 + 0.5

      blocks.push({
        id,
        left: (c / (cols - 1)) * 88 + jitterX + 3,
        top: (r / (rows - 1)) * 78 + jitterY + 8,
        width: 70 + sizeSeed * 60,
        height: 50 + (1 - sizeSeed) * 55,
        rotate: (Math.sin(id * 5.7) * 0.5 + 0.5) * 22 - 11,
        fallRotate: (Math.cos(id * 4.1) * 0.5 + 0.5) * 140 - 70,
        delay: (id % cols) * 0.035 + Math.floor(id / cols) * 0.05,
        variant: id % 7 === 0 ? 'accent' : id % 5 === 0 ? 'ink' : 'glass',
        scatterX: (Math.sin(id * 9.9) * 0.5 + 0.5) * 700 - 350,
        scatterY: (Math.cos(id * 6.6) * 0.5 + 0.5) * -500 - 100,
      })
      id++
    }
  }
  return blocks
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<Phase>(reduced ? 'blocks' : 'hi')
  const blocks = useMemo(() => buildBlocks(), [])

  useEffect(() => {
    if (reduced) {
      const t = window.setTimeout(onComplete, 700)
      return () => window.clearTimeout(t)
    }

    const timers = [
      window.setTimeout(() => setPhase('hello'), 650),
      window.setTimeout(() => setPhase('mark'), 1350),
      window.setTimeout(() => setPhase('blocks'), 2000),
      window.setTimeout(() => setPhase('scatter'), 4000),
      window.setTimeout(() => setPhase('done'), 4650),
      window.setTimeout(onComplete, 5050),
    ]

    return () => timers.forEach(window.clearTimeout)
  }, [onComplete, reduced])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[#151515] text-[#fafaf8]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          aria-label="ABTalks introduction"
        >
          {/* faint grid backdrop, matches original */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* PHASE 0a/0b/1 — hi. / hello! / minimal wordmark — one at a time, never overlapping */}
          <AnimatePresence mode="wait">
            {phase === 'hi' && (
              <motion.div
                key="hi"
                className="absolute inset-0 flex items-center justify-center px-6"
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.15, rotate: 4 }}
                transition={{ duration: 0.32 }}
              >
                <div className="text-[clamp(5rem,24vw,13rem)] font-black leading-none tracking-[-0.09em]">
                  hi<span className="text-[#e65100]">.</span>
                </div>
              </motion.div>
            )}

            {phase === 'hello' && (
              <motion.div
                key="hello"
                className="absolute inset-0 flex items-center justify-center px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.32 }}
              >
                <div className="text-[clamp(4rem,18vw,10rem)] font-black leading-none tracking-[-0.08em]">
                  hello<span className="text-[#e65100]">!</span>
                </div>
              </motion.div>
            )}

            {phase === 'mark' && (
              <motion.div
                key="mark"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <motion.p
                  initial={{ opacity: 0, letterSpacing: '0.02em' }}
                  animate={{ opacity: 1, letterSpacing: '0.35em' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-[11px] uppercase text-white/70"
                >
                  ABTalks
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PHASE 2 & 3 — blocks tumble in, headline sits over them, then scatter away */}
          {(phase === 'blocks' || phase === 'scatter') && (
            <div className="absolute inset-0">
              {blocks.map((b) => (
                <motion.span
                  key={b.id}
                  className={
                    'absolute border ' +
                    (b.variant === 'accent'
                      ? 'border-[#e65100]/40 bg-[#e65100]/85'
                      : b.variant === 'ink'
                        ? 'border-white/10 bg-[#0c0c0c]'
                        : 'border-white/15 bg-white/[0.06] backdrop-blur-sm')
                  }
                  style={{
                    left: `${b.left}%`,
                    top: `${b.top}%`,
                    width: b.width,
                    height: b.height,
                  }}
                  initial={{ y: '-120%', x: 0, rotate: b.fallRotate, opacity: 0 }}
                  animate={
                    phase === 'blocks'
                      ? { y: '0%', x: 0, rotate: b.rotate, opacity: 1 }
                      : {
                          y: b.scatterY,
                          x: b.scatterX,
                          rotate: b.rotate + (b.scatterX > 0 ? 90 : -90),
                          opacity: 0,
                        }
                  }
                  transition={
                    phase === 'blocks'
                      ? {
                          duration: 0.85,
                          delay: b.delay,
                          ease: [0.18, 1.15, 0.34, 1],
                        }
                      : {
                          duration: 0.6,
                          delay: (b.id % 7) * 0.02,
                          ease: [0.55, 0, 0.85, 0.35],
                        }
                  }
                />
              ))}

              {/* headline overlaid on the block field */}
              <AnimatePresence>
                {phase === 'blocks' && (
                  <motion.div
                    key="headline"
                    className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.4 } }}
                    exit={{ opacity: 0, scale: 1.08, transition: { duration: 0.3 } }}
                  >
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">
                      your next 60 days
                    </p>
                    <h1 className="text-[clamp(2.75rem,10vw,6rem)] font-black leading-[0.92] tracking-[-0.04em]">
                      We're turning effort
                      <br />
                      into a streak that{' '}
                      <span className="text-[#e65100]">shows</span>.
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'blocks' ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35"
            >
              build · commit · show · repeat
            </motion.p>
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="absolute right-5 top-5 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/55 transition hover:border-white/35 hover:text-white"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
