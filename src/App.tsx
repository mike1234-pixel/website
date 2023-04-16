import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/common/Nav"
import { Home } from "./components/pages/Home"
import { Skills } from "./components/pages/Skills"
import { Projects } from "./components/pages/Projects"
import { Experience } from "./components/pages/Experience"
import { NotFound } from "./components/pages/NotFound"
import { Footer } from "./components/common/Footer"
import { ScrollToTop } from "./components/common/ScrollToTop"

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
