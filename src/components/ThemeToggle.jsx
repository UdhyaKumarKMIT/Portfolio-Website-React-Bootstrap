"use client"

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
