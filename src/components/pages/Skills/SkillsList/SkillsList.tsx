import { InfoBadge } from "../../../common/InfoBadge"
import styles from "./SkillsList.module.css"

interface Skill {
  title: string
  info: string
}

interface Props {
  skills: Skill[]
}

export const SkillsList = ({ skills }: Props) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <InfoBadge title={skill.title} info={skill.info} index={index} />
          </li>
        )
      })}
    </ul>
  )
}
