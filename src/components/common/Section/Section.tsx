import Fade from "react-reveal/Fade"
import { ReactNode } from "react"
import { Container } from "../Container"
import classNames from "classnames"
import styles from "./Section.module.css"

interface SectionProps {
  img: string
  altText: string
  children: ReactNode | ReactNode[]
  altLayout?: boolean
}

export const Section = ({
  img,
  altText,
  children,
  altLayout,
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
            <Fade bottom>
              <img src={img} alt={altText} />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  )
}
