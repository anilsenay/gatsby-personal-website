import React, { useState } from "react"
import Reaptcha from "reaptcha"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import SocialButton from "../components/SocialButton"

import styles from "./contact.module.scss"

const ContactPage = () => {
  const [verified, setVerified] = useState(false)
  const [inputs, setInputs] = useState({ email: "", subject: "", message: "" })

  const onVerify = recaptchaResponse => {
    setVerified(true)
  }

  const emailRegex = /\S+@\S+\.\S+/

  return (
    <Layout currentPage="Contact">
      <SEO title="Contact" />
      <div className={styles.container}>
        <h1 className={styles.title}>Contact me</h1>
        <h4>Social Media</h4>
        <p>You can contact me through my social media accounts</p>
        <div className={styles.socialButtons}>
          <SocialButton
            text="Twitter"
            hoverText="@anilsenay"
            color="#1da1f2"
            href="https://twitter.com/anilsenay"
            target="_blank"
          />
          <SocialButton
            text="Instagram"
            hoverText="@anilsenay"
            color="#c13584"
            href="https://instagram.com/anilsenay"
            target="_blank"
          />
          <SocialButton
            text="Github"
            hoverText="@anilsenay"
            color="#BBC6CC"
            href="https://github.com/anilsenay"
            target="_blank"
          />
          <SocialButton
            text="Linkedin"
            hoverText="/anılşenay"
            color="#2867b2"
            href="https://linkedin.com/in/anılşenay"
            target="_blank"
          />
        </div>
        <h4>Email</h4>
        <div className={styles.email}>
          <a href="mailto:anilsenay3@gmail.com">anilsenay3@gmail.com</a>
          <span>GPG: 0x91A3D10D </span>
        </div>
        <h3 className={styles.greenText}>Or you can use this contact form</h3>
        <form
          action="https://submit-form.com/O9J9XLLpT1a9iZAs6I-13"
          target="_blank"
        >
          <label for="email">
            <span className={styles.labelText}>Email</span>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={e => setInputs({ ...inputs, email: e.target.value })}
            />
          </label>
          <label for="subject">
            <span className={styles.labelText}>Subject</span>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={e => setInputs({ ...inputs, subject: e.target.value })}
            />
          </label>
          <label for="message">
            <span className={styles.labelText}>Message</span>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={e => setInputs({ ...inputs, message: e.target.value })}
            />
          </label>
          {!emailRegex.test(inputs.email) ||
          inputs.subject.length === 0 ||
          inputs.message.length === 0 ? (
            <span className={styles.errorText}>
              You must fill the fields correctly to send message!
            </span>
          ) : (
            <>
              {!verified && (
                <span className={styles.errorText}>
                  You must verify recaptcha
                </span>
              )}
              <Reaptcha
                sitekey="6LcrbdEZAAAAAMXP1HcJbLmT1DILFX8WfDeTxhAV"
                onVerify={onVerify}
              />
            </>
          )}
          <Button text="Submit" type="submit" disabled={!verified} />
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
