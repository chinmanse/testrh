import React, { useState } from "react";
import "src/assets/css/sidebar.css"
import logo from "src/assets/images/logo.png"

type NavKey = "all" | "archived";

const IconHome = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21V12h14v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArchive = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTag = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20.59 13.41L10.59 3.41A2 2 0 0 0 9.17 3H6a2 2 0 0 0-2 2v3.17c0 .53.21 1.04.59 1.41l10 10a2 2 0 0 0 2.83 0l3-3a2 2 0 0 0 0-2.83z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
  </svg>
);

const IconChevron = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Sidebar: React.FC = () => {
  const [active, setActive] = useState<NavKey>("all");

  const tags = [
    "Cooking",
    "Dev",
    "Fitness",
    "Health",
    "Personal",
    "React",
    "Recipes",
    "Shopping",
    "Travel",
    "TypeScript",
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <img src={logo} alt="Notes logo" className="brand-icon" />
          <span className="brand-text">Notes</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <button
            className={`nav-item ${active === "all" ? "active" : ""}`}
            onClick={() => setActive("all")}
            aria-current={active === "all" ? "page" : undefined}
          >
            <span className="nav-left">
              <span className="nav-icon"><IconHome /></span>
              <span className="nav-label">All Notes</span>
            </span>
            <span className="nav-right"><IconChevron /></span>
          </button>

          <button
            className={`nav-item ${active === "archived" ? "active" : ""}`}
            onClick={() => setActive("archived")}
          >
            <span className="nav-left">
              <span className="nav-icon"><IconArchive /></span>
              <span className="nav-label">Archived Notes</span>
            </span>
            <span className="nav-right"><IconChevron /></span>
          </button>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="tags-title">Tags</div>
        <ul className="tags-list">
          {tags.map((t) => (
            <li key={t} className="tag-item">
              <span className="tag-icon"><IconTag /></span>
              <span className="tag-label">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
