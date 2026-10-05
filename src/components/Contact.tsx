import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner">
        <h2 className="section-title">CONTACT</h2>
        <p className="contact-message">お気軽にご連絡ください</p>
        <a href="mailto:yasu.0127abc@icloud.com" className="contact-button">
          <i className="fa-solid fa-envelope" aria-hidden="true" />
          メールを送る
        </a>
      </div>
    </section>
  )
}

export default Contact
