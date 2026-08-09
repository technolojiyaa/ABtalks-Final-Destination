import { createContext, useContext, useState, type ReactNode } from 'react'
import { student as day12Student, day1Student, type Student } from '../data/mockData'
import { LoginModal } from '../components/auth/LoginModal'

interface AuthContextValue {
  isLoggedIn: boolean
  student: Student
  /** Runs `action` if logged in; otherwise opens the login modal and runs
   *  `action` automatically right after a successful mock login. */
  requireAuth: (action: () => void) => void
  /** Mock-only signup/login — no backend, no password storage/transmission.
   *  `name` is kept locally in memory for the session only. */
  login: (name: string) => void
  /** Mock-completes the new participant's builder profile (local only). */
  completeProfile: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)
  // Local/mock only — a fresh participant's profile starts incomplete
  // (see day1Student.profileReady) until they complete it in-app.
  const [profileCompleted, setProfileCompleted] = useState(day1Student.profileReady)
  // Local/mock only — captured from the mock signup form, never sent anywhere.
  const [builderName, setBuilderName] = useState<{ name: string; firstName: string } | null>(
    null,
  )

  const login = (name: string) => {
    const trimmed = name.trim()
    const firstName = trimmed.split(/\s+/)[0] || day1Student.firstName
    setBuilderName({ name: trimmed || day1Student.name, firstName })
    setIsLoggedIn(true)
    setModalOpen(false)
    if (pendingAction) {
      pendingAction()
      setPendingAction(null)
    }
  }

  const requireAuth = (action: () => void) => {
    if (isLoggedIn) {
      action()
      return
    }
    setPendingAction(() => action)
    setModalOpen(true)
  }

  const completeProfile = () => setProfileCompleted(true)

  const value: AuthContextValue = {
    isLoggedIn,
    student: isLoggedIn
      ? {
          ...day1Student,
          profileReady: profileCompleted,
          name: builderName?.name ?? day1Student.name,
          firstName: builderName?.firstName ?? day1Student.firstName,
        }
      : day12Student,
    requireAuth,
    login,
    completeProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
      {modalOpen && (
        <LoginModal
          onLogin={login}
          onClose={() => {
            setModalOpen(false)
            setPendingAction(null)
          }}
        />
      )}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
