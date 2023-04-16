import classNames from "classnames"
import { useEffect, useState } from "react"
import { Container } from "../../common/Container"
import { Link } from "react-router-dom"
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

    if (window.innerWidth >= 767) {
      setNavClosed(true)
    }
  }, [])

  return (
    <nav className={classNames(styles.nav, scroll && styles.navScroll)}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to='/'>
              <p>Michael Tandy</p>
              <p>Professional Portfolio</p>
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
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
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
