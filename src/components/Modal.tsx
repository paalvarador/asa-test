import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/tasksSlice";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!description) {
      setErrorMessage("Please enter description");
      return;
    }

    console.log(`descripcion: ${description}`);
    /* Cuando el usuario ingresa una nueva tarea, esta se debe almacenar el redux */
    dispatch(addItem({ description }));

    onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-black/50">
      <div className="flex flex-col bg-white m-[15% auto] p-5 border brder-solid border-[#888] w-96 rounded-2xl">
        <span
          className="block text-[#aaaaaa] w-5 text-lg font-bold text-center float-right mb-2"
          onClick={onClose}
        >
          &times;
        </span>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="New Task Name"
          className="border borer-solid border-black rounded-md h-10 pl-2 text-black placeholder:text-black mb-4"
        />
        <button
          onClick={handleSubmit}
          className="border border-solid px-32 py-3 rounded-lg bg-blue-300 mb-4"
        >
          Add
        </button>
        {errorMessage && (
          <span className="text-red-500 text-center">Please enter a task</span>
        )}
      </div>
    </div>
  );
};

export default Modal;
