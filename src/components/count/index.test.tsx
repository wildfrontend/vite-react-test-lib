import { render, screen, fireEvent } from "@testing-library/react";
import Count from "./";
import { describe, expect, test } from "vitest";

describe("Count Component", () => {
  test("renders with default value of 0", () => {
    render(<Count />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  test("renders with a provided default value", () => {
    render(<Count defaultValue={5} />);
    expect(screen.getByText(/count is 5/i)).toBeInTheDocument();
  });

  test("increments count on button click", () => {
    render(<Count defaultValue={2} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText(/count is 3/i)).toBeInTheDocument();
  });
});