"use client"

import { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { IoHomeOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { SiPaloaltonetworks } from "react-icons/si"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { RiContactsBook3Line } from "react-icons/ri"
import "./Navbar.css"
import ThemeToggle from "./ThemeToggle"
import UdhyaLogo from "../assets/logo.png"

function NavBar() {
  const [expand, setExpand] = useState(false)
  const [navMove, setNavMove] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavMove(true)
      } else {
        setNavMove(false)
      }
    }

    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  const closeNavbar = () => setExpand(false)

  return (
    <Navbar expanded={expand} fixed="top" expand="lg" className={navMove ? "navbar sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={UdhyaLogo} width="30" height="30" className="logo me-2" alt="Brand Logo" />
          Udhya SDE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(expand ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={closeNavbar}>
              <IoHomeOutline className="me-1 mb-1" /> Home
            </Nav.Link>
            <Nav.Link href="#About" onClick={closeNavbar}>
              <CiUser className="me-1 mb-1" /> About
            </Nav.Link>
            <Nav.Link href="#skills" onClick={closeNavbar}>
              <SiPaloaltonetworks className="me-1 mb-1" /> Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={closeNavbar}>
              <AiOutlineFundProjectionScreen className="me-1 mb-1" /> Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={closeNavbar}>
              <RiContactsBook3Line className="me-1 mb-1" /> Contact
            </Nav.Link>
            <ThemeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
