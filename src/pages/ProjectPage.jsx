import { Link } from "react-router-dom";
import { projects } from "../data/profile";

function StackList({ items }) {
  return (
    <div className="stack-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function ProjectPage({ slug }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page shell">
        <section className="not-found">
          <span className="eyebrow">Missing project</span>
          <h1>This project page does not exist.</h1>
          <Link className="button button--primary" to="/">
            Back to home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page shell">
      <section className="project-hero">
        <div className="project-hero__content">
          <span className="eyebrow">{project.shortLabel}</span>
          <h1>{project.name}</h1>
          <p>{project.intro}</p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open live demo
            </a>
            <a
              className="button button--secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repo
            </a>
          </div>
        </div>

        <aside className="project-summary">
          <h2>Why it matters</h2>
          <p>{project.impact}</p>
          <StackList items={project.stack} />
        </aside>
      </section>

      <section className="project-layout">
        <article className="panel">
          <span className="eyebrow">Challenge</span>
          <h2>Problem to solve</h2>
          <p>{project.challenge}</p>
        </article>

        <article className="panel">
          <span className="eyebrow">Solution</span>
          <h2>What the product does</h2>
          <p>{project.solution}</p>
        </article>

        <article className="panel panel--accent">
          <span className="eyebrow">My role</span>
          <h2>How I contributed</h2>
          <p>{project.role}</p>
        </article>

        <article className="panel">
          <span className="eyebrow">Highlights</span>
          <h2>Key capabilities</h2>
          <ul className="plain-list plain-list--tight">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="project-nav">
        <Link className="button button--secondary" to="/">
          Back to portfolio
        </Link>
      </section>
    </main>
  );
}
