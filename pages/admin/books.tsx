import React, { useState } from "react";
import axios from "axios";
import BookList from "../../components/BookList";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { MdAddToPhotos } from "react-icons/md";

interface Book {
  _id: string;
  uniquekey: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  price: string;
}

const Books: React.FC<{ books: Book[] }> = ({ books }) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/admin/books/addnew");
  };

  return (
    <div className={style.maincontainer}>
      <div className={style.section1}>
        <img
          src="http://localhost:3000/bookadmin.jpg"
          alt="book2"
          className={style.imageAdmin}
        />
        <div className={style.textsection}>
          <h1 className={style.line1}>Easily manage, update, and view</h1>
          <h1 className={style.line2}>all books details at our shop center</h1>
          <div className={style.btnsection}>
            <button className={style.addbtn2} onClick={handleClick}>
              Add a new Book
            </button>
          </div>
        </div>
      </div>
      <BookList books={books} isAdmin={true} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    "https://company-78c40.europe-west1.firebasedatabase.app/books.json"
  );
  const DATA = res.data;
  var books: any[] = [];

  for (let key in DATA) {
    DATA[key].uniquekey = key;
    books.push(DATA[key]);
  }
  return { props: { books } };
}

export default Books;
