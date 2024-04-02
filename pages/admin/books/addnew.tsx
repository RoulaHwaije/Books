import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import BookForm from "../../../components/BookForm";
import Modal from "@/components/Modal";

const NewBookPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    router.push("/admin/books");
    setIsModalOpen(false);
  };

  function generateRandomId(length: any) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const randomId = generateRandomId(10);
  const handleSubmit = async (formData: any) => {
    formData._id = randomId;
    try {
      await axios.post(
        "https://company-78c40.europe-west1.firebasedatabase.app/books.json",
        formData
      );
      router.push("/admin/books");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <BookForm onSubmit={handleSubmit} />
    </Modal>
  );
};

export default NewBookPage;
