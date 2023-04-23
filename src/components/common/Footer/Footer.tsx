import { Container } from "../Container"
import { CopyFooter } from "../CopyFooter"
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md"
import { BsTelephone, BsGithub } from "react-icons/bs"
import { BiGitRepoForked } from "react-icons/bi"
import { GrDocumentUser } from "react-icons/gr"
import { FaSitemap } from "react-icons/fa"
import { LinkItem } from "../Nav/LinkItem"
import { SocialLink } from "../Nav/SocialLink"
import { Link } from "react-router-dom"
import classNames from "classnames"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <section>
        <Container>
          <div className={styles.grid}>
            <div>
              <h6>
                Site Links <FaSitemap />
              </h6>
              <ul className={styles.list}>
                <LinkItem to='/'>Home</LinkItem>
                <LinkItem to='/experience'>Experience</LinkItem>
                <LinkItem to='/projects'>Projects</LinkItem>
                <LinkItem to='/skills'>Skills</LinkItem>
              </ul>
            </div>
            <div>
              <h6>
                Call, text or Whatsapp <BsTelephone />
              </h6>
              <p>
                <a href='tel:07769 583 616'>07769 583 616</a>
              </p>
              <h6>
                Email <MdOutlineEmail />
              </h6>
              <p>
                <a href='mailto:miketandy@protonmail.com'>
                  miketandy@protonmail.com
                </a>
              </p>
              <h6>
                Location <MdOutlineLocationOn />
              </h6>
              <p className={styles.location}>🇬🇧</p>
            </div>
            <div>
              <h6>
                Terms of Use <GrDocumentUser />
              </h6>
              <p>
                <Link to='/privacy'>Privacy</Link>
              </p>
              <p>
                <Link to='/cookies'>Cookies</Link>
              </p>
            </div>
            <div>
              <h6>
                Social Links <BsGithub />
              </h6>
              <ul className={classNames(styles.list, styles.listMb)}>
                <SocialLink to='https://github.com/mike1234-pixel'>
                  Github
                </SocialLink>
                <SocialLink to='https://www.linkedin.com/in/michael-tandy-1367b8234/'>
                  LinkedIn
                </SocialLink>
              </ul>
              <h6>
                View Source <BiGitRepoForked />
              </h6>
              <p>
                <a
                  href='https://github.com/mike1234-pixel/website'
                  target='_black'
                  rel='noreferrer'
                >
                  Fork the respository
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CopyFooter />
    </footer>
  )
}
