import { Container } from "../../common/Container"
import { PageHeading } from "../../common/PageHeading"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Experience' longLetter={true} />
      </Container>
    </div>
  )
}
