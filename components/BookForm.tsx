// components/BookForm.tsx
import Styles from "../styles/Form.module.css";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  onSubmit: (data: any) => void;
}

const BookForm: React.FC<Props> = ({ onSubmit }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Button clicked!");
    router.push("/admin/books");
  };
  return (
    <>
      <h1 className={Styles.head}>Enter a new book details</h1>
      <form onSubmit={handleSubmit} className={Styles.book}>
        <div className={Styles.formInputs}>
          <label className={Styles.labeltext}>
            Title:
            <input className={Styles.input} type="text" name="title" required />
          </label>
          <label className={Styles.labeltext}>
            Author:
            <input
              className={Styles.input}
              type="text"
              name="author"
              required
            />
          </label>
          <label className={Styles.labeltext}>
            Price in $:
            <input className={Styles.input} type="text" name="price" required />
          </label>
          <label className={Styles.labeltext}>
            Description:
            <textarea className={Styles.textarea} name="description" required />
          </label>
          <label className={Styles.labeltext}>
            Cover Image URL:
            <textarea className={Styles.textarea} name="coverImage" />
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

export default BookForm;
