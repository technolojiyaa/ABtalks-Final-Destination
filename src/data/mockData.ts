export interface ProofEntry {
  day: number
  title: string
  github: boolean
  linkedin: boolean
  live?: boolean
}

export interface Achievement {
  id: string
  label: string
  icon: 'streak' | 'builds' | 'consistency'
}

export interface ChallengeDay {
  day: number
  title: string
  description: string
  focus: string[]
  estimatedMinutes: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  track: string
  requirements: string[]
  acceptanceCriteria: string[]
  whatYoullBuild: string
}

export interface Student {
  name: string
  firstName: string
  track: string
  currentDay: number
  completedDays: number
  currentStreak: number
  bestStreak: number
  missedYesterday: boolean
  isFirstDay: boolean
  profileReady: boolean
  todaySubmitted: {
    github: boolean
    linkedin: boolean
  }
  achievements: Achievement[]
  recentProof: ProofEntry[]
}

export const student: Student = {
  name: 'Aarav Sharma',
  firstName: 'Aarav',
  track: 'Web Development',
  currentDay: 12,
  completedDays: 11,
  currentStreak: 11,
  bestStreak: 11,
  missedYesterday: false,
  isFirstDay: false,
  profileReady: true,
  todaySubmitted: {
    github: false,
    linkedin: false,
  },
  achievements: [
    { id: 'streak', label: '11-day streak', icon: 'streak' },
    { id: 'builds', label: '10 builds shipped', icon: 'builds' },
    { id: 'consistency', label: 'Top 20% consistency', icon: 'consistency' },
  ],
  recentProof: [
    { day: 11, title: 'Built a weather dashboard', github: true, linkedin: true },
    { day: 10, title: 'Built a REST API', github: true, linkedin: true },
    { day: 9, title: 'Built a landing page', github: true, linkedin: true },
    { day: 8, title: 'Added authentication flow', github: true, linkedin: true },
    { day: 7, title: 'Built a todo app with local storage', github: true, linkedin: true },
  ],
}

// Fresh Day 1 state shown ONLY after mock login (see AuthContext). The
// logged-out `student` above (Day 12) is untouched and remains the default.
export const day1Student: Student = {
  name: 'New Builder',
  firstName: 'Builder',
  track: 'Web Development',
  currentDay: 1,
  completedDays: 0,
  currentStreak: 0,
  bestStreak: 0,
  missedYesterday: false,
  isFirstDay: true,
  profileReady: false,
  todaySubmitted: {
    github: false,
    linkedin: false,
  },
  achievements: [],
  recentProof: [],
}

export const day12Challenge: ChallengeDay = {
  day: 12,
  title: 'Build a responsive developer portfolio',
  description:
    'Build a responsive personal portfolio that introduces who you are, what you build, and the projects you are proud of. This is not a template clone — make it yours. Recruiters and peers should understand your skills within 30 seconds of landing on it.',
  focus: ['Responsive layout', 'Component architecture', 'Deployment'],
  estimatedMinutes: 90,
  difficulty: 'Intermediate',
  track: 'Web Development',
  requirements: [
    'Responsive navigation',
    'Hero section with your name and role',
    'About section',
    'Projects section with at least 2 projects',
    'Contact section',
    'Mobile responsive layout (390px tested)',
    'Deployed live',
  ],
  acceptanceCriteria: [
    'The site works smoothly on mobile.',
    'The site is deployed and publicly accessible.',
    'Your GitHub repository contains today\'s code.',
    'You\'ve committed today\'s work with a clear message.',
    'You\'ve shared your progress on LinkedIn.',
  ],
  whatYoullBuild:
    'A personal developer portfolio with responsive navigation, project showcases, and a deployed live URL. Focus on clean component structure — this portfolio will grow with you through the rest of the challenge.',
}

export const day1Challenge: ChallengeDay = {
  day: 1,
  title: 'Set up your dev environment and ship a hello-world page',
  description:
    'Your journey starts today. Set up your tools, create a GitHub repository, and deploy a simple hello-world page. This is the foundation every build for the next 60 days will sit on.',
  focus: ['Dev environment setup', 'Version control', 'First deployment'],
  estimatedMinutes: 60,
  difficulty: 'Beginner',
  track: 'Web Development',
  requirements: [
    'Git and a code editor installed locally',
    'A new GitHub repository for the challenge',
    'A simple HTML page with your name and today\'s date',
    'First commit pushed to GitHub',
    'Page deployed live (any free host)',
  ],
  acceptanceCriteria: [
    'The page is deployed and publicly accessible.',
    'Your GitHub repository contains today\'s commit.',
    'You\'ve shared your progress on LinkedIn.',
  ],
  whatYoullBuild:
    'A single deployed page proving your setup works end to end: local environment, a GitHub repository, one commit, and a live URL. Small on purpose — everything after today builds on this.',
}

export const landingActivityStream = [
  { day: 9, status: 'complete' as const, title: 'Built a landing page' },
  { day: 10, status: 'complete' as const, title: 'Built a REST API' },
  { day: 11, status: 'complete' as const, title: 'Built a weather dashboard' },
  { day: 12, status: 'today' as const, title: "Today's build" },
]

export const TOTAL_DAYS = 60

export function getDayStatus(day: number, currentDay: number, completedDays: number): 'completed' | 'today' | 'upcoming' | 'missed' {
  if (day <= completedDays) return 'completed'
  if (day === currentDay) return 'today'
  if (day < currentDay) return 'missed'
  return 'upcoming'
}
