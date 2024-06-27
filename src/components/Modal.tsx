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
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full overflow-auto z-1 bg-black/50">
      <div className="flex flex-col bg-white m-[15% auto] p-5 border brder-solid border-[#888] w-96 rounded-2xl">
        <div>
          <span
            className="text-[#aaaaaa] cursor-pointer float-right mb-5 text-2xl"
            onClick={onClose}
          >
            &times;
          </span>
        </div>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="New Task Name"
          className="h-12 pl-2 mb-4 text-black border border-black rounded-md borer-solid placeholder:text-black"
        />
        <button
          onClick={handleSubmit}
          className="px-32 py-5 mb-4 font-bold bg-blue-300 border border-solid rounded-lg"
        >
          Add
        </button>
        {errorMessage && (
          <span className="text-center text-red-500">Please enter a task</span>
        )}
      </div>
    </div>
  );
};

export default Modal;
