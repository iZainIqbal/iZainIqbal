import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./contact";

const EMAILJS_VARS = [
  "REACT_APP_EMAILJS_SERVICE_ID",
  "REACT_APP_EMAILJS_TEMPLATE_ID",
  "REACT_APP_EMAILJS_PUBLIC_KEY",
];

test("renders all required form fields", () => {
  render(<Contact />);
  expect(screen.getByLabelText(/your name/i)).toBeRequired();
  expect(screen.getByLabelText(/your email/i)).toBeRequired();
  expect(screen.getByLabelText(/project type/i)).toBeRequired();
  expect(screen.getByLabelText(/budget/i)).toBeRequired();
  expect(screen.getByLabelText(/timeline/i)).toBeRequired();
  expect(screen.getByLabelText(/your message/i)).toBeRequired();
});

test("shows an error alert when the email service is not configured", async () => {
  // CRA loads .env during tests, so clear the keys to exercise the
  // unconfigured branch — submitting must surface a visible error state.
  const saved = {};
  for (const key of EMAILJS_VARS) {
    saved[key] = process.env[key];
    delete process.env[key];
  }
  try {
    render(<Contact />);
    fireEvent.submit(screen.getByRole("form", { name: /contact form/i }));
    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/failed to send/i);
    });
  } finally {
    for (const key of EMAILJS_VARS) {
      if (saved[key] !== undefined) process.env[key] = saved[key];
    }
  }
});
