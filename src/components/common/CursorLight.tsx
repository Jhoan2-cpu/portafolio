import { RefObject } from 'react'
import type { MousePosition } from '../../types'

interface CursorLightProps {
  cursorLightRef: RefObject<HTMLDivElement>;
  isClicking: boolean;
  isDarkMode: boolean;
  isLoading: boolean;
  mousePosition: MousePosition;
}

export const CursorLight = ({ 
  cursorLightRef, 
  isClicking, 
  isDarkMode, 
  isLoading, 
  mousePosition 
}: CursorLightProps) => {
  return (
    <div 
      ref={cursorLightRef}
      className={`cursor-light ${isClicking ? 'clicking' : ''} ${isDarkMode && !isLoading ? 'active' : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        display: isDarkMode && !isLoading ? 'block' : 'none'
      }}
    />
  )
}