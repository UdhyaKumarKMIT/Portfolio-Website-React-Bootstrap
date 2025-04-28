import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer-section" id="Footer">
      <Container>
        <h2 className="section-title text-center">Footer</h2>

        <Row className="footer-main">
          <Col sm={12} md={6} lg={6} className="footer-col footer-left">
            <div className="developer">
              <p className="SDE">Udhya Kumar K</p>
              <p>Software Developer</p>
              <p>Looking for collaboration and continuous learning</p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6} className="footer-col footer-right">
            <div className="footer-links">
              <h3 className="footer-title mb-3 fw-7">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="social-icons">
            <a href="mailto:udhyak9445@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/udhya-kumar-k-b7999128a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/UdhyaKumarKMIT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/udhya_2004/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/UdhyaKumarK2004" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </Row>

        <p className="footer-copy text-center m-3">©2025 Udhya Kumar K MIT. All Rights Reserved.</p>
      </Container>
    </section>
  )
}

export default Footer
