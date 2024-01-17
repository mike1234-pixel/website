import { Job as JobI } from "../../../types/Job";
import styles from "./Job.module.css";

interface Props {
  job: JobI;
}

export const Job = ({ job }: Props) => {
  const {
    title,
    company,
    dates,
    overview,
    technologies,
    responsibilities,
    achievements,
  } = job;
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <h4>{dates}</h4>
      <ul>
        <li>
          <strong>Overview:</strong> {overview}
        </li>
        <li>
          <strong>Responsibilities:</strong> {responsibilities}
        </li>
        <li>
          <strong>Achievements:</strong> {achievements}
        </li>
        <li>
          <strong>Technologies:</strong> {technologies}
        </li>
      </ul>
    </div>
  );
};
