import { Container } from "../../common/Container"
import { PageHeading } from "../../common/PageHeading"
import { Project } from "../../features/Project"
import { projects } from "../../../data/projects/projects"
import styles from "./Projects.module.css"
import { HyperLink } from "../../common/HyperLink/HyperLink"

export const Projects = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Projects' longLetter={true} />
        <div className={styles.intro}>
          <p>
            Welcome to my Projects page where I showcase some of my recent
            personal projects. These projects showcase my skills in web
            development and my passion for creating innovative solutions.
          </p>
          <p>
            I am constantly working on new projects, and I invite you to{" "}
            <HyperLink to='https://github.com/mike1234-pixel'>
              check out my Github profile
            </HyperLink>{" "}
            for more of my work.
          </p>
        </div>
        {projects.map((project) => {
          const { id } = project
          return (
            <div key={id}>
              <Project project={project} />
            </div>
          )
        })}
      </Container>
    </div>
  )
}
