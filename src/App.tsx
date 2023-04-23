import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/common/Nav"
import { Home } from "./components/pages/Home"
import { Skills } from "./components/pages/Skills"
import { Projects } from "./components/pages/Projects"
import { Experience } from "./components/pages/Experience"
import { Privacy } from "./components/pages/Privacy"
import { Cookies } from "./components/pages/Cookies"
import { NotFound } from "./components/pages/NotFound"
import { Footer } from "./components/common/Footer"
import { ScrollToTop } from "./components/common/ScrollToTop"
import { CookiesNotification } from "./components/common/CookiesNotification"

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
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <CookiesNotification />
      </BrowserRouter>
    </div>
  )
}

export default App
