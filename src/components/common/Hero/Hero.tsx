import { Container } from "../Container"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.text}>
          <h1 className={styles.title}>frontend software engineer</h1>

          <p>
            I am a Frontend Sofware Engineer specialising in{" "}
            <strong>React</strong>, with professional experience spanning a{" "}
            <strong>broad range of organisations</strong>, including agencies,
            startups, and big companies.
          </p>
          <p>
            I prioritise working <strong>collaboratively</strong> to find
            solutions, and I strive to contribute my skills and expertise to the
            team. I have experience working in <strong>Agile</strong>{" "}
            environments and value{" "}
            <strong>flexibility, transparency, and communication</strong> to
            ensure successful outcomes.
          </p>
        </div>
      </Container>
      <div className={styles.bgImage}></div>
    </section>
  )
}
