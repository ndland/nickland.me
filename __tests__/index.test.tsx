/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders with a NavBar", () => {
    render(<Home />);

    const navBar = screen.getByLabelText("navbar");

    expect(navBar).toBeInTheDocument();
  });

  it("renders the text 'Nickland.me'", () => {
    render(<Home />);

    expect(screen.getByText(/nickland.me/i)).toBeInTheDocument();
  });
});
