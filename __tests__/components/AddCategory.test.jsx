import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Tests in <AddCategory />", () => {
  const inputValue = "Saitama";

  test("should change the value of the text box", () => {
    render(<AddCategory handleNewCategory={() => {}} />);

    const input = screen.getByTestId("test-input");
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("should call handleNewCategory if the input has a value", () => {
    const handleNewCategory = jest.fn();

    render(<AddCategory handleNewCategory={handleNewCategory} />);

    const input = screen.getByTestId("test-input");
    const form = screen.getByTestId("test-form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(handleNewCategory).toHaveBeenCalled();
    expect(handleNewCategory).toHaveBeenCalledTimes(1);
    expect(handleNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call handleNewCategory if input is empty", () => {
    const handleNewCategory = jest.fn();

    render(<AddCategory handleNewCategory={handleNewCategory} />);

    const input = screen.getByTestId("test-input");
    const form = screen.getByTestId("test-form");
    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(handleNewCategory).not.toHaveBeenCalled();
  });
});
