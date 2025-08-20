import './App.css'
import { useTheme, useCursorLight, useScrollEffects, usePreloader } from './hooks'
import { Header, CursorLight, Preloader, Hero, About, Projects, Skills, Experience, Contact } from './components'

function App() {
  const { isDarkMode, toggleTheme } = useTheme()
  const { isLoading, isExiting, preloaderRef } = usePreloader()
  const { visibleSections, scrollProgress, scrollToSection, registerSection } = useScrollEffects(isLoading)
  const { mousePosition, isClicking, cursorLightRef } = useCursorLight(isDarkMode, isLoading)


  const downloadCV = () => {
    console.log('Descargando CV...')
  }

  return (
    <div className="app">
      <Header 
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="main">
        <Hero 
          registerSection={registerSection}
          scrollProgress={scrollProgress}
          downloadCV={downloadCV}
        />

        <About 
          registerSection={registerSection}
          visibleSections={visibleSections}
        />

        <Projects 
          registerSection={registerSection}
          visibleSections={visibleSections}
        />

        <Skills 
          registerSection={registerSection}
          visibleSections={visibleSections}
        />

        <Experience 
          registerSection={registerSection}
          visibleSections={visibleSections}
        />

        <Contact 
          registerSection={registerSection}
          visibleSections={visibleSections}
        />
      </main>

      <CursorLight 
        cursorLightRef={cursorLightRef}
        isClicking={isClicking}
        isDarkMode={isDarkMode}
        isLoading={isLoading}
        mousePosition={mousePosition}
      />

      <Preloader 
        isLoading={isLoading}
        isExiting={isExiting}
        preloaderRef={preloaderRef}
      />
    </div>
  )
}

export default App
