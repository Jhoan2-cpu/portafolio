import { RefObject } from 'react'

interface PreloaderProps {
  isLoading: boolean;
  isExiting: boolean;
  preloaderRef: RefObject<HTMLDivElement>;
}

export const Preloader = ({ isLoading, isExiting, preloaderRef }: PreloaderProps) => {
  if (!isLoading) return null;
  
  return (
    <div 
      ref={preloaderRef}
      className={`preloader ${isExiting ? 'exiting' : ''}`}
      style={{
        mask: isExiting ? undefined : 'none',
        WebkitMask: isExiting ? undefined : 'none'
      }}
    >
      <div className={`loading-container ${isExiting ? 'fading-out' : ''}`}>
        <div className="loading-text">
          <span className="loading-letter">L</span>
          <span className="loading-letter">O</span>
          <span className="loading-letter">A</span>
          <span className="loading-letter">D</span>
          <span className="loading-letter">I</span>
          <span className="loading-letter">N</span>
          <span className="loading-letter">G</span>
        </div>
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}