import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkMode])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    let shouldBeDark = false
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme')
      shouldBeDark = true
    } else if (savedTheme === 'light') {
      document.body.classList.remove('dark-theme')
      shouldBeDark = false
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (systemPrefersDark) {
        document.body.classList.add('dark-theme')
        shouldBeDark = true
      }
    }
    
    if (isDarkMode !== shouldBeDark) {
      setIsDarkMode(shouldBeDark)
    }
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return { isDarkMode, toggleTheme }
}