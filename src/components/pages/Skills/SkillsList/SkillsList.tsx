import { Badge } from "../../../common/Badge"
import styles from "./SkillsList.module.css"

interface Props {
  skills: string[]
}

export const SkillsList = ({ skills }: Props) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <Badge index={index}>{skill}</Badge>
          </li>
        )
      })}
    </ul>
  )
}
