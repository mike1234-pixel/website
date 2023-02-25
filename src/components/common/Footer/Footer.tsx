import { Container } from "../Container"
import styles from "./Footer.module.css"

export const Footer = () => {
  const thisYear = new Date().getFullYear()

  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.content}>
          <span>The Washington Pub {thisYear}</span>
        </div>
      </Container>
    </footer>
  )
}
