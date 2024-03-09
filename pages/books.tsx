import React from "react";
import axios from "axios";
import BookList from "../components/BookList";
import style from "../styles/User.module.css";
import { useRouter } from "next/router";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Link from "next/link";

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
        <div className={style.Textsection}>
          <h2 className={style.headert1}>Explore a curated catalogue</h2>
          {/* <h1 className={style.headert2}>picked for you</h1> */}
          <h1 className={style.headert3}>Available at the best prices</h1>
          <a className={style.link1} href="#BookList">
            <p>Get started</p> <BsFillArrowDownSquareFill />
          </a>
        </div>

        <img
          src="http://localhost:3000/ebooks-graphic.jpg"
          alt="book3"
          className={style.imageUser}
        />
      </div>
      <div id="BookList">
        <div className={style.headerUser2}>
          <h1 className={style.userTitle2}>Books for you</h1>
        </div>
        <BookList books={books} isAdmin={false} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    "https://company-78c40.europe-west1.firebasedatabase.app/books.json"
  );
  const DATA = res.data;
  console.log("data : ", DATA); // -> object
  var books: any[] = [];

  for (let key in DATA) {
    console.log(key, " -- ", DATA[key]);
    DATA[key].uniquekey = key;
    books.push(DATA[key]);
  }
  return { props: { books } };
}

export default Books;
