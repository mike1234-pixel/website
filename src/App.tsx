import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/common/Nav"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import { Drinks } from "./components/pages/Drinks"
import { Events } from "./components/pages/Events"
import { Gallery } from "./components/pages/Gallery"
import { Contact } from "./components/pages/Contact"
import { NotFound } from "./components/pages/NotFound"
import { Footer } from "./components/common/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
