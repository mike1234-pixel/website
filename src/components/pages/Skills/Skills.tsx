import { Container } from "../../common/Container"
import { Tabs } from "../../common/Tabs"
import { Tab } from "../../common/Tabs/Tabs"
import { SkillsList } from "./SkillsList"
import styles from "./Skills.module.css"
import {
  cssLibraries,
  devops,
  jsLibraries,
  languages,
  testing,
  workflow,
} from "./constants"

const tabs: Tab[] = [
  {
    label: "Languages",
    content: <SkillsList skills={languages} />,
  },
  {
    label: "CSS Libraries, Preprocessors, Methodologies",
    content: <SkillsList skills={cssLibraries} />,
  },
  {
    label: "JavaScript Libraries",
    content: <SkillsList skills={jsLibraries} />,
  },
  {
    label: "Workflow, Agile & Collaboration",
    content: <SkillsList skills={workflow} />,
  },
  {
    label: "Automated Testing",
    content: <SkillsList skills={testing} />,
  },
  {
    label: "Devops",
    content: <SkillsList skills={devops} />,
  },
]

export const Skills = () => {
  return (
    <div className={styles.root}>
      <Container>
        <h1>Skills</h1>
        <p>hover a skill for a full description of my experience with it</p>
        <Tabs tabs={tabs} />
      </Container>
    </div>
  )
}
