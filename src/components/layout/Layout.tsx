import { Link, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { CustomCursor } from './CustomCursor'
import { DesktopNav, MobileNav } from './MobileNav'
import { useAuth } from '../../context/AuthContext'

interface LayoutProps {
  children: ReactNode
  showMobileNav?: boolean
  showHeader?: boolean
}

export function Layout({ children, showMobileNav = true, showHeader = true }: LayoutProps) {
  const navigate = useNavigate()
  const { requireAuth } = useAuth()

  return (
    <>
      <CustomCursor />
      <div className="min-h-dvh">
        {showHeader && (
          <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/90 backdrop-blur-md">
            <div className="page-padding mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-5">
              <Link
                to="/"
                className="flex items-center gap-2.5 font-bold tracking-tight text-ink"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm text-white">
                  AB
                </span>
                <span className="text-[15px]">ABTalks</span>
              </Link>
              <DesktopNav />
              <button
                type="button"
                onClick={() => requireAuth(() => navigate('/dashboard'))}
                className="hidden rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover md:inline-flex"
              >
                Dashboard
              </button>
            </div>
          </header>
        )}
        <main className={showMobileNav ? 'pb-24 md:pb-8' : ''}>{children}</main>
        {showMobileNav && <MobileNav />}
      </div>
    </>
  )
}
