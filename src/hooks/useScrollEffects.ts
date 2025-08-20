import { useState, useEffect, useRef } from 'react'
import type { SectionRef, ScrollToSection } from '../types'

export const useScrollEffects = (isLoading: boolean) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    if (isLoading) return

    const initialSections = new Set(['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'experiencia', 'contacto'])
    setVisibleSections(initialSections)

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    })

    sectionsRef.current.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [isLoading])

  useEffect(() => {
    if (isLoading) return

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  const scrollToSection: ScrollToSection = (sectionId: string) => {
    const element = sectionsRef.current.get(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const registerSection: SectionRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current.set(id, element)
    }
  }

  return {
    visibleSections,
    scrollProgress,
    scrollToSection,
    registerSection
  }
}