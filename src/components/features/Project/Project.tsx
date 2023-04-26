import { Project as ProjectI } from "../../../types/Project"
import { Badge } from "../../common/Badge"
import { HyperLink } from "../../common/HyperLink/HyperLink"
import { Video } from "../../common/Video"
import styles from "./Project.module.css"

interface Props {
  project: ProjectI
}

export const Project = ({ project }: Props) => {
  const { title, badges, description, repos, video } = project

  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <div className={styles.description}>
        <div>
          <h3>Description</h3>
          {description.map((paragraph) => {
            return <p>{paragraph}</p>
          })}
        </div>
        <div>
          <h3>Demo</h3>
          {video && <Video src={video} />}
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
          <ul className={styles.repos}>
            {repos.map((repo, index) => {
              const { link, linkText } = repo
              return (
                <li key={index}>
                  <HyperLink to={link} alt>
                    {linkText}
                  </HyperLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
