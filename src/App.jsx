import { useState } from "react";
import Reviews from "./components/Reviews.jsx";
import Modal from "./components/Modal.jsx";
import Search from "./components/search/Search.jsx";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleStartAddReview() {
    setModalIsOpen(true);
  }

  function handleStopAddReview() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={handleStopAddReview}
        setSearchTerm={setSearchTerm}
      >
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Modal>
      <Reviews onAddReview={handleStartAddReview} />
    </>
  );
}

export default App;
