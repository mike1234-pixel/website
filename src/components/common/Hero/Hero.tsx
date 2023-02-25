import { Container } from "../Container"
import Fade from "react-reveal/Fade"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.text}>
          <Fade big>
            <h1 className={styles.title}>Welcome to the Washington</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quia amet omnis ipsa provident nisi. Aspernatur dolores sint
              dignissimos ducimus, pariatur dicta maiores porro omnis libero
              accusamus enim deleniti doloribus.
            </p>
          </Fade>
        </div>
      </Container>
      <div className={styles.bgImage}></div>
    </section>
  )
}
