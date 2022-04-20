import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CategoryItem from "./index";

describe("Category Card", () => {
  it("should render the Cateogry card", () => {
    const imageURL = "https://dummyimage.com/600x400";
    const categoryCard = "Cars";

    render(<CategoryItem image={imageURL} category={categoryCard}/> );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', categoryCard);
    const categoryName = screen.getByText(categoryCard);
    expect(categoryName).toBeInTheDocument();
  })

  it("should not render the Cateogry card without image", () => {
    const imageURL = "";
    const categoryCard = "Cars";

    const { container } =  render(<CategoryItem image={imageURL} category={categoryCard}/> );
    expect(container.childElementCount).toEqual(0);
  })

  it("should not render the Cateogry card without Category", () => {
    const imageURL = "https://dummyimage.com/600x400";
    const categoryCard = "";

    const { container } =  render(<CategoryItem image={imageURL} category={categoryCard}/> );
    expect(container.childElementCount).toEqual(0);
   
  })

});