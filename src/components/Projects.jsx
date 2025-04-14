import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with product catalog, cart functionality, and secure payment processing.",
      image: "./assets/projects/project1.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Web application that uses machine learning to generate unique images based on text descriptions.",
      image: "./assets/projects/project2.jpg",
      techStack: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://ai-image-demo.com",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates, task assignment, and progress tracking.",
      image: "./assets/projects/project3.jpg",
      techStack: ["React", "Firebase", "Material UI", "Redux"],
      github: "https://github.com/yourusername/task-management",
      demo: "https://task-management-demo.com",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Mobile-responsive weather application that provides real-time forecasts and historical weather data.",
      image: "./assets/projects/project4.jpg",
      techStack: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://weather-app-demo.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard that tracks and visualizes social media engagement metrics across platforms.",
      image: "./assets/projects/project5.jpg",
      techStack: ["React", "Chart.js", "Node.js", "Express"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://social-dashboard-demo.com",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology for tamper-proof elections.",
      image: "./assets/projects/project6.jpg",
      techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com/yourusername/blockchain-voting",
      demo: "https://blockchain-voting-demo.com",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <Row className="justify-content-center">
          {projects.map((project) => (
            <Col lg={4} md={6} sm={12} key={project.id} className="mb-4">
              <div className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=350"}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-github-link">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
