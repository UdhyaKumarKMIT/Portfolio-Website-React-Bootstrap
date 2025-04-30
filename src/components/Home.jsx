import { Container, Row, Col, Button } from "react-bootstrap"
import Type from "./Type"
import "./Home.css"
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa"
import homeMain from '../assets/home-main.svg';
const Home = () => {
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="home-content">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="Waving Hand">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">Udhya Kumar K</strong>
              </h1>
              <div className="typing-container">
                <Type />
              </div>

              <div className="btncontainer">
                <Button variant="primary" href="https://www.linkedin.com/in/udhya-kumar-k-b7999128a/" className="home-button" target="_blank">
                  <FaLinkedin /> LinkedIn
                </Button>
                
                <Button variant="primary" href="https://github.com/UdhyaKumarKMIT" className="home-button" target="_blank">
                  <FaGithub /> GitHub
                </Button>
                <Button variant="primary" href="https://drive.google.com/file/d/1Di5uBL3kXoEiPsFFLRVrQZNrFZHQrw54/view?usp=sharing" className="home-button" target="_blank">
                  <FaFileAlt /> Resume
                </Button>
              </div>
            </Col>

            <Col md={5} className="home-img-container">
              <img
                src={homeMain}
                className="img-fluid home-img"
                alt="home illustration"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home
