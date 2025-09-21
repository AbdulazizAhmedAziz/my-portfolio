import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Abdulaziz Abdulmegied</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Hello, I'm Abdulaziz 👋</h2>
        <p>Aspiring Data Scientist & Computer Engineer</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Engineering student with a strong interest in
          Data Science, Artificial Intelligence, and Cloud Computing.
          Passionate about solving real-world problems through technology
          and innovation.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>📊 Data Analysis Dashboard</h3>
            <p>Interactive dashboard built with Python & Power BI.</p>
          </div>
          <div className="card">
            <h3>🤖 AI Chatbot</h3>
            <p>Natural language chatbot using Python & TensorFlow.</p>
          </div>
          <div className="card">
            <h3>☁️ Cloud Deployment</h3>
            <p>Deployed scalable apps using AWS & Docker.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:abdulaziz102003@yahoo.com">abdulaziz102003@yahoo.com</a></p>
        <p>GitHub: <a href="https://github.com/AbdulazizAhmedAziz" target="_blank" rel="noreferrer">github.com/AbdulazizAhmedAziz</a></p>
        <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/abdulaziz</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Abdulaziz Abdulmegied. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

