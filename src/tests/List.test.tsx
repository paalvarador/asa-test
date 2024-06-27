import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Lists from "../pages/Lists";

test("Renderizar la pagina de Lists", () => {
  render(<Lists />);
  expect(true).toBeTruthy();
});
