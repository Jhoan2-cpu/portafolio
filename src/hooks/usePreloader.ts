import { useState, useEffect, useRef } from 'react'

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [irisRadius, setIrisRadius] = useState(0)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  const supportsMask = () => {
    const testElement = document.createElement('div')
    return 'mask' in testElement.style || 'webkitMask' in testElement.style
  }

  const animateIris = (startTime: number, duration: number = 3000) => {
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const radius = easeOutQuart * 120
      setIrisRadius(radius)
      
      if (preloaderRef.current) {
        if (supportsMask()) {
          const maskValue = `radial-gradient(circle at center, transparent 0%, transparent ${radius}%, rgba(0,0,0,0.2) ${radius + 2}%, black ${radius + 5}%)`
          preloaderRef.current.style.mask = maskValue
          preloaderRef.current.style.webkitMask = maskValue
        } else {
          const opacity = 1 - (progress * 0.9)
          preloaderRef.current.style.opacity = opacity.toString()
        }
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setTimeout(() => setIsLoading(false), 200)
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      animateIris(performance.now())
    }, 3000)

    return () => {
      clearTimeout(timer)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return {
    isLoading,
    isExiting,
    irisRadius,
    preloaderRef
  }
}