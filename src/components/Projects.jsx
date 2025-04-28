import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Driven Prompt Enhancement for Stable Diffusion",
      description:
        "A web application that extracts prompt from image and also enhances user prompts making is highly suitable for Stable Diffusion, improving image generation quality and relevance.",
      image: "promptgenerator.png",
      techStack: ["Artificial Intelligence", "NLP", "HuggingFace", "React" ,"MongoDB"],
      github: "https://github.com/UdhyaKumarKMIT/AI-Image-Prompt-Generator-Model",
      demo: "https://github.com/UdhyaKumarKMIT/AI-Image-Prompt-Generator-Model",
    },
    
      {
        id: 2,
        title: "Gemini Clone with Local Storage",
        description: "A clone of Gemini AI using the Gemini API key, featuring local storage support via MongoDB for offline reading. Built with React for a smooth conversational experience.",
        image: "gemini.png",
        techStack: ["React", "Gemini AI", "Web Development", "MongoDB"],
        github: "https://github.com/UdhyaKumarKMIT/Gemini-Ai",
        demo: "https://github.com/UdhyaKumarKMIT/Gemini-Ai"
      }
     , 
     {
      id: 3,
      title: "E-Cosmetics Shoppoing Website",
      description: "An e-commerce website for cosmetics shopping with user friendly interface. Users can browse products, add to cart. .They website provides a efficient and enjoyable experience",
      image: "E-Cosmetics.png",
      techStack: ["React", "React-Bootstrap", "Bootstrap","JavaScript"],
      github: "https://github.com/UdhyaKumarKMIT/E-Cosmetics-React-JS",
      demo: "https://github.com/UdhyaKumarKMIT/E-Cosmetics-React-JS"
    },
    
    {
      id: 4,
      title: "BookMyBite Restuarant Dining Booking App",
      description:
        "A restaurant dining booking application that allows users to view Popular Dishes, view menus, and make reservations.",
      image: "restaurant.png",
      techStack: ["React", "React-Bootstrap", "Bootstrap","JavaScript"],
      github: "https://github.com/UdhyaKumarKMIT/BookMyBite-Restaurant-Dining-Booking-Website-React",
      demo: "https://github.com/UdhyaKumarKMIT/BookMyBite-Restaurant-Dining-Booking-Website-React",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Bootstrap for a responsive design.",
      image: "portfolio.png",
      techStack: ["React", "React-Bootstrap", "Bootstrap", "Javascript","React-Router-Dom"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://social-dashboard-demo.com",
    },
    {
      id: 6,
      title: "Wealth Mate",
      description: "Wealth Mate is an AI-powered financial assistant featuring a smart chatbot, financial therapist, and dynamic stock dashboard. It helps users manage their finances, investments, and emotional well-being with ease.",
      image: "port2.png",
      techStack: ["Flutter","Project IDX"],
      github: "https://github.com/UdhyaKumarKMIT/Financial_App",
      demo: "https://github.com/UdhyaKumarKMIT/Financial_App",
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
