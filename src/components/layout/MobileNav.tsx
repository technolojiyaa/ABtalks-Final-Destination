import { Home, LayoutDashboard, CalendarDays } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true, gated: false },
  { to: '/dashboard', label: 'Progress', icon: LayoutDashboard, end: false, gated: true },
  { to: '/day/12', label: 'Today', icon: CalendarDays, end: false, gated: false },
]

export function MobileNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const { requireAuth } = useAuth()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md md:hidden"
      aria-label="Main navigation"
    >
      <div className="page-padding safe-bottom flex items-center justify-around px-2 pt-2 pb-3">
        {navItems.map(({ to, label, icon: Icon, end, gated }) => {
          const active = end ? location.pathname === to : location.pathname.startsWith(to) && to !== '/'
          const isActive = to === '/' ? location.pathname === '/' : active
          const className =
            'relative flex min-w-[72px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-[11px] font-medium transition-colors'

          const content = (
            <>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute inset-0 rounded-xl bg-accent-soft"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`relative h-5 w-5 ${isActive ? 'text-accent' : 'text-ink-muted'}`}
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span className={`relative ${isActive ? 'text-accent' : 'text-ink-muted'}`}>
                {label}
              </span>
            </>
          )

          // Actions that actually use the program (e.g. Progress/Dashboard)
          // require login; navigating there opens the login modal if needed.
          if (gated) {
            return (
              <button
                key={to}
                type="button"
                onClick={() => requireAuth(() => navigate(to))}
                className={className}
              >
                {content}
              </button>
            )
          }

          return (
            <NavLink key={to} to={to} end={end} className={className}>
              {content}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export function DesktopNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const { requireAuth } = useAuth()

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
      {navItems.map(({ to, label, end, gated }) => {
        const isActive =
          to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(to) && to !== '/'
        const className = `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
          isActive
            ? 'bg-accent-soft text-accent'
            : 'text-ink-secondary hover:bg-black/[0.03] hover:text-ink'
        }`

        if (gated) {
          return (
            <button key={to} type="button" onClick={() => requireAuth(() => navigate(to))} className={className}>
              {label}
            </button>
          )
        }

        return (
          <NavLink key={to} to={to} end={end} className={className}>
            {label}
          </NavLink>
        )
      })}
    </nav>
  )
}
