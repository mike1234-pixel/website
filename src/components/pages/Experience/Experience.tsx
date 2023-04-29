import { jobs } from "../../../data/jobs"
import { Container } from "../../common/Container"
import { HyperLink } from "../../common/HyperLink/HyperLink"
import { PageHeading } from "../../common/PageHeading"
import { Job } from "../../features/Job"
import cv from "../../../assets/cv/mike-tandy-cv-2023.pdf"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Experience' longLetter={true} />
        {jobs.map((job) => {
          const { id } = job
          return (
            <div key={id}>
              <Job job={job} />
            </div>
          )
        })}
        <HyperLink to={cv}>Download my cv</HyperLink>
      </Container>
    </div>
  )
}
