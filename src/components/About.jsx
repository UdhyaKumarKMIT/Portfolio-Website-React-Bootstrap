import { Container, Row, Col } from "react-bootstrap"
import "./About.css"
import HomeMainImage from "../assets/home-main.svg"

const About = () => {
  return (
    <section>
      <Container className="about-section" id="About">
        <div className="section-decoration">
          <div className="decoration-item d1"></div>
          <div className="decoration-item d2"></div>
          <div className="decoration-item d3"></div>
          <div className="decoration-item d4"></div>
        </div>

        <Row className="align-items-center">
          <Col md={7} className="about-content">
            <h1 className="section-title">About Me</h1>
            <div className="about-text">
              <p className="intro-text">
                  Hi there! I'm Udhya Kumar K, a highly motivated Computer Engineering Undergraduate with a passion for Full
                  Stack Web Development, Machine Learning and Problem-solving. I am adept at developing cutting-edge web and mobile applications with smooth and user friendly UI              
                <span className="laptop-emoji">💻</span>

                </p>
              <p className="career-text">
                Seeking opportunities in the tech industry to contribute my skills and drive innovation.
                <span className="rocket-emoji">🚀</span>
              </p>
              <div className="Education-text">
                <p>Education</p>
                <Row>
                  <Col>
                    <p>B.E Computer Science and Engineering  </p>
                     <p>CGPA 9.72 / 10</p>
                    <p>Madras Institute of Technology, Anna University</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={5} className="profile-image-container">
            <div className="profile-image-wrapper">
           <img  src={HomeMainImage} alt="Udhya Kumar" className="profile-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
