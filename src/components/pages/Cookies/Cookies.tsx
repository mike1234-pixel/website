import { Container } from "../../common/Container"
import { Layout } from "../../common/Layout"
import { PageHeading } from "../../common/PageHeading"
import styles from "./Cookies.module.css"

export const Cookies = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <PageHeading title='Cookies Policy' longLetter={true} />
          <p>
            Our website uses cookies to improve your experience and to analyze
            how our website is used. Cookies are small text files that are
            placed on your device when you visit our website.
          </p>
          <h2>What types of cookies do we use?</h2>
          <p>We use the following types of cookies on our website:</p>
          <ul>
            <li>
              Essential cookies: These cookies are necessary for the operation
              of our website and cannot be turned off in our system. They are
              usually set in response to actions made by you, such as setting
              your privacy preferences, logging in, or filling in forms.
            </li>
            <li>
              Analytical cookies: These cookies allow us to analyze how our
              website is used and to improve its performance. They help us to
              understand how visitors interact with our website by collecting
              and reporting information anonymously.
            </li>
            <li>
              Marketing cookies: These cookies are used to track visitors across
              websites. The intention is to display ads that are relevant and
              engaging for the individual user and thereby more valuable for
              publishers and third-party advertisers.
            </li>
          </ul>
          <h2>How to control cookies</h2>
          <p>
            You can control cookies through your browser settings. However,
            please note that if you disable cookies, some features of our
            website may not function properly.
          </p>
          <p>
            For more information about cookies and how to manage them, please
            visit{" "}
            <a
              href='https://www.allaboutcookies.org'
              target='_blank'
              rel='noreferrer'
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </Container>
      </div>
    </Layout>
  )
}
