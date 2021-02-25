import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ItemCard from "./components/ItemCard";

const mockItem: ItemEntry = {
  _id: "f1f1f1",
  name: "Product Name",
  description: "Product Description",
  price: 4,
  avgRating: 4.5,
  isOnSale: true,
  stockCount: 400,
  imageUrl: "https://picsum.photos/200/300",
};

test("Renders App without crashing", () => {
  render(<App />);
});

describe("Test ItemCard", () => {
  it("accepts ItemEntry props", () => {
    render(
      <BrowserRouter>
        <ItemCard item={mockItem} />{" "}
      </BrowserRouter>
    );
    expect(screen.getByText("Product Name")).toBeInTheDocument();
  });
});
