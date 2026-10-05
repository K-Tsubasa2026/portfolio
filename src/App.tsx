import PawBackground from './components/PawBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PawBackground />
      <Header />
      <main>
        <Hero />
        <Works />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
