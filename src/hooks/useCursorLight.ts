import { useState, useEffect, useRef } from 'react'
import type { MousePosition } from '../types'

export const useCursorLight = (isDarkMode: boolean, isLoading: boolean) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const cursorLightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shouldShowCursorLight = () => {
      return isDarkMode && !isLoading
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      if (cursorLightRef.current && shouldShowCursorLight()) {
        cursorLightRef.current.style.left = `${e.clientX}px`
        cursorLightRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = () => {
      if (cursorLightRef.current && shouldShowCursorLight()) {
        cursorLightRef.current.style.opacity = '0.8'
      }
    }

    const handleMouseLeave = () => {
      if (cursorLightRef.current && shouldShowCursorLight()) {
        cursorLightRef.current.style.opacity = '0'
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    if (shouldShowCursorLight()) {
      setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDarkMode, isLoading])

  return { mousePosition, isClicking, cursorLightRef }
}