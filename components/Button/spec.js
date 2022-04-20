import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("should render the button with the label New Button", () => {
    const labelButton = "New Button"
    render(<Button url="/">{labelButton}</Button> );
    const buttonContent = screen.getByText(labelButton);
    expect(buttonContent).toBeInTheDocument();
  })

  it("should render the button with the url /products", () => {
    const labelButton = "New Button"
    const url = "/products"
    render(<Button url={url}>{labelButton}</Button> );
    expect(document.querySelector("a").getAttribute("href")).toBe("/products")
  });

  it("should not render the button if not pass the url", () => {
    const labelButton = "New Button"
    const url = ""
    const { container } = render(<Button url={url}>{labelButton}</Button> );
    expect(container.childElementCount).toEqual(0);
  });

  it("should not render the button if not pass the Label", () => {
    const labelButton = ""
    const url = "/products"
    const { container } = render(<Button url={url}>{labelButton}</Button> );
    expect(container.childElementCount).toEqual(0);
  });

});