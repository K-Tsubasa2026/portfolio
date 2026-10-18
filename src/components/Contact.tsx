import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle num="04" en="CONTACT" ja="お問い合わせ" />
        <Reveal>
          <div className="contact-box">
            <p className="contact-message">
              最後まで見ていただき、
              <br />
              ありがとうございます。
            </p>
            <p className="contact-sub">お気軽にご連絡ください。</p>
            <div className="contact-buttons">
              <a href="mailto:yasu.0127abc@icloud.com" className="btn is-primary">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                メールを送る
              </a>
              <a
                href="https://github.com/K-Tsubasa2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
