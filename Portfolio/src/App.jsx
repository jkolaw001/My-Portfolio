import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewWork = () => {
    scrollToSection("projects");
  };

  const handleGetInTouch = () => {
    scrollToSection("contact");
  };

  return (
    <div className="portfolio">
      <header className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="header">
          <div className="left-section">
            <a
              href="#"
              className="logo"
              onClick={() => scrollToSection("home")}
            >
              JoelK
            </a>
          </div>
          <nav className="right-section">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            {/* <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                console.log("Blog section coming soon");
              }}
            >
              Blog
            </a> */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home" className="main-container">
        <div className="sub-items">
          <div className="profile-image-container">
            <img
              src="/profile-img.jpg"
              alt="Joel Kolawole - Software Developer"
              className="profile-image"
            />
          </div>
          <div className="text-section">
            <h1 className="main-title">Hi, I'm Joel Kolawole</h1>
            <h2 className="subtitle">
              I'm a Software Developer
            </h2>
            <h3 className="welcome-text">
              Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges.
            </h3>
            <div className="buttons">
              <button className="primary" onClick={handleGetInTouch}>
                GET IN TOUCH →
              </button>
              <button className="secondary" onClick={handleViewWork}>
                View My Work
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </main>

      <section className="sub-main-content">
        <div id="about" className="about-section">
          <div className="about-flex-row">
            <div className="about-description">
                <h2>About</h2>
              <p>
                I'm Joel Kolawole, a full stack software engineer with a foundation in quality assurance and a passion for building intuitive, high-performance web applications. I specialize in React, Python, and PostgreSQL, and recently completed the HackReactor Immersive Program, where I built several full stack apps from the ground up—ranging from anime and movie platforms to dynamic blog tools.
              </p>
              <p>
                My background in QA has sharpened my eye for detail and instilled a deep respect for clean, maintainable code. I've led user acceptance testing, worked cross-functionally with developers, and helped reduce post-release issues through careful validation and collaboration.
              </p>
              <p>
                Now, I'm focused on growing as a developer, contributing to meaningful projects, and being part of teams that value creativity, curiosity, and user-centered design. When I'm not coding, I enjoy watching anime, experimenting with new tech, and bringing personal ideas to life through code.
              </p>
            </div>
            <div className="about-skills">
              <h3 className="about-skills-title">
                <span role="img" aria-label="tools">💻</span> Programming &amp; Tools
              </h3>
              <div className="skills-tags skills-tags-right">
                {[
                  "JavaScript",
                  "React",
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "HTML5",
                  "CSS3",
                  "Git",
                  "Node.js",
                  "Docker",
                  "REST APIs",
                  "Debugging",
                  "Project Management",
                  "Adobe Suite",
                  "Responsive Design",
                  "Problem Solving",
                  "Collaboration",
                ].map((skill, idx) => (
                  <span
                    className={
                      "skill-pill skill-" +
                      skill
                        .toLowerCase()
                        .replace(/\s+/g, "")
                        .replace(".", "")
                        .replace("-", "")
                        .replace("/", "")
                        .replace("restapis", "rest")
                        .replace("projectmanagement", "project")
                        .replace("adobesuite", "adobe")
                        .replace("responsivedesign", "responsive")
                        .replace("problemsolving", "problem")
                        .replace("collaboration", "collaboration")
                    }
                    key={idx}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="projects-section">
          <h2>Projects</h2>

          <div className="project-cards">
            {[
              {
                title: "Kitsukeep",
                description:
                  "A full-stack anime platform with multilingual support, dynamic watchlists, and RESTful API integrations. Built with modern React patterns and optimized for performance.",
                link: "https://github.com/jkolaw001/Kitsukeep",
                languages: ["Python", "React", "FastAPI"],
              },
              {
                title: "Movie Platform",
                description:
                  "A scalable movie platform featuring user authentication, reviews, and responsive design. Implements advanced filtering and search capabilities.",
                link: "https://github.com/jkolaw001/MovieDB",
                languages: ["Python", "React", "FastAPI"],
              },
              {
                title: "Portfolio Website",
                description:
                  "My personal portfolio built with React and modern CSS, featuring smooth scrolling, responsive layout, and interactive animations.",
                link: "#",
                languages: ["React", "CSS3", "JavaScript"],
              },
              {
                title: "Blog Platform",
                description:
                  "A dynamic content management system with markdown support, user authentication, and real-time commenting features.",
                link: "https://github.com/jkolaw001/Blog-App",
                languages: ["Python", "React", "PostgreSQL"],
              },
            ].map((project, idx) => (
              <div className="project-card" key={idx}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="lang-list">
                  {project.languages.map((lang, i) => (
                    <span
                      className={`lang lang-${lang.toLowerCase().replace(/\+/g, 'plus')}`}
                      key={i}
                    >
                      {lang}
                    </span>
                  ))}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-contact-row">
          <div id="resume" className="resume-section">
            <h2>Resume</h2>
            <p>
              Download my resume to learn more about my experience, skills, and professional journey in software development.
            </p>
            <a
              href="/home/jkola/project/Real/Portfolio/Portfolio/public/Resume 1 (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Download Resume (PDF)
            </a>
          </div>

          <div id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>
              Let's connect! I'm open to opportunities, collaborations, or just a
              chat about tech, design, or new ideas. Feel free to reach out through any of these platforms.
            </p>
            <div className="contact-icons">
              <a
                href="https://github.com/jkolaw001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/joelkolawole/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/your-twitter-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        || Coyright Joel K. 2025 ||
      </footer>
    </div>
  );
}

export default App;
