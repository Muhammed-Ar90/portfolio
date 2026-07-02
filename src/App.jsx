import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
      </main>
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
