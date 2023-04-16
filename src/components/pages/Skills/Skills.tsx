import { Container } from "../../common/Container"
import { Tabs } from "../../common/Tabs"
import { Tab } from "../../common/Tabs/Tabs"
import styles from "./Skills.module.css"

const tabs: Tab[] = [
  {
    label: "Languages",
    content: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    label: "CSS Libraries, Preprocessors, Methodologies",
    content: (
      <ul>
        <li>MUI</li>
        <li>Ant Design</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>BEM</li>
        <li>Sass/SCSS</li>
      </ul>
    ),
  },
  {
    label: "JavaScript Libraries",
    content: (
      <ul>
        <li>React</li>
        <li>jQuery</li>
      </ul>
    ),
  },
  {
    label: "Workflow, Agile & Collaboration",
    content: (
      <ul>
        <li>Agile</li>
        <li>Scrum</li>
        <li>Kanban</li>
        <li>Jira</li>
        <li>Azure Devops</li>
        <li>Git / Github</li>
        <li>Peer reviewing pull requests</li>
      </ul>
    ),
  },
]

export const Skills = () => {
  return (
    <div className={styles.root}>
      <Container>
        <h1>Skills</h1>
        <Tabs tabs={tabs} />
      </Container>
    </div>
  )
}
