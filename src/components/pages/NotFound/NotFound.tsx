import { Container } from "../../common/Container"
import { HyperLink } from "../../common/HyperLink/HyperLink"
import { Layout } from "../../common/Layout"
import styles from "./NotFound.module.css"

export const NotFound = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <h1>404 Not Found</h1>
          <p>Page does not exist</p>
          <p>
            <HyperLink to='/' internalLink arrow>
              return home
            </HyperLink>
          </p>
        </Container>
      </div>
    </Layout>
  )
}
