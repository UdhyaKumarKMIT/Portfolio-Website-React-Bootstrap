import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

import CLogo from '../assets/skills/C.svg';
import CPlusPlusLogo from '../assets/skills/C++.svg';
import JavaLogo from '../assets/skills/java.svg';
import PythonLogo from '../assets/skills/python.svg';
import HTML5Logo from '../assets/skills/html5.svg';
import CSS3Logo from '../assets/skills/css3.svg';
import JavaScriptLogo from '../assets/skills/javascript.svg';
import ReactLogo from '../assets/skills/react.svg';
import NodeJSLogo from '../assets/skills/nodejs.svg';
import PHPLogo from '../assets/skills/php.svg';
import MySQLLogo from '../assets/skills/mysql.svg';
import MongoDBLogo from '../assets/skills/mongodb.svg';
import GitLogo from '../assets/skills/Git.svg';

function Skills() {
  // Define the skills array with imported images
  const skills = [
    { name: 'C', image: CLogo },
    { name: 'C++', image: CPlusPlusLogo },
    { name: 'Java', image: JavaLogo },
    { name: 'Python', image: PythonLogo },
    { name: 'HTML5', image: HTML5Logo },
    { name: 'CSS3', image: CSS3Logo },
    { name: 'JavaScript', image: JavaScriptLogo },
    { name: 'React', image: ReactLogo },
    { name: 'Node.js', image: NodeJSLogo },
    { name: 'PHP', image: PHPLogo },
    { name: 'MySQL', image: MySQLLogo },
    { name: 'MongoDB', image: MongoDBLogo },
    { name: 'Git', image: GitLogo },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I've been working with</p>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={4} sm={3} md={2} key={index} className="skill-item">
              <div className="skill-icon-container">
                <img src={skill.image} alt={skill.name} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;