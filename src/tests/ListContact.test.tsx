import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ListContact from "../components/ListContact";

test("Renderiar el componente ListContact con los props proporcionados", () => {
  const name = "John Doe";
  const avatar = "avatar-url.jpg";
  const createdAt = "2024-06-28";

  render(<ListContact name={name} avatar={avatar} createdAt={createdAt} />);

  // Verificar que el nombre, avatar y fecha de creación se rendericen correctamente
  expect(screen.getByText(name)).toBeDefined();
  expect(screen.getByAltText("Contact Avatar")).toHaveProperty("src");
  expect(screen.getByText(createdAt)).toBeDefined();
});
