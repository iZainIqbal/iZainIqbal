import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import RouteMeta from "./components/routeMeta";
import NotFound from "./components/notFound";

// Route-level code splitting — each page loads as its own chunk.
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const Services = lazy(() => import("./components/services"));
const Projects = lazy(() => import("./components/projects"));
const Certificates = lazy(() => import("./components/certificates"));
const Experience = lazy(() => import("./components/experience"));
const Handman = lazy(() => import("./components/handman"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

function PageFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div
        className="w-10 h-10 border-4 border-gray-700 border-t-blue-400 rounded-full animate-spin"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}

// Proof before pitch: featured work directly under the hero converts
// better than leading with the service menu.
function HomePage() {
  return (
    <>
      <Home />
      <Projects limit={3} hideOlder showSeeAll />
      <Services limit={3} showSeeAll />
      <About compact />
    </>
  );
}

// On GitHub Pages the app lives under /iZainIqbal; the CRA dev server serves
// at "/" while still setting PUBLIC_URL, so only use the basename when the
// current URL actually starts with it.
const publicUrl = process.env.PUBLIC_URL || "";
const basename =
  publicUrl && window.location.pathname.startsWith(publicUrl)
    ? publicUrl
    : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <RouteMeta />
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/handman" element={<Handman />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
