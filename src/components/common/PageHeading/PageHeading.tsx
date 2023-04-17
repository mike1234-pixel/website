import classNames from "classnames"
import styles from "./PageHeading.module.css"

interface Props {
  title: string
  longLetter?: boolean
}

export const PageHeading = ({ title, longLetter }: Props) => {
  return (
    <h1
      className={
        longLetter ? classNames(styles.root, styles.longLetter) : styles.root
      }
    >
      {title}
    </h1>
  )
}
