import { Container } from "../../common/Container"
import { Video } from "../../common/Video"
import { Badge } from "../../common/Badge"
import { PageHeading } from "../../common/PageHeading"
import jobsprintDemo from "../../../assets/video/jobsprint-demo.mp4"
import styles from "./Projects.module.css"

const badges = [
  "React",
  "TypeScript",
  "React Query",
  "Formik",
  "React Table",
  "CSS modules",
  "Jest",
  "Testing Library",
  "Github Actions",
  "GoLang / Fiber",
  "Postgres",
  "Docker",
]

export const Projects = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Projects' longLetter={true} />
        <div className={styles.mainProject}>
          <h2>JobSprint (2023)</h2>
          <div className={styles.mainProjectDescription}>
            <div>
              <h3>Description</h3>
              <p>
                JobSprint is my most recent personal project that uses React.
              </p>
              <p>
                Having built various management consoles with React in
                commercial settings; I used those skills to build my own.
              </p>
              <p>
                JobSprint uses React Query to fetch and mutate data from a
                GoLang/Postgres backend so that users are able to efficiently
                organise their job search.
              </p>
              <p>
                I have recorded a demo for the project and the repositories can
                be found on Github.
              </p>
            </div>
            <div>
              <h3>Demo</h3>
              <Video src={jobsprintDemo} />
            </div>
            <div>
              <h3>Technologies Used</h3>
              <ul className={styles.technologies}>
                {badges.map((badge, index) => {
                  return (
                    <li key={index}>
                      <Badge index={index}>{badge}</Badge>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3>Repositories</h3>
              <p>
                <a
                  href='https://github.com/mike1234-pixel/gig-organiser-client'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.link}
                >
                  Client
                </a>
              </p>
              <p>
                <a
                  href='https://github.com/mike1234-pixel/gig-organiser-api'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.link}
                >
                  Backend
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
