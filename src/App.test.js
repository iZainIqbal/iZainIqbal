import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home hero with name and role", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /zain iqbal/i })
  ).toBeInTheDocument();
});

test("renders the main navigation with all routes", () => {
  render(<App />);
  const nav = screen.getByRole("navigation", { name: /main navigation/i });
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

test("renders a skip-to-content link targeting main", () => {
  render(<App />);
  const skip = screen.getByText(/skip to main content/i);
  expect(skip).toHaveAttribute("href", expect.stringContaining("#main"));
  expect(screen.getByRole("main")).toHaveAttribute("id", "main");
});
