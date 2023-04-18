import { Container } from "../../common/Container"
import { PageHeading } from "../../common/PageHeading"
import { Project } from "../../features/Project"
import { projects } from "../../../data/projects/projects"
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Projects' longLetter={true} />
        {projects.map((project) => {
          return <Project project={project} />
        })}
      </Container>
    </div>
  )
}
