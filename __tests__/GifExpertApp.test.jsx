import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Tests in <GifExpertApp />", () => {
  test("should add a new category", () => {
    render(<GifExpertApp />);

    const input = screen.getByTestId("test-input");
    const form = screen.getByTestId("test-form");
    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);

    expect(screen.getAllByTestId("test-category").length).toBe(2);
  });

  test("should not add a category", () => {
    render(<GifExpertApp />);

    const input = screen.getByTestId("test-input");
    const form = screen.getByTestId("test-form");
    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    expect(screen.getAllByTestId("test-category").length).toBe(1);
  });
});
