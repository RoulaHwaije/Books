import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import BookDetail from "../../components/BookDetail";
import Modal from "../../components/Modal";

const BookDetailPage: React.FC<{ book: any }> = ({ book }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    router.push("/books");
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <BookDetail book={book} onClose={closeModal} />
    </Modal>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const bookId = params.id;
  const res = await axios.get(
    `https://company-78c40.europe-west1.firebasedatabase.app/books/${bookId}.json`
  );
  const book = res.data;
  return { props: { book } };
}

export default BookDetailPage;
