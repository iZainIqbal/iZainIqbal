import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./projects";

const renderProjects = (props) =>
  render(
    <MemoryRouter>
      <Projects {...props} />
    </MemoryRouter>
  );

test("renders featured case studies with role and proof bullets", () => {
  renderProjects();
  expect(
    screen.getByRole("heading", { name: /handman/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/lead flutter mobile developer/i)).toBeInTheDocument();
  expect(
    screen.getByText(/nfc tap-to-pay with twint and stripe connect/i)
  ).toBeInTheDocument();
});

test("category filter narrows the featured list", () => {
  renderProjects();
  expect(
    screen.getByRole("heading", { name: /rawteen dubai/i })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /genai/i }));
  expect(
    screen.queryByRole("heading", { name: /rawteen dubai/i })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /ai apex/i })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /all/i }));
  expect(
    screen.getByRole("heading", { name: /rawteen dubai/i })
  ).toBeInTheDocument();
});

test("home variant hides filters and earlier work, limits featured", () => {
  renderProjects({ limit: 3, hideOlder: true, showSeeAll: true });
  expect(
    screen.queryByRole("group", { name: /filter projects/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: /earlier work/i })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: /ai apex/i })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /see all projects/i })
  ).toBeInTheDocument();
});
