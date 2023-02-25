import { SetStateAction } from "react"
import classNames from "classnames"
import styles from "./Hamburger.module.css"

interface HamburgerProps {
  navClosed: boolean
  setNavClosed: (value: SetStateAction<boolean>) => void
}

export const Hamburger = ({ navClosed, setNavClosed }: HamburgerProps) => {
  return (
    <button
      className={classNames(
        styles.hamburger,
        styles.hamburgerCollapse,
        !navClosed && styles.isActive
      )}
      type='button'
      onClick={() => setNavClosed(!navClosed)}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )
}
