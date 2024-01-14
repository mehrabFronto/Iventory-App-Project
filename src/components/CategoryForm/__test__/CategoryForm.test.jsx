import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { expect, vi } from "vitest";
import CategoryForm from "../CategoryForm";

describe("Category Title input", () => {
   const addCategoryHandler = vi.fn();

   test("Should Have No Value In Input", () => {
      render(<CategoryForm addCategory={addCategoryHandler} />);
      const titleInput = screen.getByRole("textbox");
      expect(titleInput.value).toBe("");
   });

   test("Should Change Input Value", () => {
      render(<CategoryForm addCategory={addCategoryHandler} />);
      const titleInput = screen.getByRole("textbox");
      fireEvent.change(titleInput, { target: { value: "test" } });
      expect(titleInput.value).toBe("test");
   });

   test("Should Clear Input After Clicking Button", () => {
      render(<CategoryForm addCategory={addCategoryHandler} />);
      const titleInput = screen.getByRole("textbox");
      fireEvent.change(titleInput, { target: { value: "test" } });
      const button = screen.getByRole("button", { name: "Add" });
      fireEvent.click(button);
      expect(titleInput.value).toBe("");
   });
});
