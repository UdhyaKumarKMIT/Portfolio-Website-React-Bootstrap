import { Container } from "react-bootstrap"
import { CgMail } from "react-icons/cg"
import { FaLinkedin } from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-buttons">
          <a href="mailto:udhyak2004@gmail.com" className="contact-button">
            <CgMail /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/udhya-kumar-k-b7999128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact
