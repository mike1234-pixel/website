import { Hero } from "../../common/Hero"
import { Section } from "../../common/Section"
import washington2 from "../../../assets/washington-2.jpeg"
import washington3 from "../../../assets/washington-3.jpeg"
import washington4 from "../../../assets/washington-4.jpeg"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <Section img={washington2}>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident?
        </p>
      </Section>
      <Section img={washington3} altLayout>
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
      </Section>
      <Section img={washington4}>
        <h2>Events</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          rerum excepturi assumenda illum in enim! Illo dignissimos ab repellat
          aut ratione, necessitatibus voluptate at repellendus repudiandae
          dolore amet iusto provident?
        </p>
      </Section>
    </div>
  )
}
