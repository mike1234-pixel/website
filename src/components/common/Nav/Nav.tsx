import classNames from "classnames";
import { useEffect, useState } from "react";
import { Container } from "../../common/Container";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Hamburger } from "../Hamburger";
import { LinkItem } from "./LinkItem";
import { SocialLink } from "./SocialLink";
import logo from "../../../assets/misc/logo.png";
import styles from "./Nav.module.css";

export const Nav = () => {
  const [navClosed, setNavClosed] = useState<boolean>(true);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 991) {
        setNavClosed(true);
      }
    });
  }, []);

  return (
    <nav className={classNames(styles.nav, scroll && styles.navScroll)}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt='Michael Tandy - Software Engineer' />
          </div>
          <ul
            className={classNames(
              styles.list,
              navClosed ? styles.collapsed : styles.expanded
            )}
            onClick={() => setNavClosed(true)}
          >
            <LinkItem to='/'>home</LinkItem>
            <LinkItem to='/experience'>experience</LinkItem>
            <LinkItem to='/projects'>projects</LinkItem>
            <LinkItem to='/skills'>skills</LinkItem>
            <SocialLink to='https://github.com/mike1234-pixel'>
              <BsGithub />
            </SocialLink>
            <SocialLink to='https://www.linkedin.com/in/michael-tandy-1367b8234/'>
              <BsLinkedin />
            </SocialLink>
          </ul>
          <div className={styles.toggle}>
            <Hamburger navClosed={navClosed} setNavClosed={setNavClosed} />
          </div>
        </div>
      </Container>
    </nav>
  );
};
