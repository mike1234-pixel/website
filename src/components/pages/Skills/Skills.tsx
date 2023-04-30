import { Container } from "../../common/Container"
import { Tabs } from "../../common/Tabs"
import { SkillsList } from "./SkillsList"
import { PageHeading } from "../../common/PageHeading"
import { tabs } from "../../../data/tabs"
import styles from "./Skills.module.css"
import { Layout } from "../../common/Layout"

const tabsData = tabs.map((tab) => {
  const { label, skills } = tab

  return {
    label,
    skills: <SkillsList skills={skills} />,
  }
})

export const Skills = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <PageHeading title='Skills' />
          <div className={styles.intro}>
            <p>
              I have experience in a variety of programming languages, CSS
              libraries and preprocessors, JavaScript frameworks and libraries,
              workflow and collaboration tools, automated testing, backend
              development, and DevOps. Below you will find a list of my skills
              and the companies where I have applied them.
            </p>
            <p>
              <strong>Hover the badges</strong> for more information about my
              experience with the listed technologies and methodologies.
            </p>
          </div>
          <Tabs tabs={tabsData} />
        </Container>
      </div>
    </Layout>
  )
}
