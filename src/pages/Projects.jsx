const featuredProjects = [
  {
    title: "In the Spire",
    image: "/images/InTheSpire.png",
    imageAlt: "Gameplay scene from In the Spire",
    technologies: "Unity, C#, 2D Game Development",
    role: "Game Programmer and Designer",
    description:
      "A medieval 2D platformer following Vaelor on his journey through a ruined kingdom to confront Calderus at the top of the spire.",
    outcome:
      "Created core movement, parallax backgrounds, level transitions, enemy behaviour, boss concepts, and the overall game presentation.",
  },
  {
    title: "Evolution Of Fighting Games",
    image: "/images/VideoEditting.png",
    imageAlt: "Game Backlog Tracker software design preview",
    technologies: "Davinci Resolve",
    role: "Video Editor, Narrator",
    description:
      "A video project that uses other videos to display the rich history of fighting games",
    outcome:
      "Produced a video that shows the history,impact and show of proper transitions and good naration for the video presentation.",
  },
  {
    title: "Lucas Nullix Character Project",
    image: "/images/lucas-nullix.png",
    imageAlt: "3D character model of Lucas Nullix",
    technologies: "Blender, Unity, 3D Modelling and Animation",
    role: "3D Modeller and Animator",
    description:
      "A stylized technology-themed character created as a mission-giver for a game project, complete with clothing, accessories, and a custom rig.",
    outcome:
      "Modelled, rigged, and prepared the character for Unity with idle, walk, jump, and call animations.",
  },
];

export default function Projects() {
  return (
    <main className="page projects-page">
      <header className="page-header">
        <h1>My Projects</h1>
        <p>
          These projects highlight my experience with game development,
          video editting, programming, and 2D production.
        </p>
      </header>

      <section className="project-grid" aria-label="Featured projects">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            {/* Add each project image to public/images using this filename. */}
            <img
              className="project-image"
              src={project.image}
              alt={project.imageAlt}
            />

            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-tools">{project.technologies}</p>
              <p>
                <strong>My Role:</strong> {project.role}
              </p>
              <p>{project.description}</p>
              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
