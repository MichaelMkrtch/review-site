import { useState } from "react";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStopAddReview() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopAddReview} />
      <Header />
    </>
  );
}

export default App;
