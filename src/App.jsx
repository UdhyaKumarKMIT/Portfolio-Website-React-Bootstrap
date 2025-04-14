import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeContext"
import "./App.css"

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="portfolio-wrapper">
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
