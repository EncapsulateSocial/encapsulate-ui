import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Login from "../../views/Login/Login";

// Mock React Router DOM dependency
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  // Only mock useNavigate
  return {
    ...originalModule,
    useNavigate: () => jest.fn(),
  };
});

describe("Login", () => {
  it("displays the heading 'Sign Into Account'", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

    // Verify that the correct heading is displayed
    const heading = screen.getByText("Sign Into Account").textContent;
    expect(heading).toBe("Sign Into Account");
  });

  it("redirects to the register page when sign up button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

    // Click on the sign up button
    const signUpButton = screen.getByText("Create account");
    signUpButton.dispatchEvent(new MouseEvent("click"));

    // Verify that the page has been redirected to the sign in page
    const heading = screen.getByText("Sign Into Account").textContent;
    expect(heading).toBe("Sign Into Account");
  });
});
