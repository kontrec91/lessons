import { useState } from "react";
import "./App.css";
// import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    console.log("isOpen", isModalOpen);
    setIsModalOpen(false);
  }

  function openModal() {
    console.log("isOpen", isModalOpen);
    setIsModalOpen(true);
  }

  // function handleModal() {
  //   setIsModalOpen((prev) => !prev);
  //   console.log("isOpen", isModalOpen);
  // }

  return (
    <div className="main">
      {/* <Card>
        <Card.Header>
          <h3>Новость дня</h3>
        </Card.Header>
        <Card.Body>
          <p>Сегодня солнечно и тепло.</p>
        </Card.Body>
        <Card.Footer>
          <small>Автор: Иван</small>
        </Card.Footer>
      </Card> */}

      <button className="modal-button" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
