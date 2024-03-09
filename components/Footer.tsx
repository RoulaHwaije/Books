// components/Footer.tsx
import style from "../styles/Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGooglePlus } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className={style.section4}>
      <div className={style.footer}>
        <div className={style.column}>
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
          <a href="#">Clients</a>
          <a href="#">News</a>
        </div>
        <div className={style.column}>
          <h5>Services</h5>
          <a href="#">Read Books online</a>
          <a href="#">Download Books</a>
          <a href="#">Buy Books</a>
        </div>

        <div className={style.column}>
          <h5>Contacts</h5>
          <a href="#" className={style.email}>
            info@BestBook.net
          </a>
          <h4>Paris, France</h4>
          <a href="#" className={style.email}>
            MORE CONTACTS
            <span className={style.readBTNIcon}>
              <i className="fas fa-chevron-right"></i>
            </span>
          </a>
          <div className={style.socialicons}>
            <a href="#" className={style.facebook}>
              <FaFacebookSquare />
            </a>
            <a href="#" className={style.twitter}>
              <FaTwitter />
            </a>
            <a href="#" className={style.instagram}>
              <GrInstagram />
            </a>
            <a href="#" className={style.plus}>
              <FaGooglePlus />
            </a>
          </div>
        </div>
      </div>

      <div className={style.footer2}>
        <p>
          &copy;2024 Best Books
          <span className={style.footerspace}>|</span>
          <a href="#">Sitemap</a> <span className={style.footerspace}>|</span>
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
