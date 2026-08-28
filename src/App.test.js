import { render, screen, within } from "@testing-library/react";
import App from "./App";

// Route components are lazy-loaded, so queries await the resolved chunks.

// The hero h1 is a positioning headline, not the name — the name appears
// in the header logo and the hero profile card instead.
test("renders the home hero with a headline and the owner's name", async () => {
  render(<App />);
  expect(await screen.findByRole("heading", { level: 1 })).toBeInTheDocument();
  expect((await screen.findAllByText(/zain iqbal/i)).length).toBeGreaterThan(0);
});

test("renders the main navigation with all routes", async () => {
  render(<App />);
  const nav = await screen.findByRole("navigation", {
    name: /main navigation/i,
  });
  // Scoped to the main nav — the footer repeats several of these labels.
  for (const label of [
    "Home",
    "Services",
    "Projects",
    "About",
    "Handman",
    "Experience",
    "Contact",
  ]) {
    expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
  }
  expect(nav).toBeInTheDocument();
});

test("renders a skip-to-content link targeting main", async () => {
  render(<App />);
  const skip = await screen.findByText(/skip to main content/i);
  expect(skip).toHaveAttribute("href", expect.stringContaining("#main"));
  expect(screen.getByRole("main")).toHaveAttribute("id", "main");
});
