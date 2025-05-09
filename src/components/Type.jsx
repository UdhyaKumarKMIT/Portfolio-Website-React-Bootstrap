import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Web Developer", "AI and ML Enthusiast"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
