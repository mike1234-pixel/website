import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { GoArrowSmallDown, GoArrowSmallRight } from "react-icons/go"
import classNames from "classnames"
import styles from "./HyperLink.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  to: string
  alt?: boolean
  internalLink?: boolean
  arrow?: boolean
  downloadLink?: boolean
}

export const HyperLink = ({
  children,
  to,
  alt,
  internalLink,
  arrow,
  downloadLink,
}: Props) => {
  const className = alt ? styles.rootAlt : styles.root

  if (internalLink)
    return (
      <Link to={to} className={className}>
        <span className={styles.content}>
          <span>{children}</span>{" "}
          {arrow && (
            <GoArrowSmallRight
              className={classNames(styles.arrow, styles.arrowRight)}
            />
          )}
        </span>
      </Link>
    )

  return (
    <a href={to} className={className} target='_blank' rel='noreferrer'>
      <span className={styles.content}>
        <span>{children}</span>{" "}
        {arrow && (
          <GoArrowSmallRight
            className={classNames(styles.arrow, styles.arrowRight)}
          />
        )}
        {downloadLink && (
          <GoArrowSmallDown
            className={classNames(styles.arrowDown, styles.arrow)}
          />
        )}
      </span>
    </a>
  )
}
