import classNames from "classnames"
import { useEffect, useState } from "react"
import { Container } from "../../common/Container"
import { Link } from "react-router-dom"
import logo from "../../../assets/the-washington-logo.png"
import styles from "./Nav.module.css"
import { Hamburger } from "../Hamburger"

export const Nav = () => {
  const [navClosed, setNavClosed] = useState<boolean>(true)
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2)
    })

    window.addEventListener("resize", () => {
      setNavClosed(window.innerWidth >= 768)
    })
  }, [])

  return (
    <nav className={classNames(styles.nav, scroll && styles.navScroll)}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to='/'>
              <img src={logo} alt='the washington pub logo' />
            </Link>
          </div>
          <ul
            className={classNames(
              styles.list,
              navClosed ? styles.collapsed : styles.expanded
            )}
          >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/drinks'>Drinks</Link>
            <Link to='/events'>Events</Link>
            <Link to='/contact'>Contact</Link>
          </ul>

          <div className={styles.toggle}>
            <Hamburger navClosed={navClosed} setNavClosed={setNavClosed} />
          </div>
        </div>
      </Container>
    </nav>
  )
}
