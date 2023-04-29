import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { GoArrowSmallRight } from "react-icons/go"
import styles from "./HyperLink.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  to: string
  alt?: boolean
  internalLink?: boolean
  arrow?: boolean
}

export const HyperLink = ({
  children,
  to,
  alt,
  internalLink,
  arrow,
}: Props) => {
  const className = alt ? styles.rootAlt : styles.root

  if (internalLink)
    return (
      <Link to={to} className={className}>
        <span className={styles.content}>
          {children} {arrow && <GoArrowSmallRight className={styles.arrow} />}
        </span>
      </Link>
    )

  return (
    <a href={to} className={className} target='_blank' rel='noreferrer'>
      <span className={styles.content}>
        {children} {arrow && <GoArrowSmallRight className={styles.arrow} />}
      </span>
    </a>
  )
}
