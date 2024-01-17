import { jobs } from "../../../data/jobs";
import { Container } from "../../common/Container";
import { HyperLink } from "../../common/HyperLink/HyperLink";
import { PageHeading } from "../../common/PageHeading";
import { Job } from "../../features/Job";
import { Layout } from "../../common/Layout";
import cv from "../../../assets/cv/michael-tandy-cv.pdf";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <Layout>
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
            const { id } = job;
            return (
              <div key={id}>
                <Job job={job} />
              </div>
            );
          })}
          <HyperLink to={cv} downloadLink>
            Download my cv
          </HyperLink>
        </Container>
      </div>
    </Layout>
  );
};
