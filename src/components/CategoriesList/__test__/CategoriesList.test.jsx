import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import CategoriesList from "../CategoriesList";

describe("Category List Modal", () => {
   const removeHandler = vi.fn();

   test("Should Not Render Category List Modal", () => {
      render(
         <CategoriesList
            categories={[]}
            onRemove={removeHandler}
         />,
      );
      const modal = screen.queryByText(/Categories List:/i);
      expect(modal).not.toBeInTheDocument();
   });

   test("Should Render Category List Modal", () => {
      render(
         <CategoriesList
            categories={[]}
            onRemove={removeHandler}
         />,
      );
      const pElement = screen.getByText(/Categories List ?/i);
      fireEvent.click(pElement);
      const modal = screen.getByText(/Categories List:/i);
      expect(modal).toBeInTheDocument();
   });

   test("Should Close Category List Modal After Clicking Button", () => {
      render(
         <CategoriesList
            categories={[]}
            onRemove={removeHandler}
         />,
      );
      const pElement = screen.getByText(/Categories List ?/i);
      fireEvent.click(pElement);
      const closeModalBtn = screen.getByTestId("close-modal");
      fireEvent.click(closeModalBtn);
      const modal = screen.queryByText(/Categories List:/i);
      expect(modal).not.toBeInTheDocument();
   });

   test("Should Close Category List Modal After Clicking Backdrop", () => {
      render(
         <CategoriesList
            categories={[]}
            onRemove={removeHandler}
         />,
      );
      const pElement = screen.getByText(/Categories List ?/i);
      fireEvent.click(pElement);
      const backdrop = screen.getByTestId("backdrop");
      fireEvent.click(backdrop);
      const modal = screen.queryByText(/Categories List:/i);
      expect(modal).not.toBeInTheDocument();
   });
});
