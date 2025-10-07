import React, { useState } from "react";
import "src/assets/css/sidebar.css"
import logo from "src/assets/images/logo.png"
import Home from "src/assets/icons/home.svg"
import Archive from "src/assets/icons/archive.svg"
import Tag from "src/assets/icons/tag.svg"
type NavKey = "all" | "archived";

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

              <span className="nav-icon"><img src={Home} /></span>
              <span className="nav-label">All Notes</span>
            </span>
            <span className="nav-right"><IconChevron /></span>
          </button>

          <button
            className={`nav-item ${active === "archived" ? "active" : ""}`}
            onClick={() => setActive("archived")}
          >
            <span className="nav-left">
              <span className="nav-icon"><img src={Archive} /></span>
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
              <span className="tag-icon"><img src={Tag} /></span>
              <span className="tag-label">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
