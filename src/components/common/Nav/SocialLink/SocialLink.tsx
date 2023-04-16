import { ReactNode } from "react"
import styles from "./SocialLink.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  to: string
}

export const SocialLink = ({ children, to }: Props) => {
  return (
    <li className={styles.root}>
      <a href={to} target='_blank' rel='noreferrer'>
        {children}
      </a>
    </li>
  )
}
