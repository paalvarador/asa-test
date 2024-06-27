import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Tasks from "../pages/Tasks";
import store from "../redux/store";
import { Provider } from "react-redux";

test("Renderizar la página de Tasks", () => {
  render(
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
  expect(true).toBeTruthy();
});
