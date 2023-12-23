import { useState } from "react";
import Reviews from "./components/Reviews.jsx";
import Modal from "./components/Modal.jsx";
import Search from "./components/Search.jsx";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartAddReview() {
    setModalIsOpen(true);
  }

  function handleStopAddReview() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopAddReview}>
        <Search />
      </Modal>
      <Reviews onAddReview={handleStartAddReview} />
    </>
  );
}

export default App;
