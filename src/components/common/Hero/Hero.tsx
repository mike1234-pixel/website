import { Container } from "../Container"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.text}>
          <h1 className={styles.title}>Frontend Contractor</h1>
          <p>
            I'm a Frontend Sofware Engineer specialising in{" "}
            <strong>React.js.</strong>
          </p>
          <p>
            I have a broad range of experience in the software industry, having
            worked at web agencies, startups, and big companies.
          </p>
          <p>CONTRIBUTION, COLLABORATION</p>
        </div>
      </Container>
      <div className={styles.bgImage}></div>
    </section>
  )
}
