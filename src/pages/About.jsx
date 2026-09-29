export default function About() {
  return (
    <main className="page about-page">
      <section className="about-section">
        <div className="about-image-wrapper">
          {/* Keep Me.png inside public/images, or update this path. */}
        <img
        className="profile-image"
        src="/images/Me.png"
        alt="Portrait of Alexis Gabriel Morales"
        width={150}
        height={150}
        />
        </div>

        <div className="about-content">
          <h1>About Me</h1>

          <h2>Alexis Gabriel Morales</h2>
          <p>
            I am a Game Programming student at Centennial College who enjoys
            programming 2D games, creating websites and concept planning for any 
            future 2D games and lastly compiling and creating video portfolio of my work.
          </p>

          <p>
            I enjoy learning through hands-on projects. Whether I am creating a
            Unity game, building a React website, or planning a software system,
            I focus on writing organized code and creating experiences that are
            clear and enjoyable for users.
          </p>

          <h2>Current Goals</h2>
          <p>I am currently studying and strenghtening my C#,Java,Unity and React skills while building a portfolio to demonstrate my programming skills.
            I also want to improve my video editting skills to be able to record and compile my work in a single video.
          </p>

        <a
        className="button"
        href="/resume/Alexis-Morales-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        >
        View My Resume
        </a>
        </div>
      </section>
    </main>
  );
}
