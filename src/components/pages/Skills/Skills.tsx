import { Container } from "../../common/Container"
import { Tabs } from "../../common/Tabs"
import { SkillsList } from "./SkillsList"
import { PageHeading } from "../../common/PageHeading"
import { tabs } from "../../../data/tabs"
import styles from "./Skills.module.css"

const tabsData = tabs.map((tab) => {
  const { label, skills } = tab

  return {
    label,
    skills: <SkillsList skills={skills} />,
  }
})

export const Skills = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Skills' />
        <p>hover a skill for a full description of my experience with it</p>
        <Tabs tabs={tabsData} />
      </Container>
    </div>
  )
}
