/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders with an AppBar", () => {
    render(<Home />);

    const appBar = screen.getByLabelText("menu");

    expect(appBar).toBeInTheDocument();
  });
});
