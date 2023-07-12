import { ReactNode } from "react"
import { Container } from "../Container"
import classNames from "classnames"
import styles from "./Section.module.css"
import { Video } from "../Video"

interface SectionProps {
  img?: string
  altText?: string
  children: ReactNode | ReactNode[]
  altLayout?: boolean
  video?: string
}

export const Section = ({
  img,
  altText,
  children,
  altLayout,
  video,
}: SectionProps) => {
  return (
    <section className={altLayout ? styles.rootAlt : styles.root}>
      <Container>
        <div
          className={
            altLayout ? classNames(styles.grid, styles.gridAlt) : styles.grid
          }
        >
          <div
            className={
              altLayout ? classNames(styles.text, styles.textAlt) : styles.text
            }
          >
            {children}
          </div>
          <div
            className={
              altLayout
                ? classNames(styles.image, styles.imageAlt)
                : styles.image
            }
          >
            {video && <Video src={video} />}
            {img && <img src={img} alt={altText} />}
          </div>
        </div>
      </Container>
    </section>
  )
}
