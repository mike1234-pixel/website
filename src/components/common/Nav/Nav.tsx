import classNames from "classnames"
import { useEffect, useState } from "react"
import { Container } from "../../common/Container"
import { Link } from "react-router-dom"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { Hamburger } from "../Hamburger"
import styles from "./Nav.module.css"
import { LinkItem } from "./LinkItem"

export const Nav = () => {
  const [navClosed, setNavClosed] = useState<boolean>(true)
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2)
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767) {
        setNavClosed(true)
      }
    })
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
            <LinkItem to='/'>Home</LinkItem>
            <LinkItem to='/experience'>Experience</LinkItem>
            <LinkItem to='/projects'>Projects</LinkItem>
            <LinkItem to='/skills'>Skills</LinkItem>
            <li>
              <a
                href='https://github.com/mike1234-pixel'
                target='_blank'
                rel='noreferrer'
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/michael-tandy-1367b8234/'
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
          <div className={styles.toggle}>
            <Hamburger navClosed={navClosed} setNavClosed={setNavClosed} />
          </div>
        </div>
      </Container>
    </nav>
  )
}
