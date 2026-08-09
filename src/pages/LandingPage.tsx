import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { Hero } from '../components/landing/Hero'
import { TrustSection } from '../components/landing/TrustSection'
import { HowItWorks } from '../components/landing/HowItWorks'
import { JourneySection } from '../components/landing/JourneySection'
import { Faq } from '../components/landing/Faq'
import { CtaSection, Footer } from '../components/landing/CtaSection'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { IntroSequence } from '../components/IntroSequence'
import { useState } from 'react'

export function LandingPage() {
  const reduced = useReducedMotion()
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroSequence onComplete={() => setIntroDone(true)} />}
      <Layout showMobileNav={true}>
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Hero />
        <TrustSection />
        <HowItWorks />
        <JourneySection />
        <Faq />
        <CtaSection />
        <Footer />
      </motion.div>
      </Layout>
    </>
  )
}
