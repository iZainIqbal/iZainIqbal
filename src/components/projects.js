import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Star, ArrowRight, ImageOff } from "lucide-react";
import { featuredProjects, olderProjects } from "../data/projects";

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

const ProjectLink = ({ link, primary, accent }) => {
  const cls = primary
    ? `inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${accent} text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg`
    : "inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-300 rounded-full font-medium hover:border-blue-500/60 hover:text-white transition-colors duration-300";
  const Icon = primary ? ArrowRight : ExternalLink;
  return link.internal ? (
    <Link to={link.url} className={cls}>
      <span>{link.label}</span>
      <Icon className="w-4 h-4" />
    </Link>
  ) : (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className={cls}>
      <span>{link.label}</span>
      <Icon className="w-4 h-4" />
    </a>
  );
};

const FeaturedProject = ({ project, index }) => {
  const isReverse = index % 2 === 1;
  const hasScreens = project.screens.length > 0;
  return (
    <div className="mb-20 last:mb-0">
      <div
        className={`grid lg:grid-cols-12 gap-8 items-start ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Description column */}
        <div
          className={`${
            hasScreens ? "lg:col-span-5" : "lg:col-span-12"
          } lg:sticky lg:top-24 space-y-5`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${project.accent} rounded-full text-white text-xs font-medium shadow-lg`}
            >
              <Star className="w-3 h-3" />
              Featured
            </span>
            <span className="text-gray-500 text-sm">{project.period}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p
            className={`text-lg bg-gradient-to-r ${project.accent} bg-clip-text text-transparent font-medium`}
          >
            {project.tagline}
          </p>

          <p className="text-gray-400 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <ProjectLink
                key={link.url}
                link={link}
                primary={i === 0}
                accent={project.accent}
              />
            ))}
          </div>
        </div>

        {/* Screens column — only rendered when real screenshots exist */}
        {hasScreens && (
          <div className="lg:col-span-7 -mx-6 lg:mx-0 overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-0 snap-x snap-mandatory scrollbar-hide">
              {project.screens.map((src, i) => (
                <div key={src} className="snap-start">
                  <PhoneFrame
                    src={src}
                    alt={`${project.title} screen ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center lg:text-left">
              ← scroll for {project.screens.length} screens →
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = ({ limit, showSeeAll = false, hideOlder = false }) => {
  const featured = limit ? featuredProjects.slice(0, limit) : featuredProjects;
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            5 Flutter apps shipped at Metaviz AI from Sep 2025 to now — each
            with real users, real payments, and a full UI flow. Plus earlier
            independent work.
          </p>
        </div>

        {/* Featured projects */}
        <div>
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Older projects */}
        {!hideOlder && (
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
              {olderProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/60 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]"
                >
                  <div className="aspect-video bg-gray-900 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold">{p.title}</h4>
                      <span className="text-gray-500 text-xs">{p.period}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 flex flex-wrap items-center justify-center gap-4">
          {showSeeAll && (
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-blue-500/50 text-blue-400 px-7 py-3 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
            >
              <span>See all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
