import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 22, stiffness: 520, mass: 0.25 }
  const dotX = useSpring(cursorX, springConfig)
  const dotY = useSpring(cursorY, springConfig)
  const ringX = useSpring(cursorX, { damping: 18, stiffness: 280, mass: 0.35 })
  const ringY = useSpring(cursorY, { damping: 18, stiffness: 280, mass: 0.35 })

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    if (isTouch) {
      setEnabled(false)
      return
    }
    setEnabled(true)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a, button, input, textarea, [role="button"], label, .cursor-hover')
      ) {
        setHovering(true)
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a, button, input, textarea, [role="button"], label, .cursor-hover')
      ) {
        setHovering(false)
      }
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.documentElement.addEventListener('mouseleave', leave)

    document.documentElement.classList.add('hide-cursor-desktop')

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('hide-cursor-desktop')
    }
  }, [cursorX, cursorY, visible])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.85 : hovering ? 1.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={`h-8 w-8 rounded-full border-2 transition-colors duration-150 ${
            hovering ? 'border-accent/60 bg-accent/5' : 'border-ink/20 bg-transparent'
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.6 : hovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div
          className={`h-2 w-2 rounded-full transition-colors duration-150 ${
            hovering ? 'bg-accent' : 'bg-ink'
          }`}
        />
      </motion.div>
    </>
  )
}
