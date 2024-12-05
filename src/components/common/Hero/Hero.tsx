import { Container } from "../Container"
import { ParallaxBanner } from "react-scroll-parallax"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/stars.jpg",
          speed: 40,
        },
        {
          image:
            "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/bgmount1.png",
          speed: -10,
          translateY: [0, 0.2],
          scale: [1, 1.2, "easeOutCubic"],
          shouldAlwaysCompleteAnimation: true,
        },
      ]}
      className={styles.banner}
    >
      <section className={styles.root}>
        <Container>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <span>Senior </span>
              <span>Frontend </span>
              <span>Software </span>
              <span>Engineer</span>
            </h1>
            <h2>Experience in a broad range of sectors</h2>
          </div>
        </Container>
        <div className={styles.bgImage}></div>
      </section>
    </ParallaxBanner>
  )
}
