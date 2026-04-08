import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { profile } from "./data/profile";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" to="/">
          <span className="brand__mark">MRN</span>
          <span className="brand__text">
            <strong>{profile.name}</strong>
            <span>{profile.headline}</span>
          </span>
        </Link>

        <nav className="top-nav" aria-label="Primary">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#roles">Best Fit Roles</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          Built to present a clear story: game ownership, IT operations,
          technical support, and AI-assisted workflow building.
        </p>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundPage() {
  return (
    <main className="page shell">
      <section className="not-found">
        <span className="eyebrow">Page not found</span>
        <h1>That route is not part of the portfolio yet.</h1>
        <p>
          Head back to the main site to view the professional summary and
          featured work.
        </p>
        <Link className="button button--primary" to="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="page-shell">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moneytracker" element={<ProjectPage slug="moneytracker" />} />
          <Route path="/rfitemcrop" element={<ProjectPage slug="rfitemcrop" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </>
  );
}
