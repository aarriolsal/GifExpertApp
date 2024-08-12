import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Tests in <GifGrid />", () => {
  const category = "One Punch";
  test("should initially display the loading", () => {
    useFetch.mockReturnValue({
      info: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByTestId("test-loading"));
    expect(screen.getByText(category));
  });

  test("should display items when loading images using useFetch", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://one-punch.com/saitama.jpg",
      },
      {
        id: "ABD",
        title: "Goku",
        url: "https://dragon-ball.com/goku.jpg",
      },
    ];

    useFetch.mockReturnValue({
      info: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
