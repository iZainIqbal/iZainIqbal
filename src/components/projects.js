import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, ImageOff } from "lucide-react";
import { featuredProjects, olderProjects } from "../data/projects";
import Reveal from "./reveal";

// Filter chips on the full Projects page. Keys match the `categories`
// arrays in src/data/projects.js.
const FILTERS = [
  { key: "all", label: "All" },
  { key: "payments", label: "Payments" },
  { key: "genai", label: "GenAI" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "fullstack", label: "Full-Stack" },
];

const matchesFilter = (project, filter) =>
  filter === "all" || (project.categories || []).includes(filter);

// "handman_butler_car_lockout.webp" → "butler car lockout" — screenshot
// filenames are descriptive slugs, so alt text can name the actual screen.
const screenAlt = (src, title) => {
  const slug = (src.split("/").pop() || "")
    .replace(/\.\w+$/, "")
    .replace(/^[a-z0-9]+_/i, "")
    .replace(/_/g, " ");
  return `${title} — ${slug} screen`;
};

const PhoneFrame = ({ src, alt }) => {
  const [errored, setErrored] = useState(false);
  return (
    <div className="flex-shrink-0 w-[240px] md:w-[280px]">
      <div className="relative aspect-[9/19] bg-black rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-2xl z-10"></div>
        {errored ? (
          // Broken images render a visible fallback instead of an empty
          // frame, so missing exports are caught instead of hidden.
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-600">
            <ImageOff className="w-8 h-8" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-wider">
              Screenshot unavailable
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-contain"
            onError={() => setErrored(true)}
          />
        )}
      </div>
    </div>
  );
};

const ProjectLink = ({ link, primary }) => {
  const cls = primary
    ? "inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300"
    : "inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-200 rounded-lg font-medium hover:border-gray-400 hover:bg-white/5 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300";
  const Icon = primary ? ArrowRight : ExternalLink;
  return link.internal ? (
    <Link to={link.url} className={cls}>
      <span>{link.label}</span>
      <Icon className="w-4 h-4" aria-hidden="true" />
    </Link>
  ) : (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className={cls}>
      <span>{link.label}</span>
      <Icon className="w-4 h-4" aria-hidden="true" />
    </a>
  );
};

const FeaturedProject = ({ project, index }) => {
  const isReverse = index % 2 === 1;
  const hasScreens = project.screens.length > 0;
  return (
    <article className="mb-20 last:mb-0">
      <div
        className={`grid lg:grid-cols-12 gap-8 items-start ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Case-study column */}
        <div
          className={`${
            hasScreens ? "lg:col-span-5" : "lg:col-span-12"
          } lg:sticky lg:top-24 space-y-5`}
        >
          <p className="text-xs uppercase tracking-widest text-gray-500">
            {project.flagship && (
              <span className="text-blue-300 border border-blue-400/40 rounded px-1.5 py-0.5 mr-2 normal-case tracking-normal">
                Flagship case study
              </span>
            )}
            {project.period} · {project.role}
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p className="text-lg text-gray-300 font-medium">{project.tagline}</p>

          <ul className="space-y-2.5">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-gray-400 leading-relaxed">
                <span
                  className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-800/60 border border-gray-700 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <ProjectLink key={link.url} link={link} primary={i === 0} />
            ))}
          </div>
        </div>

        {/* Screens column — only rendered when real screenshots exist */}
        {hasScreens && (
          <div className="lg:col-span-7 -mx-6 lg:mx-0 overflow-hidden">
            <div
              className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-0 snap-x snap-mandatory scrollbar-hide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded-lg"
              tabIndex={0}
              role="region"
              aria-label={`${project.title} app screenshots, scrollable`}
            >
              {project.screens.map((src) => (
                <div key={src} className="snap-start">
                  <PhoneFrame src={src} alt={screenAlt(src, project.title)} />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center lg:text-left">
              Swipe or scroll · {project.screens.length} screens
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

const OlderProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block h-full bg-gray-800/60 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-blue-300"
  >
    <div className="aspect-video bg-gray-900 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white font-semibold">{project.title}</h4>
        <span className="text-gray-500 text-xs">{project.period}</span>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 text-blue-400 text-xs mt-3 opacity-70 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
        <span>Open</span>
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </div>
    </div>
  </a>
);

const Projects = ({ limit, showSeeAll = false, hideOlder = false }) => {
  const [filter, setFilter] = useState("all");
  const showFilters = !limit;
  const featuredPool = showFilters
    ? featuredProjects.filter((p) => matchesFilter(p, filter))
    : featuredProjects.slice(0, limit);
  const olderPool = showFilters
    ? olderProjects.filter((p) => matchesFilter(p, filter))
    : olderProjects;
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Five production Flutter apps shipped at Metaviz AI since Sep 2025 —
            each with real users, real payments, and a full UI flow. Plus
            earlier independent work.
          </p>
        </div>

        {/* Filter chips — full Projects page only */}
        {showFilters && (
          <div
            className="flex flex-wrap justify-center gap-2 mb-14"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  aria-pressed={isActive}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300 ${
                    isActive
                      ? "bg-blue-500 text-white border-transparent"
                      : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Featured projects */}
        <div>
          {featuredPool.map((project, index) => (
            <Reveal key={project.title}>
              <FeaturedProject project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Older projects */}
        {!hideOlder && olderPool.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Earlier Work
              </h3>
              <p className="text-gray-500 text-sm">
                Internship, freelance, and student projects (2023 – 2024)
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {olderPool.map((p, i) => (
                <Reveal key={p.title} delay={i * 75} className="h-full">
                  <OlderProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 flex flex-wrap items-center justify-center gap-4">
          {showSeeAll && (
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-200 px-7 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-white/5 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <span>See all projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
          <Link
            to="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
