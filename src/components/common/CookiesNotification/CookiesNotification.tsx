import classNames from "classnames"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../Container"
import styles from "./CookiesNotification.module.css"

export const CookiesNotification = () => {
  const [notificationVisible, setNotificationVisible] = useState<boolean>(true)

  useEffect(() => {
    const cookiesAcceptedPreviously =
      localStorage.getItem("cookiesAccepted") === "true"
    cookiesAcceptedPreviously && setNotificationVisible(false)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setNotificationVisible(false)
  }

  const handleDecline = () => {
    setNotificationVisible(false)
  }

  return (
    <div
      className={
        notificationVisible
          ? styles.root
          : classNames(styles.root, styles.invisible)
      }
    >
      <Container>
        <p>
          We use cookies on our website to improve your browsing experience and
          to analyze site traffic using Google Analytics.
        </p>
        <p>
          For more information about how we use cookies, please read our{" "}
          <Link to='/privacy'>privacy policy</Link> and{" "}
          <Link to='/cookies'>cookies policy</Link>.
        </p>
        <p>
          By continuing to use our website, you consent to our use of cookies.
          If you do not consent to the use of cookies, please disable them in
          your browser settings or refrain from using our website.
        </p>
        <div>
          <button className={styles.acceptButton} onClick={handleAccept}>
            Accept
          </button>
          <button className={styles.declineButton} onClick={handleDecline}>
            Decline
          </button>
        </div>
      </Container>
    </div>
  )
}
