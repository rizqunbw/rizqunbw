import { Link } from "react-router-dom";
import {
  experienceHighlights,
  heroSignals,
  principles,
  profile,
  projects,
  roleFits,
  skillGroups,
  stats,
  strengths,
  timeline,
} from "../data/profile";

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function HomePage() {
  return (
    <main className="page">
      <section className="hero shell">
        <div className="hero__content">
          <span className="eyebrow">Game owner with IT operations focus</span>
          <h1>
            IT operations, technical support, and server administration built
            from real ownership experience.
          </h1>
          <p className="hero__lead">{profile.summary}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View featured work
            </a>
            <a
              className="button button--secondary"
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <span>{profile.education.school}</span>
            <span>GPA {profile.education.gpa}</span>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card__media">
            <div className="hero-card__photo-frame">
              <img
                className="hero-card__photo"
                src={profile.photo}
                alt={profile.name}
              />
            </div>
            <div className="hero-card__focus">
              <span className="hero-card__focus-label">Career focus</span>
              <strong className="hero-card__focus-title">
                IT Support / Technical Operations
              </strong>
              <p className="hero-card__focus-copy">
                Open to support-facing roles with troubleshooting, monitoring,
                and hands-on system ownership.
              </p>
            </div>
          </div>

          <div className="hero-card__badge">What I actually do</div>
          <h2>{profile.headline}</h2>
          <p>{profile.availability}</p>

          <div className="hero-card__signals">
            {heroSignals.map((item) => (
              <span className="hero-card__signal" key={item}>
                {item}
              </span>
            ))}
          </div>

          <ul className="plain-list">
            {profile.positioning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="shell stat-grid" aria-label="Key stats">
        {stats.map((item, index) => (
          <article
            className="stat-card"
            key={item.label}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="shell section" id="about">
        <SectionTitle
          eyebrow="Profile"
          title="What kind of professional profile fits me best"
          copy="The most accurate framing is not pure software engineer and not sales. I am a game owner, but the clearest professional fit for hiring is IT support, technical support, and technical operations work where ownership, troubleshooting, stability, and user-facing execution all matter together."
        />

        <div className="two-column">
          <article className="panel">
            <h3>Professional positioning</h3>
            <p>
              You can think of me as a game owner with strong IT operations and
              support-oriented technical experience. I understand users,
              repetitive workflows, service quality, and the pressure of
              keeping a live environment healthy over time.
            </p>
            <p>
              My technical value comes from structured thinking, operational
              ownership, and the ability to use AI effectively to create useful
              tools, solve issues faster, and keep systems moving.
            </p>
          </article>

          <article className="panel panel--accent">
            <h3>Why this matters for hiring</h3>
            <p>
              The strongest story is that I already ran a real environment as a
              game owner: users, data, support, visuals, revenue, and tooling.
              That is experience. It is self-employed experience, but it is
              still real operational and technical ownership.
            </p>
            <p>
              Teams looking for reliability, initiative, and hands-on problem
              solving can get value from that profile immediately.
            </p>
          </article>
        </div>
      </section>

      <section className="shell section">
        <SectionTitle
          eyebrow="Strengths"
          title="Where I am strongest"
          copy="These are the areas where I can contribute fastest and most honestly."
        />

        <div className="card-grid">
          {strengths.map((item, index) => (
            <article
              className="feature-card"
              key={item.title}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <SectionTitle
          eyebrow="Experience"
          title="Hands-on responsibilities I already handle"
          copy="These are responsibilities I already handle in a live environment, which is why moving into IT support or technical operations is a natural step."
        />

        <div className="panel">
          <ul className="plain-list">
            {experienceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell section">
        <SectionTitle
          eyebrow="Skills"
          title="Top skills and working areas"
          copy="Grouped this way so recruiters can scan the support, operational, and technical side quickly."
        />

        <div className="card-grid">
          {skillGroups.map((group, index) => (
            <article
              className="feature-card"
              key={group.title}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3>{group.title}</h3>
              <div className="stack-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <SectionTitle
          eyebrow="Timeline"
          title="Experience built through ownership"
          copy="The timeline below matters because it shows continuity: I stayed with the work, learned from it, and kept improving the system over years."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <article
              className="timeline-item"
              key={`${item.period}-${item.title}`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="timeline-item__period">{item.period}</span>
              <div className="timeline-item__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section" id="projects">
        <SectionTitle
          eyebrow="Projects"
          title="Projects built from real problems, not just for show"
          copy="These projects exist because I needed better workflows in real day-to-day technical operations."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.slug}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="project-card__top">
                <span className="tag">{project.shortLabel}</span>
                <h3>{project.name}</h3>
                <p>{project.intro}</p>
              </div>

              <ul className="plain-list plain-list--tight">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-card__actions">
                <Link className="button button--primary" to={`/${project.slug}`}>
                  Open project page
                </Link>
                <a
                  className="button button--secondary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section" id="roles">
        <SectionTitle
          eyebrow="Best fit roles"
          title="Where I should be applying"
          copy="These roles match the work I have already done and the way I create value. They keep the story honest: I am a game owner by background, but my strongest hiring fit is in IT support, technical support, and technical operations."
        />

        <div className="card-grid">
          {roleFits.map((role, index) => (
            <article
              className="role-card"
              key={role.title}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <SectionTitle
          eyebrow="Working style"
          title="The principles behind my work"
        />

        <div className="principles">
          {principles.map((item, index) => (
            <article
              className="principle"
              key={item}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section section--contact" id="contact">
        <SectionTitle
          eyebrow="Contact"
          title="Open to IT support, technical support, and technical operations roles"
          copy="If the role needs someone who can troubleshoot, communicate clearly with users, maintain system stability, and turn repeated problems into practical systems, that is where I can contribute best."
        />

        <div className="contact-panel">
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.location}</p>
            <p>{profile.phone}</p>
            <p>{profile.email}</p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email me</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.cv} target="_blank" rel="noreferrer">
              View CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
