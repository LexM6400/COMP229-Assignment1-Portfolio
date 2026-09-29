const services = [
  {
    icon: "🎮",
    title: "Game Development",
    description:
      "Building 2D gameplay systems in Unity, including player movement, level transitions, parallax backgrounds, enemy behaviour, and user interfaces.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Creating responsive multi-page interfaces with HTML, CSS, JavaScript, React, and reusable components.",
  },
  {
    icon: "🧩",
    title: "Programming",
    description:
      "Developing small applications and prototypes with C# and Java using clear object-oriented programming principles.",
  },
  {
    icon: "🧊",
    title: "2D Asset Support",
    description:
      "Creating and preparing basic 2D character models, rigs, and animations in Blender for use in Unity projects.",
  },
];

export default function Services() {
  return (
    <main className="page services-page">
      <header className="page-header">
        <h1>Services</h1>
        <p>
          I can support student, personal, and entry-level creative projects in
          the following areas.
        </p>
      </header>

      <section className="service-grid" aria-label="Services offered">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon" aria-hidden="true">
              {service.icon}
            </span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
