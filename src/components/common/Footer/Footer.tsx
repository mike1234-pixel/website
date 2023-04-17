import { Container } from "../Container"
import { CopyFooter } from "../CopyFooter"
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md"
import { BsTelephone, BsGithub, BsLinkedin } from "react-icons/bs"
import { LinkItem } from "../Nav/LinkItem"
import { SocialLink } from "../Nav/SocialLink"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <section>
        <Container>
          <div className={styles.grid}>
            <div>
              <h6>Site Links</h6>
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
            </div>
            <div>
              <h6>
                Location <MdOutlineLocationOn />
              </h6>
              <p className={styles.location}>🇬🇧</p>
            </div>
            <div>
              <h6>Social Links</h6>
              <div className={styles.list}>
                <ul className={styles.list}>
                  <SocialLink to='https://github.com/mike1234-pixel'>
                    <BsGithub /> Github
                  </SocialLink>
                  <SocialLink to='https://www.linkedin.com/in/michael-tandy-1367b8234/'>
                    <BsLinkedin /> LinkedIn
                  </SocialLink>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CopyFooter />
    </footer>
  )
}
