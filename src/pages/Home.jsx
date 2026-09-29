import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="page-label">Game Programming Student</p>

          <h1>Hi, I’m Alexis Gabriel Morales</h1>

          <p className="hero-description">
            Welcome to my personal portfolio. I am a Game Programming student at
            Centennial College with an interest in building games, websites,
            and video editting.
          </p>

          <h2>My Mission</h2>

          <p>
            My mission is to create a game that entertains the anyone no matter the age while continuing to grow as a game programmer
            and designer.
          </p>

          <h2>What I Work With</h2>

          <p>
            C#, Java, JavaScript, React, Unity, Blender, HTML, CSS, Davinci Resolve and software
            design fundamentals.
          </p>

          <div className="button-group">
            <Link to="/about" className="button">
              About Me
            </Link>

            <Link to="/projects" className="button secondary-button">
              View Projects
            </Link>
          </div>
        </div>

        <div className="home-image-wrapper">
          <img
            className="home-image"
            src="/images/HomePhoto.jpg"
            alt="Alexis Gabriel Morales"
          />
        </div>
      </section>
    </main>
  );
}