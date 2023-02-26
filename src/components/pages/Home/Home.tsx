import { Hero } from "../../common/Hero"
import { Section } from "../../common/Section"
import washington2 from "../../../assets/washington-2.jpeg"
import washington3 from "../../../assets/washington-3.jpeg"
import washington4 from "../../../assets/washington-4.jpeg"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <Section img={washington2} altText='the washington beer garden'>
        <h2>About</h2>
        <p>
          We're a little off the beaten track, which is just the way we like
          like. Not too far, mind. We're stumbling distance from Division
          Street, on the bottom corner of Devonshire Green. We're the only city
          centre pub to have a beer garden big enough to host our own music
          festival in, and a dancefloor intimate enough to feel every groove of
          every record.
        </p>
        <p>
          <Link to='/about' className={styles.link}>
            Find out more about us...
          </Link>
        </p>
      </Section>
      <Section
        img={washington3}
        altText='guests outside the washington'
        altLayout
      >
        <h2>Drinks</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laboriosam atque quam nobis facilis enim debitis
          nostrum provident eius rem consequatur? Error, impedit adipisci eum
          quaerat in nam repudiandae! Repudiandae, adipisci?
        </p>
        <p>
          <Link to='/drinks' className={styles.link}>
            See our drinks menu...
          </Link>
        </p>
      </Section>
      <Section img={washington4} altText='live music at the washington'>
        <h2>Events</h2>
        <p>
          Each week we have cutting edge bands and left of center DJs during the
          week and good times party sounds at the weekend 'til three in the
          morning. You're just as likely to be nestled in beside a bright eyed
          student having their mind blown by one of our DJs as a grizzled old
          muso reminiscing about the time they saw Debbie Harry in here. You'll
          find them all in The Washington.
        </p>
        <p>
          <Link to='/events' className={styles.link}>
            See our events calendar...
          </Link>
        </p>
      </Section>
    </div>
  )
}
