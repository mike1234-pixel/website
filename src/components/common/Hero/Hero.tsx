import { Container } from "../Container"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.text}>
          <h1 className={styles.title}>Frontend Contractor</h1>
          <p>
            I am a Frontend Sofware Engineer specialising in{" "}
            <strong>React.js.</strong>
          </p>
          <p>
            I prioritise working collaboratively to find solutions, and I strive
            to contribute my skills and expertise to the team. I have experience
            working in Agile environments and value flexibility, transparency,
            and communication to ensure successful outcomes.
          </p>
          <p>
            My professional experience spans working in agencies, startups, and
            big companies.
          </p>
        </div>
      </Container>
      <div className={styles.bgImage}></div>
    </section>
  )
}
