import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renderizar la pagina principal", () => {
  render(<App />);
  expect(true).toBeTruthy();
});

test("Renderizar la pagina principal con los botones Tasks y Lists", () => {
  render(<App />);

  // Verificar si los botones estan presentes y tienen el texto correcto
  const tasksButton = screen.getByRole("link", { name: /tasks/i });
  const listsButton = screen.getByRole("link", { name: /lists/i });

  expect(tasksButton).toBeDefined();
  expect(listsButton).toBeDefined();
});
