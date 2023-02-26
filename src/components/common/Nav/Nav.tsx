import classNames from "classnames"
import { useEffect, useState } from "react"
import { Container } from "../../common/Container"
import { Link } from "react-router-dom"
import logo from "../../../assets/the-washington-logo.png"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { Hamburger } from "../Hamburger"
import styles from "./Nav.module.css"

export const Nav = () => {
  const [navClosed, setNavClosed] = useState<boolean>(true)
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2)
    })

    // window.addEventListener("resize", () => {
    //   setNavClosed(window.innerWidth >= 768)
    // })
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
            onClick={() => setNavClosed(true)}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/drinks'>Drinks</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <a
                href='https://www.facebook.com/washingtonsheffield/about/?ref=page_internal&locale=en_GB'
                target='_blank'
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/washingtonsheff/'
                target='_blank'
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
          <div
            className={
              scroll
                ? classNames(styles.toggle, styles.toggleScroll)
                : styles.toggle
            }
          >
            <Hamburger navClosed={navClosed} setNavClosed={setNavClosed} />
          </div>
        </div>
      </Container>
    </nav>
  )
}
