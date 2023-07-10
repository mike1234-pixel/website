import { Hero } from "../../common/Hero"
import { Section } from "../../common/Section"
import michael2 from "../../../assets/michael-tandy/2.jpg"
import michael3 from "../../../assets/michael-tandy/3.jpg"
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
              "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/desert.jpeg",
            speed: 30,
          },
        ]}
        className={styles.banner}
      >
        <Section img={michael2} altText='Michael Tandy - Software Engineer'>
          <h2>about</h2>
          <p>
            Hello there, I'm Michael (or Mike), a frontend software engineer who
            specializes in React.
          </p>
          <p>
            I bring a visual and creative approach to my work, which is rooted
            in my love of illustration. Outside of coding, I'm passionate about
            exploring the world through travel and learning new languages (I'm
            currently learning Persian for my Iranian fiancée).
          </p>{" "}
          <p>
            With experience in both startups and big companies, I prioritize
            working collaboratively and communicating transparently to find
            solutions that drive successful outcomes.
          </p>
          <HyperLink to='/gallery' internalLink arrow>
            Explore my gallery for a glimpse into my personal interests and
            experiences
          </HyperLink>
        </Section>
      </ParallaxBanner>

      <Section
        img={michael3}
        altText='Michael Tandy - Software Engineer'
        altLayout
      >
        <h2>experience</h2>

        <p>
          I have worked on a broad range of projects professionally and
          personally in a range of organisation types.
        </p>
        <p>
          These projects span from website builds and ecommerce, to my more
          recent professional work developing management consoles at Ori and
          Avayler (a Halfords Group company).
        </p>
        <p>
          <HyperLink to='/experience' internalLink alt arrow>
            Click through for an overview of my professional experience
          </HyperLink>
        </p>
      </Section>

      <ParallaxBanner
        layers={[
          {
            image:
              "https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/leaf.jpeg",
            speed: 30,
          },
        ]}
        className={styles.banner}
      >
        <Section video='https://portfolio-demos-1.s3.eu-west-2.amazonaws.com/jobsprint-demo.mp4'>
          <h2>projects</h2>

          <p>
            Here, you'll find some of the web development projects that I've
            worked on outside of my professional work.
          </p>
          <p>
            Each project is unique, and I approach each one with fresh ideas and
            attention to detail.
          </p>
          <p>
            In the projects page, you'll find a selection of my work, along with
            video demos for each project.
          </p>
          <p>
            <HyperLink to='/projects' internalLink arrow>
              Click through to explore and watch the demos to see these projects
              in action
            </HyperLink>
          </p>
        </Section>
      </ParallaxBanner>
    </div>
  )
}
