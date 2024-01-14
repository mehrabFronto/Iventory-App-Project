import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../NavBar";

test("should exist h1 element", () => {
   render(<NavBar counter={0} />);
   expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});
