// components/BookDetail.tsx
// modal page
import Style from "../styles/Detailed.module.css";
import Modal from "../components/Modal";
import React, { useState } from "react";

interface Book {
  _id: string;
  uniquekey: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  price: string;
}

interface Props {
  book: Book;
  onClose: () => void;
}

const BookDetail: React.FC<Props> = ({ book, onClose }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button cancel clicked!");
    onClose();
  };

  return (
    <div className={Style.container}>
      <img src={book.coverImage} alt={book.title} className={Style.img} />
      <div className={Style.content}>
        <div className={Style.content1}>
          <div className={Style.booktitles}>
            <h1 className={Style.bookName}>
              {book.title}
              <span className={Style.price}> {book.price} $</span>
            </h1>
            <p className={Style.author}>
              <span className={Style.authorlabel}>Author:</span> {book.author}
            </p>
          </div>
          <div className={Style.desc1}>
            <h2 className={Style.desc}>Description: </h2>
            <p className={Style.paragragh}>{book.description}</p>
          </div>
        </div>
        <div className={Style.btncontainer}>
          <button onClick={handleClick} className={Style.button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
