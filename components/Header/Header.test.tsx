import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

let router;

describe("Header", () => {
  beforeEach(() => {
    router = { push: jest.fn(), pathname: "/about" };
    useRouter.mockReturnValue(router);
  });

  it("renders 'Nick Land' in the header", () => {
    render(<Header />);

    expect(screen.getByText(/nick land/i)).toBeInTheDocument();
  });

  it("sets 'text-gray-400' class on the active page", () => {
    render(<Header />);

    const aboutButton = screen.getByRole("button", { name: /about/i });

    expect(aboutButton).toHaveClass("text-gray-400");
  });

  it("does not set 'text-gray-400' on the page that is not active", () => {
    render(<Header />);

    const contactButton = screen.getByRole("button", { name: /contact/i });

    expect(contactButton).not.toHaveClass("text-gray-400");
  });
});
