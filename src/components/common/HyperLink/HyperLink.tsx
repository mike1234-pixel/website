import { ReactNode } from "react"
import { Link } from "react-router-dom"
import styles from "./HyperLink.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  to: string
  alt?: boolean
  internalLink?: boolean
}

export const HyperLink = ({ children, to, alt, internalLink }: Props) => {
  const className = alt ? styles.rootAlt : styles.root

  if (internalLink)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )

  return (
    <a href={to} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}
