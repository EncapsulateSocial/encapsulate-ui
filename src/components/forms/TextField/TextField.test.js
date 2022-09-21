import { render, screen } from "@testing-library/react";
import React from "react";
import TextField from "./TextField";

describe("TextField", () => {
  it("correctly sets the placeholder", () => {
    render(<TextField label="Username" />);
    expect(screen.getByPlaceholderText("Username")).toBeTruthy();
  });
});
