import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import Flag from "../Flag/Flag";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Flag />
      <h2>LearnLingo</h2>
      <div>
        <Link className={css.link}>Home</Link>
        <Link className={css.link}>Teachers</Link>
        <Link className={css.link}>Favorites</Link>
      </div>
      <div>
        <button className={css.loginButton}>
          <LoginIcon className={css.loginIcon}/>
          Log in
        </button>
        <button>Registration</button>
      </div>
    </header>
  );
};

export default Header;
