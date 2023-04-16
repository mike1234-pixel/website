import { Hero } from "../../common/Hero"
import { Section } from "../../common/Section"
import michael2 from "../../../assets/michael-tandy/2.jpg"
import michael3 from "../../../assets/michael-tandy/3.jpg"
import { Link } from "react-router-dom"
import jobsprintDemo from "../../../assets/video/jobsprint-demo.mp4"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <Section img={michael2} altText='Michael Tandy - Software Engineer'>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laboriosam atque quam nobis facilis enim debitis
          nostrum provident eius rem consequatur? Error, impedit adipisci eum
          quaerat in nam repudiandae! Repudiandae, adipisci?
        </p>
        <p>
          <Link to='/about' className={styles.link}>
            Find out more about us...
          </Link>
        </p>
      </Section>
      <Section
        img={michael3}
        altText='Michael Tandy - Software Engineer'
        altLayout
      >
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laboriosam atque quam nobis facilis enim debitis
          nostrum provident eius rem consequatur? Error, impedit adipisci eum
          quaerat in nam repudiandae! Repudiandae, adipisci?
        </p>
        <p>
          <Link to='/experience' className={styles.link}>
            View my experience...
          </Link>
        </p>
      </Section>
      <Section video={jobsprintDemo}>
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident?
        </p>
        <p>
          <Link to='/projects' className={styles.link}>
            Watch my demo...
          </Link>
        </p>
      </Section>
    </div>
  )
}
