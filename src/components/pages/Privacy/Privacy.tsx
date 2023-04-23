import { Container } from "../../common/Container"
import { PageHeading } from "../../common/PageHeading"
import styles from "./Privacy.module.css"

export const Privacy = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageHeading title='Privacy Policy' longLetter={true} />
        <p>
          We respect your privacy and are committed to protecting the personal
          data that we collect about you. This privacy policy outlines how we
          collect, use, and disclose your personal data, and your rights with
          respect to that data.
        </p>
        <h2>What personal data do we collect?</h2>
        <p>We may collect the following types of personal data about you:</p>
        <ul>
          <li>
            Information about your use of our website, such as your IP address,
            browser type, and pages visited.
          </li>
          <li>
            Information that you provide to us when you fill out a form on our
            website.
          </li>
        </ul>
        <h2>How do we use your personal data?</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul>
          <li>To analyze and improve our website and the services we offer.</li>
          <li>
            To communicate with you about our services and respond to your
            inquiries.
          </li>
          <li>To comply with applicable laws and regulations.</li>
        </ul>
        <h2>Do we share your personal data?</h2>
        <p>
          We may share your personal data with third-party service providers
          that help us to operate our website and provide our services. We
          require these service providers to protect your personal data and not
          to use it for any other purposes.
        </p>
        <h2>How long do we keep your personal data?</h2>
        <p>
          We will only keep your personal data for as long as necessary to
          fulfill the purposes for which it was collected, or as required by
          applicable laws and regulations.
        </p>
        <h2>Your rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data
          that we hold about you. You also have the right to object to or
          restrict the processing of your personal data, and to data
          portability.
        </p>
        <p>
          Please contact me at{" "}
          <a href='mailto:miketandy@protonmail.com'>miketandy@protonmail.com</a>
        </p>
      </Container>
    </div>
  )
}
