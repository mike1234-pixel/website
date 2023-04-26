import { jobs } from "../../../data/jobs"
import { Container } from "../../common/Container"
import { PageHeading } from "../../common/PageHeading"
import { Job } from "../../features/Job"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Experience' longLetter={true} />
        {jobs.map((job, index) => {
          return (
            <div key={index}>
              <Job job={job} />
            </div>
          )
        })}
      </Container>
    </div>
  )
}
