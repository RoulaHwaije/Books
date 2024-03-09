// components/BookForm.tsx
import Styles from "../styles/Form.module.css";
import React from "react";
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
  onSubmit: (data: any) => void;
  book: Book;
}

const BookEdited: React.FC<Props> = ({ onSubmit, book }) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button clicked!");
    router.push("/admin/books");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <>
      <h1 className={Styles.head}>Edit Book Information</h1>
      <form onSubmit={handleSubmit} className={Styles.book}>
        <div className={Styles.formInputs}>
          <input
            type="text"
            name="uniquekey"
            defaultValue={book.uniquekey}
            hidden
          />
          <label className={Styles.labeltext}>
            Title:
            <input
              type="text"
              name="title"
              className={Styles.input}
              defaultValue={book.title}
              required
            />
          </label>
          <label className={Styles.labeltext}>
            Author:
            <input
              type="text"
              name="author"
              className={Styles.input}
              defaultValue={book.author}
              required
            />
          </label>
          <label className={Styles.labeltext}>
            Price in $:
            <input
              className={Styles.input}
              defaultValue={book.price}
              type="text"
              name="price"
              required
            />
          </label>
          <label className={Styles.labeltext}>
            Description:
            <textarea
              name="description"
              className={Styles.textarea}
              defaultValue={book.description}
              required
            />
          </label>
          <label className={Styles.labeltext}>
            Cover Image URL:
            <textarea
              name="coverImage"
              className={Styles.textarea}
              defaultValue={book.coverImage}
            />
          </label>
        </div>
        <div className={Styles.btncontainer}>
          <button className={Styles.cancelbutton} onClick={handleClick}>
            Cancel
          </button>
          <button type="submit" className={Styles.button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default BookEdited;
