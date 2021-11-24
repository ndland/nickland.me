/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import userEvent from "@testing-library/user-event";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

let router;

describe("Home", () => {
  beforeEach(() => {
    router = { push: jest.fn() };
    useRouter.mockReturnValue(router);
  });

  it("renders with a NavBar", () => {
    render(<Home />);

    const navBar = screen.getByLabelText("navbar");

    expect(navBar).toBeInTheDocument();
  });

  it("renders the text 'Nickland.me'", () => {
    render(<Home />);

    expect(screen.getByText(/nickland.me/i)).toBeInTheDocument();
  });

  it("will navigate to the 'About' page when the about button is clicked", () => {
    render(<Home />);

    const aboutButton = screen.getByRole("button", { name: /about/i });

    userEvent.click(aboutButton);

    expect(router.push).toHaveBeenCalledWith("/about");
  });

  it("will navigate to the 'Contact' page when the contact button is clicked", () => {
    render(<Home />);

    const contactButton = screen.getByRole("button", { name: /contact/i });

    userEvent.click(contactButton);

    expect(router.push).toHaveBeenCalledWith("/contact");
  });
});
