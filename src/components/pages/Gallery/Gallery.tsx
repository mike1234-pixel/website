import { Container } from "../../common/Container"
import { LightboxGallery } from "../../common/LightboxGallery"
import { PageHeading } from "../../common/PageHeading"
import styles from "./Gallery.module.css"

export const Gallery = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Gallery' longLetter={true} />
        <LightboxGallery />
      </Container>
    </div>
  )
}
