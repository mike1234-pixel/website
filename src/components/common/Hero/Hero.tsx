import { Container } from "../Container"
import { ParallaxBanner } from "react-scroll-parallax"

import styles from "./Hero.module.css"
import { useEffect, useState } from "react"

export const Hero = () => {
  const [scaleValue, setScaleValue] = useState<any>([])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const newScaleValue = screenWidth > 991 ? -0.3 : 0.3
      setScaleValue([newScaleValue, 2, "easeInOutCirc"])
    }

    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/bg23.jpg",
          scale: scaleValue,
        },
      ]}
      className={styles.banner}
    >
      <section className={styles.root}>
        <Container>
          <div className={styles.text}>
            <h1 className={styles.title}>Welcome To My Portfolio</h1>
            <p>
              I am a Sofware Engineer specialising in <strong>React</strong>,
              with professional experience spanning a{" "}
              <strong>broad range of organisations</strong>.
            </p>
            <p>
              I prioritise working <strong>collaboratively</strong> to find
              solutions, and I strive to contribute my skills and expertise. I
              have experience working in <strong>Agile</strong> environments and
              value{" "}
              <strong>flexibility, transparency, and communication</strong> to
              ensure successful outcomes.
            </p>
          </div>
        </Container>
        <div className={styles.bgImage}></div>
      </section>
    </ParallaxBanner>
  )
}
