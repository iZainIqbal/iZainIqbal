import { render, screen } from "@testing-library/react";
import App from "./App";

// Route components are lazy-loaded, so queries await the resolved chunks.

test("renders the home hero with name and role", async () => {
  render(<App />);
  expect(
    await screen.findByRole("heading", { level: 1, name: /zain iqbal/i })
  ).toBeInTheDocument();
});

test("renders the main navigation with all routes", async () => {
  render(<App />);
  const nav = await screen.findByRole("navigation", {
    name: /main navigation/i,
  });
  for (const label of [
    "Home",
    "Services",
    "Projects",
    "About",
    "Handman",
    "Experience",
    "Contact",
  ]) {
    expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
  }
  expect(nav).toBeInTheDocument();
});

test("renders a skip-to-content link targeting main", async () => {
  render(<App />);
  const skip = await screen.findByText(/skip to main content/i);
  expect(skip).toHaveAttribute("href", expect.stringContaining("#main"));
  expect(screen.getByRole("main")).toHaveAttribute("id", "main");
});
