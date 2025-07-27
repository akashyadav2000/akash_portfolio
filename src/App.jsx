import About from "./component/About"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Services from "./component/Services"
import Skills from "./component/Skills"
import Portfolio from "./component/Portfolio"
import Contact from "./component/Contact"
import './index.css'
import './App.css'

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}
