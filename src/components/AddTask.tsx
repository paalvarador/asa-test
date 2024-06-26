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
        className="border border-solid px-32 py-3 rounded-lg bg-blue-300 mb-4"
      >
        New Task
      </button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default AddTaskButton;
