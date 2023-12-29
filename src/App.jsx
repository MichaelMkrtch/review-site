import { useState } from "react";
import Reviews from "./components/Reviews.jsx";
import Modal from "./components/Modal.jsx";
import Search from "./components/search/Search.jsx";
import AddReview from "./components/AddReview.jsx";

function App() {
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleStartSearch() {
    setSearchModalIsOpen(true);
  }

  function handleStopSearch() {
    setSearchModalIsOpen(false);
  }

  function handleStartAddReview() {
    setReviewModalIsOpen(true);
  }

  function handleStopAddReview() {
    setReviewModalIsOpen(false);
  }

  return (
    <>
      <Modal
        open={searchModalIsOpen}
        onClose={handleStopSearch}
        setSearchTerm={setSearchTerm}
      >
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Modal>
      <Modal
        open={reviewModalIsOpen}
        onClose={handleStopAddReview}
        setSearchTerm={setSearchTerm}
      >
        <AddReview />
      </Modal>
      <Reviews onSearch={handleStartSearch} />
    </>
  );
}

export default App;
