import { Container } from "../Container"
import { CopyFooter } from "../CopyFooter"
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md"
import { BsTelephone, BsHandbag } from "react-icons/bs"
import { GiGuitarBassHead } from "react-icons/gi"
import { TiBeer } from "react-icons/ti"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <section>
        <Container>
          <div className={styles.grid}>
            <div>
              <h6>
                Where I'm based <MdOutlineLocationOn />
              </h6>
              <p>UK</p>
            </div>
            <div>
              <h6>
                Call, text or Whatsapp <BsTelephone />
              </h6>
              <p>
                <a href='tel:07769 583 616'>07769 583 616</a>
              </p>
              <h6>
                Email <MdOutlineEmail />
              </h6>
              <p>
                <a href='mailto:miketandy@protonmail.com'>
                  miketandy@protonmail.com
                </a>
              </p>
            </div>
            <div>
              <h6>
                All lost property enquiries <BsHandbag />
              </h6>
              <p>Please call the pub during opening hours</p>
              <h6>
                Band/DJ booking enquiries <GiGuitarBassHead />
              </h6>
              <p>
                Email{" "}
                <a href='mailto:bookings@thewashington.pub'>
                  bookings@thewashington.pub
                </a>
              </p>
            </div>
            <div>
              <h6>
                Opening times <TiBeer />
              </h6>
              <div className={styles.openingTimes}>
                <table>
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>18:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>18:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>18:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>18:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>16:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>14:00 - 03:00</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>16:00 - 01:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CopyFooter />
    </footer>
  )
}
