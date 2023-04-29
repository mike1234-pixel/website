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
        <div className={styles.intro}>
          <p>
            Welcome to my experience page, where I share my career journey and
            expertise gained over the years. Below are some highlights of my
            recent professional experience.
          </p>
        </div>
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
