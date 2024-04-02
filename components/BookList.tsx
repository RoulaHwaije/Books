import React from "react";
import Link from "next/link";
import BookCard from "./BookCard";
import style from "../styles/Card.module.css";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { MdAddToPhotos } from "react-icons/md";

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
  books: Book[];
  isAdmin: boolean;
}

const BookList: React.FC<Props> = ({ books, isAdmin }) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/admin/books/addnew");
  };

  return (
    <div>
      <div className={style.gridcontainer}>
        {books.map((book) => (
          <BookCard book={book} key={book._id} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
