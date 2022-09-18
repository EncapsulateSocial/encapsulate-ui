import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "./RegisterForm";

// Mock the useNavigate() function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("loads and displays register form", () => {
  render(<RegisterForm />);
  expect(screen.getByRole("heading")).toHaveTextContent("Create an Account");
});
