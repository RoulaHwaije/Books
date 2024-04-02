import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import BookEdited from "../../../../components/BookEdited";
import Modal from "../../../../components/Modal";

interface Book {
  _id: string;
  uniquekey: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  price: string;
}

const editPage: React.FC<{ book: Book }> = ({ book }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    router.push("/admin/books");
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData: any) => {
    const uniquekey = router.query.id;
    formData._id = book._id;
    formData.uniquekey = uniquekey;
    try {
      await axios.put(
        `https://company-78c40.europe-west1.firebasedatabase.app/books/${uniquekey}.json`,
        formData
      );
      router.push("/admin/books");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <BookEdited book={book} onSubmit={handleSubmit} />
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

export default editPage;
