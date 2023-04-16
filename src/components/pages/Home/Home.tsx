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
        <p>JobSprint (2023) is my latest personal project that uses React.</p>
        <p>
          Hvaing built various management consoles with React in commercial
          settings, I decided to use those skills to build my own.
        </p>
        <p>
          JobSprint uses ReactQuery to fetch and mutate data from a
          GoLang/Postgres backend so that users are able to efficiently organise
          their job search.
        </p>
        <p>
          I have recorded a demo for the project and the repositories can be
          found on Github.
        </p>
        <p>
          <Link to='/projects' className={styles.link}>
            Watch JobSprint demo...
          </Link>
        </p>
      </Section>
    </div>
  )
}
