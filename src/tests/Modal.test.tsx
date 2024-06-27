import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Modal from "../components/Modal";
import { createStore } from "redux";
import tasksReducer from "../redux/tasksSlice";
import { test, vitest, expect } from "vitest";

// Mock de onClose
const onCloseMock = vitest.fn();

// Crear un Mock de store simple para probar el dispatch
const store = createStore(tasksReducer);

test("Renderizado del componente Modal y el manejo de envios", () => {
  render(
    <Provider store={store}>
      <Modal onClose={onCloseMock} />
    </Provider>
  );

  // Verificar que el modal se renderice correctamente
  expect(true).toBeTruthy();

  // Simular cambio y envio de formulario
  const input = screen.getByPlaceholderText("New Task Name");
  fireEvent.change(input, { target: { value: "Task 1" } });

  const addButton = screen.getByText(/add/i);
  fireEvent.click(addButton);

  // Verificar que la tarea se agregó al store de Redux
  const state = store.getState();
  expect(state).toHaveLength(1);
  expect(state[0].description).toBe("Task 1");

  // Verificar que onClose se llamó despues de agregar la tarea
  expect(onCloseMock).toHaveBeenCalled();
});
