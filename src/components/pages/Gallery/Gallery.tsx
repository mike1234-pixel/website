import { Container } from "../../common/Container"
import { LightboxGallery } from "../../common/LightboxGallery"
import { PageHeading } from "../../common/PageHeading"
import styles from "./Gallery.module.css"

export const Gallery = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Gallery' longLetter={true} />
        <div className={styles.intro}>
          <p>
            Here, you can find a selection of photos and images that provide a
            glimpse into my personal life and interests. While my other pages
            showcase my professional experiences and projects, this page is all
            about me as a person.
          </p>
          <p>
            Whether it's photos of my travels, hobbies, or just everyday
            moments, I hope this gallery gives you a better sense of who I am
            outside of work.
          </p>
        </div>
        <LightboxGallery />
      </Container>
    </div>
  )
}
