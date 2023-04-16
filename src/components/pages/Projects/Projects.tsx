import { Container } from "../../common/Container"
import { Video } from "../../common/Video"
import jobsprintDemo from "../../../assets/video/jobsprint-demo.mp4"
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <div className={styles.root}>
      <Container>
        <h1>Projects</h1>
        <Video src={jobsprintDemo} />
      </Container>
    </div>
  )
}
