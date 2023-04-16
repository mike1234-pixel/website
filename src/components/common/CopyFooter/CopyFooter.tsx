import { Container } from "../Container"
import styles from "./CopyFooter.module.css"

export const CopyFooter = () => {
  const thisYear = new Date().getFullYear()

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.content}>
          <span>Design by Michael Tandy {thisYear}</span>
        </div>
      </Container>
    </section>
  )
}
