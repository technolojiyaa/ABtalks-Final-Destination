export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  if (hour < 21) return 'Good evening'
  return 'Good night'
}

export function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value.startsWith('http') ? value : `https://${value}`)
    return url.hostname.includes('.')
  } catch {
    return false
  }
}

export function isValidGitHubUrl(value: string): boolean {
  if (!value.trim()) return false
  return /github\.com/i.test(value)
}

export function isValidLinkedInUrl(value: string): boolean {
  if (!value.trim()) return false
  return /linkedin\.com/i.test(value)
}

export function isValidLiveUrl(value: string): boolean {
  if (!value.trim()) return false
  return isValidUrl(value) && !/github\.com|linkedin\.com/i.test(value)
}

export function getProgressPercent(completed: number, total: number): number {
  return Math.round((completed / total) * 100)
}
