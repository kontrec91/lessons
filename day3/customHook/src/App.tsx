import { useRef, useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    console.log("isOpen", isModalOpen);
    setIsModalOpen(false);
    console.log("ref", modalRef);
  }

  function openModal() {
    console.log("isOpen", isModalOpen);
    setIsModalOpen(true);
    console.log("ref", modalRef);
  }

  return (
    <div className="main">
      <button className="modal-button" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} ref={modalRef}>
        <Modal.Content>
          <Modal.Header>Заголовок</Modal.Header>
          <Modal.Body>Текст</Modal.Body>
          <Modal.Footer>
            <button onClick={closeModal} className="modal-button">
              Закрыть
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
