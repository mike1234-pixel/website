import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Nav } from "./components/common/Nav"
import { Home } from "./components/pages/Home"
import { Skills } from "./components/pages/Skills"
import { Projects } from "./components/pages/Projects"
import { Experience } from "./components/pages/Experience"
import { Gallery } from "./components/pages/Gallery"
import { Privacy } from "./components/pages/Privacy"
import { Cookies } from "./components/pages/Cookies"
import { NotFound } from "./components/pages/NotFound"
import { Footer } from "./components/common/Footer"
import { ScrollToTop } from "./components/common/ScrollToTop"
import { CookiesNotification } from "./components/common/CookiesNotification"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { ParallaxProvider } from "react-scroll-parallax"
import "./App.css"

const RoutesWithTransition = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={300}>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const App = () => {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Nav />
          <RoutesWithTransition />
          <Footer />
          <CookiesNotification />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  )
}

export default App
