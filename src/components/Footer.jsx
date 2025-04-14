import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer-section" id="Footer">
      <Container className='align-items-center justify-content-center'>
        <h2 className="section-title">Footer</h2>
        <Row>
        
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          
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
       
        <p className="footer-copy">© 2025 Udhya Kumar. All Rights Reserved.</p>
      </Container>
    </section>
  )
}

export default Footer
