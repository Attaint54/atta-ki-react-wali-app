
import './App.css'

function App() {
  // No need for count state in CV, but keeping as per template

  return (
    <>
      <div className="cv-container">
        <header>
          <h1>Atta-ul-Bari</h1>
          <p>Email: atta@example.com | Phone: (123) 456-7890</p>
          <p>Location: Karachi, Pakistan</p>
        </header>
        <section className="cv-summary">
          <h2>Summary</h2>
          <p>
            Experienced software developer with a passion for building scalable web applications and working across the full stack.
          </p>
        </section>
        <section className="cv-skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React, Redux</li>
            <li>Node.js, Express</li>
            <li>HTML, CSS, SASS</li>
            <li>Git, GitHub</li>
          </ul>
        </section>
        <section className="cv-experience">
          <h2>Experience</h2>
          <h3>Frontend Developer, ABC Corp</h3>
          <p>Jan 2022 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and TypeScript.</li>
            <li>Collaborated with designers and backend developers to deliver features.</li>
          </ul>
          <h3>Junior Developer, atta Ltd</h3>
          <p>Jun 2020 - Dec 2021</p>
          <ul>
            <li>Assisted in building internal tools with Node.js and React.</li>
            <li>Wrote unit and integration tests to ensure code quality.</li>
          </ul>
        </section>
        <section className="cv-education">
          <h2>Education</h2>
          <h3> Computer Science</h3>
          <p>University of Example, 2026</p>
        </section>
      </div>
    </>
  )
}

export default App