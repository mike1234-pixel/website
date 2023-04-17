import { Container } from "../../common/Container"
import { Tabs } from "../../common/Tabs"
import { SkillsList } from "./SkillsList"
import { skills } from "./constants"
import styles from "./Skills.module.css"
import { PageHeading } from "../../common/PageHeading"

const tabs = skills.map((skill) => {
  const { label, content } = skill

  return {
    label,
    content: <SkillsList skills={content} />,
  }
})

export const Skills = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Skills' />
        <p>hover a skill for a full description of my experience with it</p>
        <Tabs tabs={tabs} />
      </Container>
    </div>
  )
}
