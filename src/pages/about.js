import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./about.module.scss"
import { Link } from "gatsby"

const AboutPage = () => {
  const hackerText =
    "It is hard to write a simple definition of something as varied as hacking, but I think what these activities have in common is playfulness, cleverness, and exploration. Thus, hacking means exploring the limits of what is possible, in a spirit of playful cleverness. Activities that display playful cleverness have 'hack value'.\n\n – Richard Stallman, “On Hacking”"
  return (
    <Layout currentPage="About">
      <SEO title="About" />
      <div className={styles.container}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.whoami}>
          <p className={styles.whoamiText}>
            Welcome to my site. I'm Anıl, and I am interesed in Front-end
            developing.
          </p>
          <p className={styles.whoamiText}>
            I am studying Computer Engineering at Marmara University. I've been
            interested in computers and programming since my childhood.{" "}
            <span className={styles.underline}>Coding</span> and{" "}
            <span
              className={styles.underline}
              style={{ borderColor: "#EA4C89" }}
            >
              design
            </span>
            , which I started with curiosity and passion, is now a big part of
            my life. I am interested in Front-end mostly.
          </p>
          <p className={styles.whoamiText}>
            I can describe myself as a{" "}
            <span
              className={styles.underline}
              style={{ borderColor: "#82f9a1" }}
            >
              Geek
            </span>
            . Computer games, movies, comics, science fiction and fantasy books
            are my interests that I consume and spend time in my daily life.
          </p>
          <p className={styles.whoamiText}>
            I entered to the software world with web designing. Back then (~
            2012) there wasn't even Html5 yet and usually Frontpage was used for
            web design. After dealing with web design for a few years, I had not
            do any development on the web for a long time. Nowadays I am
            interested in frontend again. I develop primarily web applications
            with{" "}
            <span
              className={styles.underline}
              style={{ borderColor: "#00c2e0" }}
            >
              React
            </span>{" "}
            and mobile applications with{" "}
            <span
              className={styles.underline}
              style={{ borderColor: "#0079bf" }}
            >
              React Native
            </span>
            . Apart from that, I have been in the hacking culture since a young
            age and I can describe myself as a{" "}
            <a
              className={styles.tool}
              data-tip={hackerText}
              data-html="true"
              href="https://www.azquotes.com/quote/1255064"
            >
              hacker
            </a>{" "}
            (not a cracker). As an activist attitude from this hacking culture,
            I am a free software advocate and prefer to use free software as
            much as possible.
          </p>
          <p className={styles.whoamiText}>
            If you would like to get in touch you could{" "}
            <Link to="/contact">contact me here</Link>. If you have any
            feedback, I would be happy to hear from you.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
