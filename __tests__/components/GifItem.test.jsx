import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Tests in <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("should display the image with the corresponding info", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByTestId("test-image");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should display the title with the corresponding text", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByTestId("test-text").innerHTML).toContain(title);
  });
});
