import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./contact.module.scss"
import { Helmet } from "react-helmet"

const ContactPage = () => (
  <Layout currentPage="Contact">
    <SEO title="Contact" />
    <div className={styles.container}>
      <h1 className={styles.title}>Contact me</h1>
      <Helmet>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Helmet>
      <form
        action="https://submit-form.com/O9J9XLLpT1a9iZAs6I-13"
        target="_self"
      >
        <div
          class="g-recaptcha"
          data-sitekey="6LcrbdEZAAAAAMXP1HcJbLmT1DILFX8WfDeTxhAV"
        ></div>

        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
