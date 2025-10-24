import About from "./Components/About/About"
import Contact from "./Components/Contact Page/Contact"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"


function App() {
  return (
    <>
    <div className="flex flex-col gap-10">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
      
    </>
  )
}

export default App
