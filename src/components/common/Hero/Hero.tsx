import { Container } from "../Container"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.text}>
          <h1 className={styles.title}>Welcome to the Washington</h1>
          <p>
            The Washington is the spiritual home of Sheffield's music scene.
            Through the years they've all passed through; drinking, performing
            and perhaps even working behind the bar. From the glory years of The
            Limit when Pulp would meet here, to intimate gigs from Wet Nuns, The
            Washington has seen it all.
          </p>
        </div>
      </Container>
      <div className={styles.bgImage}></div>
    </section>
  )
}
