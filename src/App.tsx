import PawBackground from './components/PawBackground'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <PawBackground />
      <Header />
      <main>
        <Hero />
        {/* このあと Works・Skills・About・Contact を追加する */}
      </main>
    </>
  )
}

export default App
