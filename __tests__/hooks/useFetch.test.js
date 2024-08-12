import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";

describe("Tests in getFetch()", () => {
  test("should return to the initial state", () => {
    const { result } = renderHook(() => useFetch("One Punch"));
    const { info, isLoading } = result.current;

    expect(info.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of images and the isLoading in false", async () => {
    const { result } = renderHook(() => useFetch("Dragon Ball"));

    await waitFor(() => expect(result.current.info.length).toBeGreaterThan(0));

    const { info, isLoading } = result.current;

    expect(info.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
