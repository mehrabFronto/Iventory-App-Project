import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, test } from "vitest";
import IventoryApp from "../IventoryApp";

describe("Add And Remove Category", () => {
   function addCategory(categories) {
      const titleInput = screen.getByPlaceholderText(/category title/i);
      const button = screen.getByTestId("category-btn");

      categories.forEach((category) => {
         fireEvent.change(titleInput, { target: { value: category.title } });
         fireEvent.click(button);
      });
   }

   test("Should Add Category", () => {
      render(<IventoryApp />);

      addCategory([{ title: "test" }]);

      // Open categories list modal
      const pElement = screen.getByText(/Categories List ?/i);
      fireEvent.click(pElement);

      // Check if new category was added or no
      const categoryItem = screen.getByTestId("category-item");
      expect(categoryItem).toBeInTheDocument();
   });

   test("Should Remove Category", () => {
      render(<IventoryApp />);

      // Open categories list modal
      const pElement = screen.getByText(/Categories List ?/i);
      fireEvent.click(pElement);

      const deleteCategoryBtn = screen.getByTestId("delete-category-btn");
      fireEvent.click(deleteCategoryBtn);

      const finalDeleteCategoryBtn = screen.getByTestId(
         "final-delete-category-btn",
      );
      fireEvent.click(finalDeleteCategoryBtn);

      const categoryItem = screen.queryByTestId("category-item");
      expect(categoryItem).not.toBeInTheDocument();
   });
});
