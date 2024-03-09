import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "../styles/Card.module.css";
import Button from "../components/Button";
import { useRouter } from "next/router";

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
  isAdmin: boolean;
}

const BookCard: React.FC<Props> = ({ book, isAdmin }) => {
  const router = useRouter();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button clicked!");
    if (isAdmin) {
      router.push(`/admin/books/${book.uniquekey}`);
    } else {
      router.push(`/books/${book.uniquekey}`);
    }
  };

  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button handleEdit click!");
    router.push(`/admin/books/edit/${book.uniquekey}`);
  };

  return (
    <div className={Style.cardContainer}>
      <div className={Style.card}>
        <div className={Style.container1}>
          {/* <Link href={`/books/${book.uniquekey}`}> */}
          <img src={book.coverImage} alt={book.title} className={Style.img} />
          {/* </Link> */}
          <h2 className={Style.bookName}>{book.title}</h2>
          <h5 className={Style.author}> By {book.author}</h5>
          <p className={Style.price}> {book.price} $</p>
        </div>
        <div className={Style.center}>
          <Button onClick={handleClick} edit={false}>
            View Details
          </Button>
          {isAdmin && (
            <Button onClick={handleEdit} edit={true}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
