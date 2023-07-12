import { Hero } from "../../common/Hero"
import { Section } from "../../common/Section"
import styles from "./Home.module.css"
import { HyperLink } from "../../common/HyperLink/HyperLink"
import { ParallaxBanner } from "react-scroll-parallax"

export const Home = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <ParallaxBanner
        layers={[
          {
            image:
              "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/bg-sun.jpg",
            speed: 30,
          },
        ]}
        className={styles.banner}
      >
        <Section>
          <h2>about</h2>
          <p>I specialise in frontend development with a focus on React.</p>
          <p>
            I bring a visual and creative approach to my work, which stems from
            my interest in design.
          </p>
          <p>
            I have experience in a range of company types and adapt quickly to
            new technologies and processes.
          </p>
          <HyperLink to='/gallery' internalLink alt arrow>
            More about me
          </HyperLink>
        </Section>
      </ParallaxBanner>
      <ParallaxBanner
        layers={[
          {
            image:
              "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/bg77.jpg",
            speed: -30,
          },
        ]}
        className={styles.banner2}
      >
        <Section>
          <h2>experience</h2>
          <p>I have worked on range of projects in varied environments.</p>
          <p>These projects have included:</p>
          <ul>
            <li>Commerical Websites</li>
            <li>E-commerce sites</li>
            <li>Cloud platforms</li>
            <li>Work and scheduling management platforms</li>
          </ul>
          <p>
            <HyperLink to='/experience' internalLink alt arrow>
              View my professional experience
            </HyperLink>
          </p>
        </Section>
      </ParallaxBanner>
      <ParallaxBanner
        layers={[
          {
            image:
              "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/bg4.jpg",
            speed: 30,
          },
        ]}
        className={styles.banner3}
      >
        <Section video='https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/jobsprint-demo.mp4'>
          <h2>projects</h2>
          <p>
            Alongside my professional work I have designed and built personal
            projects to broaden my skills and knowledge.
          </p>
          <p>
            In this section you can find a selection of my favourite personal
            projects.
          </p>
          <p>
            <HyperLink to='/projects' internalLink alt arrow>
              View my projects
            </HyperLink>
          </p>
        </Section>
      </ParallaxBanner>
    </div>
  )
}
