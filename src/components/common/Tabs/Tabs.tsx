import classNames from "classnames"
import { ReactNode, useState } from "react"
import styles from "./Tabs.module.css"

export interface Tab {
  label: string
  skills: ReactNode
}

interface Props {
  tabs: Tab[]
  defaultTab?: number
}

export const Tabs = ({ tabs, defaultTab = 0 }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <div className={styles.root}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === index
                ? classNames(styles.tab, styles.activeTab)
                : styles.tab
            }
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>{tabs[activeTab].skills}</div>
    </div>
  )
}
