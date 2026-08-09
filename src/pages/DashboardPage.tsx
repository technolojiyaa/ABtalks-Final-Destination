import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { StreakCard } from '../components/dashboard/StreakCard'
import { TodayTaskCard } from '../components/dashboard/TodayTaskCard'
import { SubmissionStatus } from '../components/dashboard/SubmissionStatus'
import { ChallengeProgress } from '../components/dashboard/ChallengeProgress'
import { Achievements } from '../components/dashboard/Achievements'
import { ProofTimeline } from '../components/dashboard/ProofTimeline'
import { RecoveryBanner } from '../components/dashboard/RecoveryBanner'
import { CompleteProfileModal } from '../components/dashboard/CompleteProfileModal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAuth } from '../context/AuthContext'

export function DashboardPage() {
  const reduced = useReducedMotion()
  const { student, completeProfile } = useAuth()
  const [profileModalOpen, setProfileModalOpen] = useState(false)

  return (
    <Layout>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="page-padding mx-auto max-w-6xl px-4 py-6 sm:px-5 sm:py-8"
      >
        <DashboardHeader />

        <div className="mt-6 space-y-4 lg:grid lg:grid-cols-[1fr_340px] lg:items-start lg:gap-6 lg:space-y-0">
          <div className="space-y-4">
            {student.missedYesterday && (
              <RecoveryBanner type="missed" />
            )}
            {student.isFirstDay && (
              <RecoveryBanner type="first-day" />
            )}
            {!student.profileReady && (
              <RecoveryBanner
                type="empty-profile"
                onAction={() => setProfileModalOpen(true)}
              />
            )}

            <TodayTaskCard />
            <StreakCard />
            <ProofTimeline entries={student.recentProof.slice(0, 4)} />
          </div>

          <div className="space-y-4">
            <SubmissionStatus />
            <ChallengeProgress />
            <Achievements />
          </div>
        </div>
      </motion.div>

      {profileModalOpen && (
        <CompleteProfileModal
          onComplete={() => {
            completeProfile()
            setProfileModalOpen(false)
          }}
          onClose={() => setProfileModalOpen(false)}
        />
      )}
    </Layout>
  )
}
