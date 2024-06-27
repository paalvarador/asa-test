import { useState } from "react";
import Modal from "./Modal";

function AddTaskButton() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <button
        onClick={handleButtonClick}
        className="px-32 py-5 mb-4 font-bold bg-blue-300 border border-solid rounded-lg"
      >
        New Task
      </button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default AddTaskButton;
